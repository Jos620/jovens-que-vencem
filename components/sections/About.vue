<template>
	<section id="about" class="about section">
		<div class="about__container container grid">
			<!-- About Data -->
			<div class="about__data">
				<h2 class="section__title about__title">
					<rich-text-renderer
						:document="blok.title"
					></rich-text-renderer>
				</h2>
				<p class="about__description">
					<rich-text-renderer
						:document="blok.description"
					></rich-text-renderer>
				</p>
				<a :href="blok.link.url" target="_blank" class="button">
					Conheça Mais
				</a>
			</div>

			<!-- About Images -->
			<div v-if="haveImages" class="about__img">
				<AboutImage :img="blok.imageOne.filename" size="small" />
				<AboutImage :img="blok.imageTwo.filename" size="large" />
			</div>
		</div>
	</section>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'

export default {
	props: {
		blok: {
			type: Object,
			required: true
		}
	},

	setup(props) {
		const haveImages = computed(
			() => props.blok.imageOne.filename && props.blok.imageTwo.filename
		)

		return { haveImages }
	}
}
</script>

<style scoped>
.about__data {
	text-align: center;
}

.about__container {
	row-gap: 2.5rem;
}

.about__description {
	margin-bottom: var(--space-2);
}

/*
-----------------
---- Images ---- |
-----------------
*/

.about__img {
	display: flex;
	column-gap: 1rem;
	align-items: center;
	justify-content: center;
}

/* Medium Screens */
@media screen and (min-width: 768px) {
	.about__container {
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
	}

	.about__data,
	.about__title {
		text-align: initial;
	}

	.about__title {
		margin-bottom: var(--space-1-5);
	}

	.about__description {
		margin-bottom: var(--space-2);
	}
}
</style>
