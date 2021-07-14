<template>
	<section id="family" class="family section">
		<div class="family__container container grid">
			<!-- Family Data -->
			<div class="family__data">
				<h2 class="section__title family__title">
					<rich-text-renderer
						:document="blok.title"
					></rich-text-renderer>
				</h2>
				<p class="family__description">
					<rich-text-renderer
						:document="blok.description"
					></rich-text-renderer>
				</p>
			</div>

			<!-- Family Images -->
			<div class="family__image">
				<FamilyImage :img="blok.imageOne.filename" name="one" />
				<FamilyImage :img="blok.imageTwo.filename" name="two" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		blok: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>
.family__container {
	row-gap: 2.5rem;
	justify-content: center;
	justify-items: center;
}

.family__image {
	position: relative;
	padding-bottom: 2rem;
}

/* Small Screens */
@media screen and (max-width: 340px) {
	.family__container {
		padding: 0;
	}

	.family__img {
		padding: 0;
	}
}

/* Large Screens */
@media screen and (min-width: 1024px) {
	.family__container {
		margin: var(--space-1) auto var(--space-1);
	}

	.family__description {
		padding: 0 8rem;
	}
}
</style>
