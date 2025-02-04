<script lang="ts">
	import { HeartIcon } from 'lucide-svelte';
</script>

<div class="hero">
	<div class="hero-content">
		<img src="/assets/IS-Logo.webp" alt="Infinite Stitchings Logo" class="hero-logo" />
		<h1 class="hero-title">
			Handcrafted with Love <span class="hero-icon"><HeartIcon size={36} /></span>
		</h1>
		<p class="hero-description">Custom crochet creations that bring warmth and joy to your life</p>
		<div class="hero-buttons">
			<a href="#gallery" class="btn btn-primary">View Gallery</a>
			<a href="#commission" class="btn btn-accent">Commission Work</a>
		</div>
	</div>
</div>

<style lang="scss">
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-size: cover;
		background-position: center;
		width: 100%;
		background: linear-gradient(
			to bottom right,
			color-mix(in srgb, var(--primary) 50%, transparent),
			rgba(255, 255, 255, 0.9),
			color-mix(in srgb, var(--accent) 50%, transparent)
		);
	}

	.hero-content {
		position: relative;
		z-index: 10;
		text-align: center;
		padding: 0 1rem;
		max-width: 56rem;
		margin: 0 auto;
		color: black;
		display: flex;
		flex-direction: column;
		align-items: center;

		@media (min-width: 768px) {
			padding: 0 2rem;
		}
	}

	.hero-logo {
		width: 100%;
		max-width: 300px;
		height: auto;
		margin-bottom: 2rem;
		object-fit: contain;

		@media (min-width: 768px) {
			max-width: 400px;
		}

		@media (min-width: 1024px) {
			max-width: 500px;
		}
	}

	.hero-title {
		font-size: 2.25rem;
		font-weight: bold;
		margin-bottom: 1.5rem;
		filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.3));

		@media (min-width: 768px) {
			font-size: 3.75rem;
		}
	}

	.hero-icon {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.3));

		@media (min-width: 768px) {
			width: 3rem;
			height: 3rem;
		}
	}

	.hero-description {
		font-size: 1.125rem;
		margin-bottom: 2rem;
		filter: drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.3));

		@media (min-width: 768px) {
			font-size: 1.25rem;
		}
	}

	.hero-buttons {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: center;

		@media (min-width: 640px) {
			flex-direction: row;
		}
	}

	.btn {
		padding: 0.75rem 2rem;
		border-radius: 0.5rem;
		transition: background-color 0.2s ease;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
	}

	.btn-primary {
		background-color: var(--primary);
		color: white;

		&:hover {
			background-color: var(--primary-hover);
		}
	}

	.btn-accent {
		background-color: var(--accent);
		color: white;

		&:hover {
			background-color: var(--accent-hover);
		}
	}
</style>