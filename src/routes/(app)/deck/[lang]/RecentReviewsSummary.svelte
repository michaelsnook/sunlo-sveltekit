<script lang="ts">
	import Error from 'components/Error.svelte'
	const { data, error } = $props()
	const countReviews = data?.length
	const countPositive = data?.filter((r) => r.score > 0).length
</script>

{#if error}
	<Error>{error.message}</Error>
{:else}
	<div className="text-base-content bg-base-200 card-body">
		<div className="card-title">Review flash cards</div>
		{countReviews > 5 && `You've been studying ${countReviews > 40 ? 'a lot!' : ' – '}`}
		I see {countReviews} cards reviewed in the last week
		{countPositive > 0 && ` and you remembered ${countPositive} of them`}. Keep at it!
	</div>
{/if}
