<script lang="ts">
	import supabase from '$lib/supabase-client'
	//import ErrorList from 'components/ErrorList'
	//import Loading from 'components/Loading.svelte'

	const { card, nextCard, addReview, hidden } = $props()

	const postReview = async ({ card_id, score, prevId }) => {
		if (!card_id || !score) throw Error('Invalid review; cannot log')
		const id = prevId ? { id: prevId } : {}
		const submitData = {
			score,
			card_id,
			...id,
		}
		// console.log(`About to post the review,`, submitData, prevId)
		const { data, error } = await supabase.from('user_card_review').upsert(submitData).select()

		if (error) throw Error(error)
		// console.log(`We posted the review,`, data, error)
		return data[0]
	}

	let isRevealed = $state(false)
	const reveal = () => {
		isRevealed = true
	}

	const { data, error, mutate, status } = {
		data: {},
		error: null,
		mutate: () => {},
		status: 'success',
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
			{#if status === 'loading'}
				<div class="absolute bg-base-100/70 top-0 left-0 right-0 bottom-0 content-center">
					<Loading />
				</div>
			{/if}
			{#if status === 'error'}
				<div class="absolute bg-base-100/50 top-0 left-0 right-0 bottom-0">
					<ErrorList {error} />
				</div>
			{/if}
			{#if !isRevealed}
				<div class="flex gap-4 justify-center">
					<button class="btn btn-success" onClick={reveal}> Yes I know it </button>
					<button class="btn btn-warning" onClick={reveal}> I don&apos;t know it </button>
				</div>
			{:else}
				<div>
					{#each card.phrase.translations as t}
						<p key={t.id}>&ldquo;{t.text}&rdquo;</p>
					{/each}
				</div>
				<div class="flex gap-2 flex-row flex-wrap justify-center">
					<button
						class="{btnClasses} btn btn-success {data ? 'btn-outline' : ''}"
						onclick={() => mutate({ score: 2 })}
						disabled={data?.score === 2}
					>
						Nailed it!
					</button>
					<button
						class={`${btnClasses} btn btn-info ${data ? 'btn-outline' : ''}`}
						onclick={() => mutate({ score: 1 })}
						disabled={data?.score === 1}
					>
						Got it
					</button>
					<button
						class="{btnClasses} btn btn-warning {data ? 'btn-outline' : ''}"
						onclick={() => mutate({ score: -1 })}
						disabled={data?.score === -1}
					>
						It was hard
					</button>
					<button
						class="{btnClasses} btn btn-error {data ? 'btn-outline' : ''}"
						onclick={() => mutate({ score: -2 })}
						disabled={data?.score === -2}
					>
						Didn&apos;t get it
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}
