import { supabase } from '$lib'

export async function load({ params }) {
	const { data, error } = await supabase
		.from('phrase')
		.select('*')
		.eq('lang', params.lang)
		.maybeSingle()
	if (error) throw error

	const phrases = groupBy(data, 'id')
	return phrases
}
