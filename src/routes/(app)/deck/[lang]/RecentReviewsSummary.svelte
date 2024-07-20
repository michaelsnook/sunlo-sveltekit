<script lang="ts">
	import Error from 'components/Error.svelte'
	const { reviews, reviewsError } = $props()
	const countReviews = reviews?.length
	const countPositive = reviews?.filter((r) => r.score > 0).length
</script>

{#if reviewsError}
	<Error>{reviewsError.message}</Error>
{:else}
	<div class="text-base-content bg-base-200 card-body">
		<div class="card-title">Review flash cards</div>
		{countReviews > 5 && `You've been studying ${countReviews > 40 ? 'a lot!' : ' – '}`}
		I see {countReviews} cards reviewed in the last week
		{countPositive > 0 && ` and you remembered ${countPositive} of them`}. Keep at it!
	</div>
{/if}
