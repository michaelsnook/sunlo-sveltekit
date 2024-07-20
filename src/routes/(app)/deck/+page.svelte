<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query'
	import { supabase } from '$lib'
	import type { CreateQueryResult } from '@tanstack/svelte-query'

	const query: CreateQueryResult = createQuery({
		queryKey: ['decks'],
		queryFn: () => supabase.from('user_deck_plus').select('*'),
	})
	console.log(`logging the query`, query)
</script>

<div>
	{#if query.isLoading}
		<p>Loading...</p>
	{:else if query.isError}
		<p>Error: {query.error.message}</p>
	{:else if query.isSuccess}
		{#each query.data as deck}
			<p>{deck.title}</p>
		{/each}
	{/if}
</div>
