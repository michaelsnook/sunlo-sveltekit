<script lang="ts">
	import RecentReviewsSummary from './RecentReviewsSummary.svelte'
	const { data } = $props()
</script>

<RecentReviewsSummary data={data?.data} error={data?.error} />
