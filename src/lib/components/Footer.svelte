<script lang="ts">
	import { InstagramIcon, FacebookIcon } from "lucide-svelte";

	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-container">
		<div class="footer-content">
			<h3 class="footer-title"><span>Infinite Stitchings</span></h3>
			<p class="footer-description">Handcrafted crochet creations</p>

			<!-- Social Links -->
			<div class="social-links">
				<a href="www.instagram.com" target="_blank" class="social-link" aria-label="Instagram">
					<span class="icon"><InstagramIcon size={24} /></span>
				</a>
				<a href="www.facebook.com" target="_blank" class="social-link" aria-label="Facebook">
					<span class="icon"><FacebookIcon size={24} /></span>
				</a>
			</div>

			<div class="footer-text">
				© {currentYear} Infinite Stitchings. All rights reserved.
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: linear-gradient(to bottom right, color-mix(in srgb, var(--primary) 25%, transparent), color-mix(in srgb, var(--accent) 10%, transparent));
		padding: 3rem 0;
		margin-top: 5rem;
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.footer-content {
		text-align: center;
	}

	.footer-title {
		font-size: 1.75rem;
		font-weight: bold;
		margin-bottom: 1rem;
	}

	.footer-title span {
		background: linear-gradient(to right, var(--primary), var(--accent));
		-webkit-background-clip: text;
    background-clip: text;
		color: transparent;
	}

	.footer-description {
		color: #666;
		margin-bottom: 1.5rem;
	}

	.social-links {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.social-link {
		color: var(--primary);
		transition: color 0.3s;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.social-link:hover {
		color: var(--accent);
	}

	.footer-text {
		font-size: 0.875rem;
		color: #666;
	}
</style>
