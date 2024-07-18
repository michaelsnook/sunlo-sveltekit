<script>
	import {
		GarlicBroccoli,
		Phrase,
		Social,
		Curiosity,
		Plane,
		Heart,
		Friend,
		Code,
		Pencil,
		Login,
		Signup
	} from 'components/icons'
</script>

<main class="flex flex-row flex-wrap gap-4 mb-8 @xl:my-20">
	<div
		class="space-y-4 flex flex-col basis-11/12 @xl:basis-3/5 justify-center mx-auto max-w-[537px]"
	>
		<h1 class="d2 text-center @xl:text-start mt-12 md:mb-10 @xl:mt-8 @xl:mb-4">
			Sunlo: social language&nbsp;learning
		</h1>
		<p class="text-xl @xl:h-[120px] text-center @xl:text-start">
			Create your own flash cards, pick from a crowd-sourced pool, or send your friend some key
			phrases to help them learn.
		</p>
	</div>
	<div class="space-y-4 @xl:basis-1/3 flex-none text-center mx-auto">
		<GarlicBroccoli classes="mx-auto" />

		<a tabIndex={1} href="/login" class="btn btn-lg btn-primary focus:shadow focus:shadow-white">
			Log in or sign up &rarr;
		</a>
	</div>
</main>

<div class="w-app bg-black/30 border-0 text-warning alert text-center">
	⚠️ Sunlo is under development; it is incomplete but most of what&apos;s here should work, so if
	you do spot a problem, please let me know! ⚠️
</div>
<section
	class="card my-16 pt-4 @lg:pt-10 pb-8 @lg:pb-16 px-1 @lg:px-4 bg-base-100 text-base-content"
>
	<h2 class="h2 text-center px-4 @lg:pb-6">Our Approach to Language&nbsp;Learning</h2>
	<div class="flex flex-col @xl:flex-row justify-center gap-4">
		<div class="card bg-base-200 basis-80 shadow-xl">
			<div class="card-body">
				<h3 class="card-title">
					<Phrase /> Phrase Based
				</h3>
				<p>
					Sunlo&apos;s approach is phrases-first, useful for people who are immersed in a new
					language context and want to learn for immediate use – how to ask for directions or order
					tea or swear at your friends.
				</p>
				<p>
					We think this is effective, and motivating – and it means you can choose the areas you
					focus on to suit your goals.
				</p>
			</div>
		</div>
		<div class="card bg-base-200 basis-80 shadow-xl">
			<div class="card-body">
				<h3 class="card-title">
					<Social /> Social Learning
				</h3>
				<p>
					We don&apos;t learn languages to earn gems or score points – we learn to connect with
					people.
				</p>
				<p>
					When you move to a new city, take a new job, or want to learn the language of your
					extended family, you will always find people who want to help, which is why Sunlo has a
					special &ldquo;Friend Mode&rdquo; so your new friends can send you all their favourite
					phrases and help you along your journey.
				</p>
			</div>
		</div>
		<div class="card bg-base-200 basis-80 shadow-xl">
			<div class="card-body">
				<h3 class="card-title">
					<Curiosity /> Driven by Curiosity
				</h3>
				<p>
					Often times, trying to translate literally from one language to another doesn&apos;t
					really work, but if you spend enough time clicking around you will start to catch on to
					the patterns.
				</p>
				<p>
					Sunlo is meant to feed your curiosity and reward it, because that feeling of wonder and
					excitement keeps your brain in its best learning space.
				</p>
			</div>
		</div>
	</div>
</section>
<section class="my-16 pt-4 @lg:pt-10 pb-16">
	<h2 class="h2 text-center px-4 pb-6">Who is Sunlo for?</h2>
	<div class="flex flex-col @xl:flex-row justify-center gap-4">
		<div class="card bg-black/20 basis-80 shadow-xl">
			<div class="card-body">
				<h3 class="card-title">
					<Plane /> Moving To a New Place
				</h3>
				<p>
					If you just moved to a new place, and you&apos;re surrounded by people speaking another
					language, Sunlo is for you.
				</p>
				<p>
					Our approach works best when you have daily opportunities to deploy your new skills and
					build on them – and when you have friends, family or colleagues who are excited to help
					you learn.
				</p>
			</div>
		</div>
		<div class="card bg-black/20 basis-80 shadow-xl">
			<div class="card-body">
				<h3 class="card-title">
					<Friend /> The Friend / Guide
				</h3>
				<p>
					If you&apos;re the one helping a friend or colleague learn{' '}
					<em>your</em> language, Sunlo&apos;s &ldquo;Friend Mode&rdquo; is for you! Teach them the lyrics
					to a favourite song, or how to order at lunch for the table.
				</p>
				<p>
					You can pick from our public pool of flash cards, or create new ones that will help the
					whole community too.
				</p>
			</div>
		</div>
		<div class="card bg-black/20 basis-80 shadow-xl">
			<div class="card-body">
				<h3 class="card-title">
					<Heart /> Extended Family
				</h3>
				<p>
					If you haven&apos;t yet learned your family&apos;s ancestral language, and now you feel a
					barrier between yourself and your grandparents or your cousins, this is the
					&ldquo;linguistic generation gap.&rdquo;
				</p>
				<p>
					We are here to help – go ahead and dive into Sunlo, and ask your parents or your fun
					cousin to join as a friend and help you along the way.
				</p>
			</div>
		</div>
	</div>
</section>
<section class="text-center my-10 pb-16">
	<h2 class="h2">Ready to get started?</h2>
	<a tabIndex={1} href="/login" class="btn btn-lg w-80 btn-primary focus:shadow focus:shadow-white">
		Sign up and start learning &rarr;
	</a>
</section>

<section class="card my-16 pt-4 @lg:pt-10 pb-16 px-4 @lg:px-8 bg-base-100 text-base-content">
	<h2 class="h2 text-center px-4 pb-6">The Story Behind Sunlo</h2>
	<div class="columns-1 @lg:columns-2 space-y-4 text-xl/8">
		<p>
			Sunlo is a labour of love that started in 2015 when I came to India and found tools like the
			owl app lacking. (You know the one...)
		</p>
		<p>
			I found I didn&apos;t need to know the word for &ldquo;Tomato&rdquo; as much as I needed to be
			able to point at the tomato and say &ldquo;give me 6 of those (polite).&rdquo; When I learned
			to do this, the rest started to fall into place.
		</p>
		<p>
			As I tried other methods and researched the science of language-learning I started to feel a
			lack of good tools for helping people learn languages that are <em>different in structure</em>
			from the ones they&apos;re raised on. Learning
			<span class="underline decoration-accent dark:decoration-warning decoration-[3px]"
				>Spanish</span
			>
			from
			<span class="underline decoration-accent dark:decoration-warning decoration-[3px]"
				>English</span
			>
			may be straight-forward with lessons on vocabulary and grammar, but the same approach might not
			work to learn
			<span class="underline decoration-accent dark:decoration-warning decoration-[3px]"
				>Arabic</span
			>,
			<span class="underline decoration-accent dark:decoration-warning decoration-[3px]">Xhosa</span
			>
			or
			<span class="underline decoration-accent dark:decoration-warning decoration-[3px]">
				Mandarin
			</span>
			, whose grammars and patterns may be too unfamiliar for me to succeed with that formulaic approach.
		</p>
		<p>
			The answer to this problem seems to be a phrase-based approach, where you don&apos;t
			necessarily try to understand every meaning and tense, you learn <em>chunks of meaning</em> that
			you can use in real life. And when you do, it creates a reward in your brain and helps you connect
			with others in your world, both of which aid in the formation of lasting, usable memory.
		</p>
		<p>
			There&apos;s a fantastic (and free) app called Anki – which I also use and love! – which takes
			this phrase-based approach, and
			<a class="s-link" href="https://docs.ankiweb.net/background.html">their background doc</a>
			does a great job of explaining why it&apos;s so effective.{' '}
		</p>
		<p>
			But the most important part of my learning journey was the friends I made who were excited to
			help me. There are a couple of friends who have an intuitive sense of how much I know and
			don&apos;t know, and are able to speak to me in a way that they know I&apos;ll understand
			enough of what they&apos;re saying that I can learn and figure out the rest.
		</p>
		<p>
			So Sunlo is a bit of a love song to those friends – the very reason we learn in the first
			place – to make them main characters in the play as well. It invites them to help curate your
			deck of flash cards and find or create the ones they think you&apos;ll need and use and love.
			If you&apos;re a friend helping a newcomer learn your language – Sunlo is for you too. Thank
			you, and welcome! I hope you love it.
		</p>
		<p class="italic text-center">– M</p>
	</div>
</section>
<section class="my-16 pt-4 @lg:pt-10 pb-16">
	<h2 class="h2 text-center px-4 pb-6">Sunlo is Free and Open Source</h2>
	<div class="columns-1 @xl:columns-3 @lg:columns-2 space-y-4 text-xl/8">
		<p>
			For now Sunlo is just me, trying to learn languages to connect with the people I love. It is
			my humble wish that it may help others do the same 🙏
		</p>
		<p>
			If you have feedback or suggestions or requests, please do get in touch. Sunlo can&apos;t be
			everything to everyone, but it can always get better! ❤️
		</p>
		<p>
			If you&apos;re a developer or a language expert and would like to help,
			<a class="s-link" href="https://github.com/michaelsnook/sunlo-nextjs">
				check out the code on GitHub
			</a>
			or find me on socials (
			<a class="s-link" href="https://twitter.com/michaelsnook"> tw </a>
			&amp;
			<a class="s-link" href="https://bsky.app/profile/michaelsnook.com"> bsky </a>
			).
		</p>
	</div>
</section>
<footer class="my-16 pt-4 @lg:pt-10 pb-16 flex flex-row flex-wrap justify-center gap-8">
	<a class="btn btn-ghost" href="https://github.com/michaelsnook/sunlo-nextjs">
		<Code /> &nbsp;GitHub
	</a>
	<a class="btn btn-ghost" href="/privacy-policy">
		<Pencil /> &nbsp;Privacy Policy
	</a>
	<a class="btn btn-ghost" href="/login">
		<Login /> &nbsp;Login
	</a>
	<a class="btn btn-ghost" href="/signup">
		<Signup /> &nbsp;Signup
	</a>
</footer>
