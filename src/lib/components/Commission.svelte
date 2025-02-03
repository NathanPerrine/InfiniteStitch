<script lang="ts">
	const commissionSteps = [
		{
			title: "Initial Consultation",
			description: "Discuss your project ideas, requirements, and preferences",
		},
		{
			title: "Design & Quote",
			description: "Receive a detailed design proposal and price quote",
		},
		{
			title: "Creation Process",
			description: "Regular updates as your project comes to life",
		},
		{
			title: "Final Delivery",
			description: "Your handmade creation carefully packaged and delivered",
		},
	];
</script>

<div class="commission-container">
	<h2 class="commission-title"><span>Commission Process</span></h2>

	<div class="commission-grid">
		{#each commissionSteps as step, index}
			<div class="commission-step">
				<div class="step-header">
					<div class="step-number">{index + 1}</div>
					<h3 class="step-title">{step.title}</h3>
				</div>
				<p class="step-description">{step.description}</p>
			</div>
		{/each}
	</div>

	<div class="commission-button-container">
		<a href="#contact" class="commission-button">Start Your Commission</a>
	</div>
</div>

<style>
	.commission-container {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}

	.commission-title {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 2rem;
		position: relative;
		display: inline-block;
	}

	.commission-title span {
		background: linear-gradient(to right, var(--primary), var(--accent));
		-webkit-background-clip: text;
    background-clip: text;
		color: transparent;
		padding: 0 8px;
	}

	.commission-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
	}

	.commission-step {
		padding: 1.5rem;
		background: white;
		border-radius: 8px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		border: 1px solid color-mix(in srgb, var(--primary) 20%, transparent);
		text-align: left;
	}

	.step-header {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.step-number {
		width: 48px;
		height: 48px;
		background: linear-gradient(to bottom right, color-mix(in srgb, var(--primary) 10%, transparent), color-mix(in srgb, var(--accent) 10%, transparent));
		color: var(--primary);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
		font-weight: bold;
	}

	.step-title {
		font-size: 1.25rem;
		font-weight: bold;
		color: #1a1a1a;
		margin: 0;
	}

	.step-description {
		color: #666;
		margin-top: 0.5rem;
	}

	.commission-button-container {
		margin-top: 2rem;
	}

	.commission-button {
		display: inline-block;
		padding: 0.75rem 2rem;
		background: linear-gradient(to right, var(--primary), var(--accent));
		color: white;
		border-radius: 8px;
		text-decoration: none;
		transition: opacity 0.3s ease-in-out;
	}

	.commission-button:hover {
		opacity: 0.9;
	}
</style>
