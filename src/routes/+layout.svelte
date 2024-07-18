<script>
	import 'globals.css'
	let { children } = $props()
</script>

<div class="@container w-full max-w-[1100px] py-20 mx-auto px-[1%]">
	{@render children()}
</div>
