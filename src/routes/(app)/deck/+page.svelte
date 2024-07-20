<script lang="ts">
	import { supabase } from '$lib'

	const promise = supabase.from('user_deck_plus').select('*')
</script>

<main class="flex flex-col gap-4 p-2">
	{#await promise}
		<p>Loading...</p>
	{:then response}
		{#if response.error}
			<p>Error: {response.error.message}</p>
		{:else if response.data}
			<ol>
				{#each response.data as deck}
					<li class="glass p-2 rounded text-center my-2">
						<a href="deck/{deck.lang}">
							<p class="text-xl py-2">{deck.lang}</p>
						</a>
					</li>
				{/each}
			</ol>
		{/if}
	{/await}
</main>
