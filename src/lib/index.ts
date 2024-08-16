// place files you want to import through the `$lib` alias in this folder.
import supabase from './supabase-client'
import { collateArray } from './utils'
import groupBy from './array-group-by'
import { selects } from '$lib/utils'
import { profileQuery, deckQuery, languageQuery, recentReviewsQuery } from './queries'

export {
	supabase,
	collateArray,
	groupBy,
	selects,
	profileQuery,
	deckQuery,
	languageQuery,
	recentReviewsQuery,
}
