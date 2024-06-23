<script>
	import Dummy from './Dummy.svelte';
	export let cast;
</script>

<div>
	<a href="/cast/{cast.id}">
		<figure class="cast-image_block">
			{#if !cast.profile_path}
				<Dummy dummyName={cast.name} />
			{:else}
				<img src={`http://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.name} />
			{/if}
		</figure>
		<p class="cast-name">{cast.name}</p>
		<p class="char-name">{cast.character}</p>
	</a>
</div>

<style>
    .cast-image_block {
        overflow: hidden;
        aspect-ratio: 2/3;
        outline: 2px solid #fff;
        margin-top: 1rem;
        &:hover img{
            scale: 1.1;
        }
    }
	.cast-image_block img {
        width: 100%;
		height: 100%;
		object-fit: cover;
        transition: 200ms ease;
	}
    .cast-name,
    .char-name {
        margin-top: 0.5rem;
    }
</style>
