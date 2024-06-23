<script>
	import { fade } from 'svelte/transition';
	import CastCard from '../../../component/CastCard.svelte';
	export let data;
	let tvData = data.tvData;
	let cast = data.castData.cast;
	console.log(cast);
</script>

<svelte:head>
	<title>{tvData.name}</title>
</svelte:head>
<section transition:fade>
	<div>
		<div
			class="show-info_container"
			style={`background-image: url('http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${tvData.backdrop_path}')`}
		>
			<div class="tv-info">
				<div class="container">
					<div class="poster-container">
						<figure>
							<img
								src={`http://image.tmdb.org/t/p/w500/${tvData.poster_path}`}
								alt={tvData.title}
							/>
						</figure>
					</div>
					<div class="tv-guide">
						<div class="tv-guide_info">
							<p class="show-name">{tvData.name}</p>
							<p class="air-date">First Aired Date : {tvData.first_air_date}</p>
							<p class="show-overview">{tvData.overview}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="cast">
				{#each cast as cast}
					<CastCard {cast} />
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	section {
		padding-top: 4rem;
	}
	.cast {
		display: grid;
		gap: 0.75rem;
		grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
	}
	.tv-info {
		background-color: rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(3px) brightness(0.5);
		padding-block: 3rem;
	}
	.tv-info > * {
		display: flex;
		flex-direction: column;
	}
	.tv-info .poster-container {
		flex-basis: 350px;
	}
	.tv-info .tv-guide {
		flex: 1;
	}
	.show-info_container {
		background-repeat: no-repeat;
		background-position-x: 100%;
		background-size: cover;
		background-color: rgba(255, 255, 255, 0.3);
	}
	.tv-info .tv-guide div {
		max-width: 650px;
		margin-left: auto;
	}
	.poster-container figure {
		display: grid;
		width: -moz-fit-content;
		width: fit-content;
		margin-inline: auto;
		padding: 0.75rem;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.6);
	}
	.poster-container figure img {
		border-radius: 10px;
	}
	.show-name {
		font-size: 20px;
	}
	@media (min-width: 800px) {
		section {
			padding-top: 2rem;
		}
		.tv-info > * {
			flex-direction: row;
		}
		.tv-info .tv-guide div {
			max-width: 650px;
			margin-left: auto;
		}
	}
</style>
