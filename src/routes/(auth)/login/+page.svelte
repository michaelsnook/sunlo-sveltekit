<script>
	import { useSession } from '$lib/client/auth-hook.svelte'

	let _session = useSession()
	let session = $derived(_session.value)
	import Form from './Form.svelte'
</script>

<main class="card-white space-y-4">
	<h1 class="h3 opactiy-90">Please log in</h1>
	<Form />
</main>
