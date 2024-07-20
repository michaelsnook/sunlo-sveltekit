<script lang="ts">
	import 'globals.css'
	import { supabase } from '$lib'
	import { useSession } from '$lib/client/auth-hook.svelte'
	let _session = useSession()
	let session = $derived(_session.value)
	let { children } = $props()
</script>

<div class="@container w-full max-w-[1100px] min-h-screen py-20 mx-auto px-[1%]">
	{@render children()}

	<footer class="py-10 mt-10 space-y-6 bg-base-100/10">
		<div class="w-app flex flex-row gap-8 justify-center place-items-center">
			<span>Utility belt:</span>
			<button
				type="button"
				class="btn btn-primary {!session.isAuth && 'opacity-50'}"
				onclick={() => supabase.auth.signOut()}>button to log out</button
			>
			<a
				class="s-link link decoration-base-content/50 hover:decoration-base-content cursor-pointer"
				href="/login">Link to log in</a
			>
		</div>
		<p class="w-app text-center">
			{#if session.isAuth}Logged in{:else}No login detected{/if}
		</p>
	</footer>
</div>
