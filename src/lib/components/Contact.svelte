<script lang="ts">
	import { AtSignIcon } from "lucide-svelte";

	let name: string = $state("");
	let email: string = $state("");
	let message: string = $state("");

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		console.log({ name, email, message });
	};
</script>

<div class="contact-container">
	<div class="contact-header">
		<div class="icon-wrapper">
			<span class="icon"><AtSignIcon size={64} /></span>
		</div>
		<h2 class="contact-title"><span>Get in Touch</span></h2>
		<p class="contact-description">Have a project in mind? Send us a message and let's create something beautiful together!</p>
	</div>

	<form onsubmit={handleSubmit} class="contact-form">
		<div class="form-group">
			<label for="name">Name</label>
			<input type="text" id="name" bind:value={name} required />
		</div>

		<div class="form-group">
			<label for="email">Email</label>
			<input type="email" id="email" bind:value={email} required />
		</div>

		<div class="form-group">
			<label for="message">Message</label>
			<textarea id="message" bind:value={message} rows="5" required></textarea>
		</div>

		<button type="submit" class="submit-button">Send Message</button>
	</form>
</div>

<style>
	.contact-container {
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
    margin-top: 2rem;
	}

	.contact-header {
		margin-bottom: 2rem;
	}

	.icon-wrapper {
		background: linear-gradient(to bottom right, var(--primary), var(--accent));
		padding: 1rem;
		border-radius: 50%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		color: white;
		font-size: 24px;
	}

	.contact-title {
		font-size: 2rem;
		font-weight: bold;
	}

	.contact-title span {
		background: linear-gradient(to right, var(--primary), var(--accent));
		-webkit-background-clip: text;
    background-clip: text;
		color: transparent;
	}

	.contact-description {
		color: #666;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		text-align: left;
	}

	label {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid var(--primary);
		border-radius: 8px;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border: 2px solid var(--accent);
      box-shadow: 0 0 5px color-mix(in srgb, var(--primary) 50%, transparent);
    }
	}

	.submit-button {
		background: linear-gradient(to right, var(--primary), var(--accent));
		color: white;
		padding: 0.75rem;
		border-radius: 8px;
		border: none;
		cursor: pointer;
		transition: opacity 0.3s;
	}

	.submit-button:hover {
		opacity: 0.9;
	}
</style>
