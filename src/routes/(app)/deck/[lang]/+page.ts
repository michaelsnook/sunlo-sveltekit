import { supabase } from '$lib'
// import type { PageLoad } from './phrase/[pid]/$types.js'

const oneWeekAgo = () => {
	let dt = new Date()
	dt.setHours(0, 0, 0, 0)
	dt.setDate(dt.getDate() - 7)
	return dt.toISOString()
}

async function fetchRecentReviews(lang: string) {
	const priorTime = oneWeekAgo()
	return await supabase
		.from('user_card_review_plus')
		.select(`id, created_at, card_id, score`)
		.eq('lang', lang)
		.gt('created_at', priorTime)
}

async function fetchDeck(lang: string) {
	return await supabase
		.from('user_deck_mine')
		.select(
			'id, lang, created_at, cards_active, cards_learned, cards_skipped, lang_total_phrases, most_recent_review_at'
		)
		.eq('lang', lang)
		.maybeSingle()
}

export async function load({ params: { lang } }) {
	// console.log(`Running async load function for deck/[${lang}]/+page.ts`)

	const reviewsQuery = fetchRecentReviews(lang)
	const deckQuery = fetchDeck(lang)

	const { data: deck, error: deckError } = await deckQuery
	const { data: reviews, error: reviewsError } = await reviewsQuery

	const loaded = {
		lang,
		deck,
		reviews,
		deckError,
		reviewsError,
	}

	// console.log(`Loaded this data in deck[lang]page.ts`, loaded)
	return loaded
}
