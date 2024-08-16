<script lang="ts">
	import 'globals.css'
	import { supabase } from '$lib'
	import { useSession } from '$lib/client/auth-hook.svelte'
	import { useAuth } from '$lib/session-store.svelte'
	let session = $derived(_session.value)
	let { children } = $props()
	const auth = useAuth()
</script>

<div class="@container w-full max-w-[1100px] min-h-screen py-20 mx-auto px-[1%]">
	{@render children()}

	<footer class="py-10 mt-10 space-y-6 bg-base-100/10">
		<div class="w-app flex flex-row gap-8 justify-center place-items-center">
			<span>Utility belt:</span>
			<button
				type="button"
				class="btn btn-primary {auth.isAuth ? '' : 'btn-outline'}"
				onclick={() => supabase.auth.signOut()}>button to log out</button
			>
			<a class="btn btn-primary {auth.isAuth ? 'btn-outline' : ''}" href="/login">Log in</a>
			<a class="nav-link" href="/deck">Decks</a>
			<a class="nav-link" href="/deck">Home</a>
		</div>
		<p class="w-app text-center">
			{#if auth.isAuth}Logged in{:else}No login detected{/if}
		</p>
	</footer>
</div>
