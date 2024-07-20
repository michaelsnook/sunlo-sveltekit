import { groupBy, supabase } from '$lib'

function shuffle(array: Array<any>) {
	if (!(array?.length > 0)) return []
	for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
		const randomIndex = Math.floor(Math.random() * (currentIndex + 1))
		let temp = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temp
	}
	return array
}

export async function load({ params: { lang } }) {
	const { data, error } = await supabase
		.from('user_deck')
		.select(
			`
      id, lang, user_card(
        status, id, phrase_id, phrase(
          text, lang, id, translations:phrase_translation(*)
        )
      )
    `
		)
		.eq('lang', lang)
		.maybeSingle()

	const grouped = groupBy(data?.user_card, 'status')
	const cards = shuffle(grouped['active'])
	console.log(`Logging the data from deck/lang/review`, cards)

	return { lang, cards }
}
