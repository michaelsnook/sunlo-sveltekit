import type { ReviewsCollated } from '$lib/types/client-types'
import { supabase, groupBy } from '$lib'

export async function postReview(card_id: string, score: number, id?: string | null | undefined) {
	if (!card_id || !score) return { error: { message: 'Invalid review; cannot log' } }
	const submitData = {
		score,
		card_id,
		id,
	}
	// console.log(`About to post the review,`, submitData, prevId)
	const { data, error } = await supabase
		.from('user_card_review')
		.upsert(submitData)
		.select()
		.maybeSingle()
	console.log(`Posted review`, data, error)
	return { data, error }
}

export async function getRecentReviewActivity<ReviewsCollated>() {
	const { data, error } = await supabase
		.from('user_card_review_plus')
		.select('*')
		.order('created_at', { ascending: false })
	if (error) throw error

	const result = collateArray(data, 'lang')
	console.log(`The collated array`, result)

	return {
		list: data,
		collated: result,
		keysInOrder: Object.keys(result),
	}
}
