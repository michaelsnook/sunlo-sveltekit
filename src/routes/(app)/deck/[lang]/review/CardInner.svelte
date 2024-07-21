<script lang="ts">
	import Error from 'components/Error.svelte'
	import Loading from 'components/Loading.svelte'
	import { postReview } from './post-review'
	import type { MutationState, Review } from '$lib/types/client-types'
	import type { CardStub } from '$lib/types/client-types'

	const {
		card,
		nextCard,
		addReview,
		hidden,
	}: {
		card: CardStub
		nextCard: Function
		addReview: Function
		hidden: boolean
	} = $props()

	let postMutation: MutationState<Review> = $state({ isSubmitting: false })

	let isRevealed = $state(false)

	function reveal() {
		isRevealed = true
		console.log(`I reveal props are like:`, card, hidden)
	}

	function mutate(score: number) {
		const id = postMutation.data?.id
		postMutation = { isSubmitting: true }

		postReview(card.id, score, id).then(({ data, error }) => {
			if (data) {
				addReview(data)
				nextCard()
			}
			postMutation = error
				? { isSubmitting: false, error }
				: {
						isSubmitting: false,
						isSuccess: true,
						data,
					}
		})
	}

	/*useMutation({
    mutationFn: submission =>
      postReview({ ...submission, card_id: card.id, prevId: data?.id }),
    onSuccess: result => {
      // console.log(`onSuccess firing with`, result)
      addReview(result)
      if (result.score === -2)
        toast('got it', { icon: '👍️', position: 'bottom-center' })
      if (result.score === -1)
        toast('got it', { icon: '👍️', position: 'bottom-center' })
      if (result.score === 1)
        toast('got it', { icon: '👍️', position: 'bottom-center' })
      if (result.score === 2)
        toast.success('got it', { position: 'bottom-center' })
      setTimeout(nextCard, 1500)
    },
  })*/

	const btnClasses = `grow basis-44`
</script>

{#if hidden}{:else}
	<div class="card-white">
		<div class="flex flex-col justify-center text-center gap-8">
			<h2 class="h2 text-center">{card?.phrase?.text}</h2>
			{#if postMutation.isSubmitting}
				<div class="absolute bg-base-100/70 top-0 left-0 right-0 bottom-0 content-center">
					<Loading />
				</div>
			{/if}
			{#if postMutation.error}
				<div class="absolute bg-base-100/50 top-0 left-0 right-0 bottom-0">
					<Error>{postMutation.error.message}</Error>
				</div>
			{/if}
			{#if !isRevealed}
				<div class="flex gap-4 justify-center">
					<button class="btn btn-success" onclick={reveal}> Yes I know it </button>
					<button class="btn btn-warning" onclick={reveal}> I don&apos;t know it </button>
				</div>
			{:else}
				<div>
					{#each card.phrase.translations as t}
						<p key={t.id}>&ldquo;{t.text}&rdquo;</p>
					{/each}
				</div>
				<div class="flex gap-2 flex-row flex-wrap justify-center">
					<button
						class="{btnClasses} btn btn-success {postMutation.data ? 'btn-outline' : ''}"
						onclick={() => mutate(2)}
						disabled={postMutation.data?.score === 2}
					>
						Nailed it!
					</button>
					<button
						class="{btnClasses} btn btn-info {postMutation.data ? 'btn-outline' : ''}"
						onclick={() => mutate(1)}
						disabled={postMutation.data?.score === 1}
					>
						Got it
					</button>
					<button
						class="{btnClasses} btn btn-warning {postMutation.data ? 'btn-outline' : ''}"
						onclick={() => mutate(-1)}
						disabled={postMutation.data?.score === -1}
					>
						It was hard
					</button>
					<button
						class="{btnClasses} btn btn-error {postMutation.data ? 'btn-outline' : ''}"
						onclick={() => mutate(-2)}
						disabled={postMutation.data?.score === -2}
					>
						Didn&apos;t get it
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}
