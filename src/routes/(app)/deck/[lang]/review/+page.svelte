<script lang="ts">
	import SuccessCheckmark from 'components/SuccessCheckmark.svelte'
	import CardInner from './CardInner.svelte'
	import Navbar from 'components/Navbar.svelte'
	const { data } = $props()
	const { lang, cards } = data

	const cardIndex = $state(0)
	const reviews = $state([])

	const canBackup = cardIndex > 0
	const canAdvance = cardIndex < cards.length - 1
	const gobackaCard = () => setCardIndex((i) => i - 1)
	const advanceCard = () => setCardIndex((i) => i + 1)
	// This is different from advanceCard because it only wants to move forward
	// by 1 after submitting a review, not to stack with button-clicks.
	const nextCard = () => setCardIndex(cardIndex + 1)

	const addReview = (review) => {
		const index = reviews.findIndex((r) => r.id === review.id)
		let newReviews = reviews
		if (index === -1) newReviews.push(review)
		else newReviews[index] = review
		setReviews(newReviews)
	}

	/*
	const { data, status } = useDeck(lang)
  const reviewCards = useMemo(() => shuffle(data?.cards?.active), [data])
  const [cardIndex, setCardIndex] = useState(0)
  const [reviews, setReviews] = useState([])
	*/
</script>

<main class="w-app">
	{#snippet empty()}
		<p>This is empty. You don&apos;t have any active cards. go choose some more pls.</p>
	{/snippet}

	{#if !(cards.length > 0)}
		{@render empty()}
	{:else}
		<div class="h-full grid gap-8 pt-10 @lg:pt-0">
			<Navbar title="Reviewing {lang} ({cardIndex + 1} out of {cards.length})" />
			<div class="flex justify-center gap-4 absolute @lg:static bottom-10 left-0 right-0">
				<button class="btn btn-primary" onclick={gobackaCard} disabled={!canBackup}>
					Prev card
				</button>
				<button class="btn btn-primary" onclick={advanceCard} disabled={!canAdvance}>
					Next card
				</button>
			</div>
			{#if !(cardIndex < cards.length)}
				<div class="flex flex-row mx-auto gap-6 place-items-center my-10">
					<SuccessCheckmark />
					<p>All done for the day, nice work!</p>
				</div>
			{/if}
			{#each cards as card}
				<CardInner {card} {nextCard} {addReview} hidden={card.id !== cards[cardIndex]?.id} />
			{/each}
		</div>
	{/if}
</main>
