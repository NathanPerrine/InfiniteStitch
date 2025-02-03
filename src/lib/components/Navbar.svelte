<script lang="ts">
	import { MenuIcon, XIcon } from 'lucide-svelte';

	let { isMenuOpen = $bindable() }: { isMenuOpen: boolean } = $props();

	const navLinks = [
		{ href: '#home', label: 'Home' },
		{ href: '#gallery', label: 'Gallery' },
		{ href: '#commission', label: 'Commission' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<nav class="main-nav">
	<div class="nav-container">
		<div class="nav-content">
			<!-- Logo -->
			<a href="#home" class="logo">Infinite Stitchings</a>

			<!-- Desktop Navigation -->
			<div class="desktop-nav">
				{#each navLinks as link}
					<a href={link.href} class="nav-link">
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="mobile-menu-btn"
				onclick={() => (isMenuOpen = !isMenuOpen)}
				aria-label="Toggle menu"
			>
				{#if isMenuOpen}
					<span class="menu-icon"><XIcon /></span>
				{:else}
					<span class="menu-icon"><MenuIcon /></span>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Navigation -->
	{#if isMenuOpen}
		<div class="mobile-nav">
			<div class="mobile-nav-content">
				{#each navLinks as link}
					<a href={link.href} class="mobile-nav-link" onclick={() => (isMenuOpen = false)}>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>

<style lang="scss">
	.main-nav {
		position: fixed;
		top: 0;
		width: 100%;
		background-color: rgba(250, 247, 242, 0.8);
		backdrop-filter: blur(4px);
		z-index: 50;
		border-bottom: 1px solid rgba(45, 212, 236, 0.2);
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.nav-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 4rem;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: bold;
		background: linear-gradient(to right, #2dd4ec, #9747ff);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.desktop-nav {
		display: none;
		gap: 2rem;
		align-items: center;

		@media (min-width: 768px) {
			display: flex;
		}
	}

	.nav-link {
		color: #1a1a1a;
		transition: color 0.2s ease;
    text-decoration: none;

		&:hover {
			color: #2dd4ec;
		}
	}

	.mobile-menu-btn {
		padding: 0.5rem;
		display: block;

    border: none;
    background: transparent;

		@media (min-width: 768px) {
			display: none;
		}
	}

	.menu-icon {
		width: 1.5rem;
		height: 1.5rem;
		color: var(--primary);
	}

	.mobile-nav {
		position: absolute;
		top: 4rem;
		left: 0;
		width: 100%;
		background-color: #faf7f2;
		border-bottom: 1px solid rgba(45, 212, 236, 0.2);
		display: none;

		@media (max-width: 767px) {
			display: block;
		}
	}

	.mobile-nav-content {
		display: flex;
		flex-direction: column;
		padding: 0.5rem 1rem;
	}

	.mobile-nav-link {
		padding: 0.75rem 0;
		color: #1a1a1a;
		transition: color 0.2s ease;
    text-decoration: none;

		&:hover {
			color: #2dd4ec;
		}
	}
</style>
