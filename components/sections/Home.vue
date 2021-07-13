<template>
	<section id="home" class="home">
		<!-- Home Background Image -->
		<img
			:src="blok.image.filename"
			:alt="blok.image.alt"
			class="home__img"
		/>

		<div class="home__container container grid">
			<!-- Home Data -->
			<div class="home__data">
				<span v-if="blok.preTitle" class="home__data-subtitle">
					{{ blok.preTitle }}
				</span>
				<h1 class="home__data-title">
					<rich-text-renderer :document="blok.title" />
				</h1>
				<span v-if="blok.subTitle" class="home__data-subtitle">
					{{ blok.subTitle }}
				</span>
			</div>

			<!-- Home Social -->
			<div class="home__social">
				<SocialLink
					v-for="socialLink in blok.social"
					:key="socialLink._uid"
					:icon="socialLink.icon"
					:link="socialLink.link.url"
				/>
			</div>

			<!-- Home Card -->
			<HomeCard :blok="blok.card[0]" />
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
/*
---------------------------
---- Background Image ---- |
---------------------------
*/

.home__img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	object-fit: cover;
	object-position: center;
	filter: brightness(65%);
}

/*
------------------
---- Content ---- |
------------------
*/

.home__container {
	position: relative;
	height: calc(100vh - var(--header-height));
	align-content: center;
	row-gap: 3rem;
}

.home__data-subtitle,
.home__data-title {
	color: var(--white-color);
}

.home__data-subtitle {
	display: block;
	font-weight: var(--font-semi-bold);
	margin-bottom: var(--space-0-75);
}

.home__data-title {
	font-size: var(--biggest-font-size);
	font-weight: var(--font-medium);
	margin-bottom: var(--space-2-5);
}

/*
------------------------
---- Social Medias ---- |
------------------------
*/

.home__social {
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
}

/* Medium Screens */
@media screen and (min-width: 768px) {
	.home__container {
		height: 100vh;
		grid-template-rows: 1.8fr 0.5fr;
	}

	.home__data {
		align-self: flex-end;
	}

	.home__social {
		flex-direction: row;
		align-self: flex-end;
		margin-bottom: 3rem;
		column-gap: 2.2rem;
	}
}

/* Large Screens */
@media screen and (min-width: 1024px) {
	.home__img {
		object-position: 83%;
	}

	.home__container {
		grid-template-rows: 2fr 0.5fr;
	}
}

/* Tall Screens */
@media screen and (min-height: 721px) {
	.home__container,
	.home__img {
		height: 720px;
	}
}
</style>
