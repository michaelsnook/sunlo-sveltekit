<script>
	import image from 'images/logo-pair.png'
	const { size = 240, classes = '' } = $props()
</script>

<img
	src={image}
	alt="a smiling garlic"
	width={size}
	height={size / 1.5}
	class="place-self-center {classes}"
/>
