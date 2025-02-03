<script lang="ts">
	import { ImageIcon } from "lucide-svelte";

	// Gallery items with images from Lorem Picsum
	const galleryItems = [
		{
			image: "https://picsum.photos/400/400?random=1",
			title: "Cozy Blanket",
			description: "Hand-crocheted with premium yarn",
		},
		{
			image: "https://picsum.photos/400/400?random=2",
			title: "Adorable Amigurumi",
			description: "Cute animal designs",
		},
		{
			image: "https://picsum.photos/400/400?random=3",
			title: "Winter Scarves",
			description: "Warm and stylish accessories",
		},
		{
			image: "https://picsum.photos/400/400?random=4",
			title: "Baby Sets",
			description: "Perfect for newborn gifts",
		},
		{
			image: "https://picsum.photos/400/400?random=5",
			title: "Home Decor",
			description: "Beautiful crochet patterns",
		},
		{
			image: "https://picsum.photos/400/400?random=6",
			title: "Custom Projects",
			description: "Unique commissioned works",
		},
	];
</script>

<div class="gallery-container">
	<h2 class="gallery-title"><span>Our Creations</span></h2>

	<div class="gallery-grid">
		{#each galleryItems as item}
			<div class="gallery-item">
				<img src={item.image} alt={item.title} class="gallery-image" />
				<div class="gallery-overlay">
					<div class="gallery-text">
						<h3 class="gallery-item-title">{item.title}</h3>
						<p class="gallery-item-description">{item.description}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.gallery-container {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}

	.gallery-title {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 2rem;
		position: relative;
		display: inline-block;
	}

	.gallery-title span {
		background: linear-gradient(to right, var(--primary), var(--accent));
    background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		display: inline;
		padding: 0 8px;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.gallery-item {
		position: relative;
		overflow: hidden;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.gallery-image {
		width: 100%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		transition: transform 0.3s ease-in-out;
	}

	.gallery-item:hover .gallery-image {
		transform: scale(1.05);
	}

	.gallery-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			to bottom right,
			color-mix(in srgb, var(--primary) 60%, transparent),
			color-mix(in srgb, var(--accent) 60%, transparent)
		);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}

	.gallery-item:hover .gallery-overlay {
		opacity: 1;
	}

	.gallery-text {
		color: #fff;
		padding: 1rem;
		text-align: center;
	}

	.gallery-item-title {
		font-size: 1.25rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.gallery-item-description {
		color: rgba(255, 255, 255, 0.9);
	}
</style>
