<script lang="ts">
	import SuccessCheckmark from 'components/SuccessCheckmark.svelte'
	import CardInner from './CardInner.svelte'
	import Navbar from 'components/Navbar.svelte'
	import type { Review } from '$lib/types/client-types'

	const { data } = $props()
	const { lang, cards } = data

	let cardIndex = $state(0)
	let reviews: Array<Review> = $state([])

	let canBackup = $derived(cardIndex > 0)
	let canAdvance = $derived(cardIndex < cards.length - 1)

	function gobackaCard() {
		cardIndex--
	}
	function advanceCard() {
		cardIndex++
	}

	const addReview = (review: Review) => {
		const index = reviews.findIndex((r) => r.id === review.id)
		if (index === -1) reviews.push(review)
		else reviews[index] = review
	}
</script>

<main class="w-app">
	{#if !(cards.length > 0)}
		<p>This is empty. You don&apos;t have any active cards. go choose some more pls.</p>
	{:else}
		<div class="h-full grid gap-8 pt-10 @lg:pt-0">
			<Navbar title="Reviewing {lang} ({cardIndex + 1} out of {cards.length})" />
			<div class="flex justify-center gap-4 absolute @lg:static bottom-10 left-0 right-0">
				<button type="button" class="btn btn-primary" onclick={gobackaCard} disabled={!canBackup}>
					Prev card
				</button>
				<button type="button" class="btn btn-primary" onclick={advanceCard} disabled={!canAdvance}>
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
				<CardInner
					{card}
					nextCard={advanceCard}
					{addReview}
					hidden={card.id !== cards[cardIndex]?.id}
				/>
			{/each}
		</div>
	{/if}
</main>
