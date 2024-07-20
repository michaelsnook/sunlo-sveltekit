import { supabase } from '$lib'

export async function load({ params: { lang } }) {
	console.log(`Running async load function for deck/[${lang}]/+page.ts`)
	const priorTime = (() => {
		let dt = new Date()
		dt.setHours(0, 0, 0, 0)
		dt.setDate(dt.getDate() - 7)
		return dt.toISOString()
	})()

	return await supabase
		.from('user_card_review_plus')
		.select(`id, created_at, card_id, score`)
		.eq('lang', lang)
		.gt('created_at', priorTime)
}
