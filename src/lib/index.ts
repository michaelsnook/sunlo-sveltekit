// place files you want to import through the `$lib` alias in this folder.
import supabase from './supabase-client'
import { collateArray, selects } from './utils'
import { profileQuery, deckQuery, languageQuery, recentReviewsQuery } from './queries'
import { useAuth } from './session-store.svelte'

export {
	useAuth,
	supabase,
	collateArray,
	selects,
	profileQuery,
	deckQuery,
	languageQuery,
	recentReviewsQuery,
}
