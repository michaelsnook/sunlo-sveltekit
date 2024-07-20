<script>
	const { deck } = $props()
	const { cards_active, cards_learned } = deck
	const cardsInDeck = cards_active + cards_learned
	const beHappy = cards_learned > 5
</script>

<div class="text-base-content bg-base-200 card-body">
	<div class="card-title">Manage your deck</div>
	You have:
	<ul class="ml-2 block">
		<li>🎴 {cardsInDeck} cards in your deck</li>
		<li>🤓 studying {cards_active} currently</li>
		<li>
			🎊 and you&apos;ve learned {cards_learned + ' '}
			of them{beHappy ? '!' : '.'}
		</li>
	</ul>
</div>
