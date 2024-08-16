import { supabase, selects } from '$lib'
import type {
	CardsMap,
	DeckFetched,
	DeckLoaded,
	LanguageFetched,
	LanguageLoaded,
	PhrasesMap,
	pids,
	Profile,
	uuid,
} from '$lib/types/main'
import type { PostgrestError } from '@supabase/supabase-js'
import { queryOptions } from '@tanstack/svelte-query'
import { mapArray } from './utils'

export const profileQuery = () => {
	// access uid somehow
	const uid = ''
	queryOptions<Profile, PostgrestError>({
		queryKey: ['user', 'profile', uid],
		queryFn: async (): Promise<Profile | null> => {
			const { data } = await supabase
				.from('user_profile')
				.select(`*, decks:user_deck_plus(*)`)
				.eq('uid', uid)
				.maybeSingle()
				.throwOnError()
			return data
		},
	})
}

async function fetchLanguage(lang: string): Promise<LanguageLoaded> {
	const { data } = await supabase
		.from('language_plus')
		.select(selects.language_full())
		.eq('lang', lang)
		.maybeSingle()
		.throwOnError()
	const { phrases: phrasesArray, ...meta }: LanguageFetched = data
	const pids: pids = phrasesArray?.map((p) => p.id)
	const phrases: PhrasesMap = mapArray(phrasesArray, 'id')
	return {
		meta,
		pids,
		phrases,
	}
}

export const languageQuery = (lang: string) =>
	queryOptions({
		queryKey: ['language', lang],
		queryFn: async ({ queryKey }) => fetchLanguage(queryKey[1]),
		enabled: typeof lang === 'string' && lang.length === 3,
		gcTime: 1_200_000,
		staleTime: 120_000,
		refetchOnWindowFocus: false,
	})

async function fetchDeck(lang: string): Promise<DeckLoaded> {
	const { data } = await supabase
		.from('user_deck_plus')
		.select(selects.deck_full())
		.eq('lang', lang)
		.maybeSingle()
		.throwOnError()
	const { cards: cardsArray, ...meta }: DeckFetched = data
	const pids: pids = cardsArray.map((c) => c.phrase_id)
	const cards: CardsMap = mapArray(cardsArray, 'phrase_id')
	return {
		meta,
		pids,
		cards,
	}
}

export const deckQuery = (lang: string) =>
	queryOptions({
		queryKey: ['user', lang],
		queryFn: async ({ queryKey }) => fetchDeck(queryKey[1]),
		enabled: typeof lang === 'string' && lang.length === 3,
	})

const oneWeekAgo = () => {
	const dt = new Date()
	dt.setHours(0, 0, 0, 0)
	dt.setDate(dt.getDate() - 7)
	return dt.toISOString()
}

async function fetchRecentReviews(lang: string, since: string) {
	return await supabase
		.from('user_card_review_plus')
		.select(`id, created_at, card_id, score`)
		.eq('lang', lang)
		.gt('created_at', since)
}

export const recentReviewsQuery = (lang: string) => {
	const priorTime = oneWeekAgo()
	return queryOptions({
		queryKey: ['user', lang, 'reviews', priorTime],
		queryFn: async ({ queryKey }) => fetchRecentReviews(queryKey[1], queryKey[3]),
	})
}
