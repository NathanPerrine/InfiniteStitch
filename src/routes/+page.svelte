<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from "$lib/components/Hero.svelte";
	import Gallery from "$lib/components/Gallery.svelte";
	import Commission from "$lib/components/Commission.svelte";
	import Contact from "$lib/components/Contact.svelte";
	import Footer from "$lib/components/Footer.svelte";

	// Track if mobile menu is open
	let isMenuOpen: boolean = $state(false);
</script>

<div class="page-container">
	<Navbar bind:isMenuOpen />

	<main class="main-content">
		<!-- Hero Section -->
		<section id="home">
			<Hero />
		</section>

		<!-- Gallery Section -->
		<section id="gallery" class="section gallery-section">
			<Gallery />
		</section>

		<!-- Commission Section -->
		<section id="commission" class="section commission-section">
			<Commission />
		</section>

		<!-- Contact Section -->
		<section id="contact" class="section contact-section">
			<Contact />
		</section>
	</main>

	<Footer />
</div>

<style lang="scss">
  :global(html) {
    scroll-behavior: smooth;
  }

	:global(body) {
		--primary: #2dd4ec;
		--primary-hover: #25b8cc;
		--accent: #9747ff;
		--accent-hover: #8035e0;

    margin: 0;
	}

	.page-container {
		min-height: 100vh;
		width: 100%;
		background-color: #faf7f2;
		color: #1a1a1a;
	}

	.main-content {
		position: relative;
	}

	.section {
		padding: 3rem 1rem;

		@media (min-width: 768px) {
			padding: 3rem 2rem;
		}
	}

	.commission-section {
		background: linear-gradient(to bottom right, #e6e1d7, #f5f2ed);
	}
</style>