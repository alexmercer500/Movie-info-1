<script>
	import { fade } from 'svelte/transition';
	import MovieCard from '../../../component/MovieCard.svelte';
	export let data;
	let trendingShow;
	let pageNumb;
	$: trendingShow = data.data.results;
	$: pageNumb = data.data.page;
</script>

<svelte:head>
	<title>Popular Movie || page no : {pageNumb}</title>
</svelte:head>
<section transition:fade>
	<div class="container">
		<div id="movie-def" class="movie-page">
			<div class="trending">
				<p>Trending</p>
			</div>
			<div class="page-numbers">
				<a href={`/home/${pageNumb === 1 ? pageNumb : pageNumb - 1}`}>Previous</a>
				<div class="pagination">
					<ul>
						<li><a href={`/home/${pageNumb}`}>{pageNumb}</a></li>
						<li class={pageNumb >= data.data.total_pages ? 'hidden' : null}>
							<a href={`/home/${pageNumb + 1}`}>{pageNumb + 1}</a>
						</li>
						<li class={pageNumb + 1 >= data.data.total_pages ? 'hidden' : null}>
							<a href={`/home/${pageNumb + 2}`}>{pageNumb + 2}</a>
						</li>
					</ul>
				</div>
				<a href={`/home/${pageNumb + 1}`}>Next</a>
			</div>
		</div>
		<div class="list-container">
			{#each trendingShow as shows}
				<MovieCard movieData={shows} />
			{/each}
		</div>
	</div>
</section>

<style>
	#movie-def {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		padding-block: 3.5rem 2rem;
	}
	#movie-def div:last-child {
		margin-inline: 0;
		padding-block: 0;
	}
	#movie-def div:first-child p {
		font-size: 20px;
	}
	@media (min-width: 800px) {
		#movie-def {
			padding-top: 0;
		}
	}
</style>
