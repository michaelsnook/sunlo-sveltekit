<script>
	import Form from './Form.svelte'
	import { useAuth } from '$lib'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'

	let auth = useAuth()
	$effect(() => {
		if (auth.isAuth) {
			// @TODO send some toast
			console.log(`Already logged in. Redirecting to deck home...`)
			goto($page.url.searchParams.get('redirect') || '/deck')
		}
	})
</script>

<main class="card-white space-y-4">
	<h1 class="h3 opactiy-90">Please log in</h1>
	<Form />
</main>
