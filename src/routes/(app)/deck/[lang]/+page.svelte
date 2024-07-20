<script lang="ts">
	import RecentReviewsSummary from './RecentReviewsSummary.svelte'
	import CardsSummary from './CardsSummary.svelte'
	const { data } = $props()
	const { lang, deck, reviews, deckError, reviewsError } = data
</script>

<main class="mx-auto w-app">
	{#if deck === null}
		<p>
			Are you sure you&apos;re learning this language? To create a deck and{' '}
			<a class="s-link" href="/my-decks/new">start learning {lang}, click here</a>.
		</p>
	{:else}
		<div class="grid gap-6 max-w-[44rem]">
			<div class="card glass">
				<figure>
					<RecentReviewsSummary {reviews} {reviewsError} />
				</figure>
				<div class="card-body">
					<a href="/review/${lang}" class="btn btn-lg"> Start a review session </a>
				</div>
			</div>

			<div class="card glass">
				<figure>
					<CardsSummary {deck} />
				</figure>
				<div class="card-body">
					<a href="/my-decks/{lang}" class="btn btn-lg"> Browse/manage your deck </a>
				</div>
			</div>
		</div>
	{/if}
</main>
