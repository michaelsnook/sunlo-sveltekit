// @ts-nocheck

/* groups an array of objects into a lookup table based on a provided key
	e.g. to group an array of objects by name, groupBy(array, 'fruitName') and get
	{
		"Banana": [{}, {}, {}],
	 	"Musk Melon": [{}, {}],
		...
	}
*/
export default function groupBy(array, key) {
	let result = {}
	array.forEach((item) => {
		result[item[key]] ??= []
		result[item[key]].push(item)
	})
	return result
}
