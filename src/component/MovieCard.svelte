<script>
	export let movieData;
	import Dummy from './Dummy.svelte';
</script>

<div class="show-box">
	<a href={movieData.media_type == 'tv' ? `/tv/${movieData.id}` : `/movie/${movieData.id}`}>
		<figure>
			{#if !movieData.poster_path}
				<Dummy dummyName={movieData?.title ? movieData?.title : movieData?.name} />
			{:else}
				<img
					src={`http://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
					alt={movieData?.title ? movieData?.title : movieData?.name}
				/>
			{/if}
		</figure>
	</a>
	<div class="show-info">
		<a href={movieData.media_type == 'tv' ? `/tv/${movieData.id}` : `/movie/${movieData.id}`}
			>{movieData?.title ? movieData?.title : movieData?.name}</a
		>
		<h3>
			{new Date(
				movieData.release_date ? movieData.release_date : movieData.first_air_date
			).getFullYear()}
		</h3>
	</div>
</div>
