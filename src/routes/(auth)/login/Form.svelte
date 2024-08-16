<script lang="ts">
	import { supabase, useAuth } from '$lib'
	import Error from 'components/Error.svelte'
	import { useSession } from '$lib/client/auth-hook.svelte'
	import type { AuthSession } from '@supabase/supabase-js'
	import { goto } from '$app/navigation'

	let formData = $state({ email: '', password: '' })

	// mocking the mutation for this step
	let login = { isPending: false, error: null }

	async function handleSubmit(event: {
		preventDefault: Function
		currentTarget: EventTarget & HTMLFormElement
	}) {
		event.preventDefault()
		supabase.auth.signInWithPassword(formData).then((res) => goto('/deck'))
		// login.mutate()
	}
	let auth = useAuth()
</script>

{#if auth.isAuth}
	<p>It looks like you're already logged in; are you trying to log in as someone else?</p>
{/if}
<form onsubmit={handleSubmit} class="form">
	<fieldset class="flex flex-col gap-y-4" disabled={login.isPending}>
		<div>
			<label for="email">Email</label>
			<input
				id="email"
				name="email"
				required={true}
				bind:value={formData.email}
				pattern="[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+"
				aria-invalid={!!login.error}
				class="{login.error ? 'outline-error/60' : ''} s-input"
				tabindex={1}
				type="email"
				placeholder="email@domain"
			/>
		</div>
		<div>
			<p>
				<label for="password">Password</label>
			</p>
			<input
				id="password"
				name="password"
				required={true}
				bind:value={formData.password}
				aria-invalid={!!login.error}
				class="{login.error ? 'outline-error/70' : ''} s-input"
				tabindex={2}
				type="password"
				placeholder="* * * * * * * *"
			/>
		</div>
		<div class="flex flex-row justify-between">
			<button
				tabindex={3}
				class="btn btn-primary"
				type="submit"
				disabled={login.isSubmitting}
				aria-disabled={login.isSubmitting}
			>
				Log in
			</button>
			<a tabindex={4} href="/signup" class="btn btn-ghost"> Create account </a>
		</div>
		{#if login.error}
			<Error>
				Problem logging in:
				{#if login.error.name === 'AuthApiError'}
					Check your username and password?
				{:else}
					{JSON.stringify(login.error)}
				{/if}
			</Error>
		{/if}
		<p>
			<a href="/forgot-password" class="s-link text-sm"> Forgot password? </a>
		</p>
	</fieldset>
</form>
