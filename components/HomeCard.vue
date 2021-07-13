<template>
	<div class="home__card">
		<div>
			<span class="home__card-title">{{ blok.title }}</span>
			<a
				:href="blok.link"
				target="_blank"
				class="button button--flex button--link home__card-button"
			>
				Assita
				<i class="ri-arrow-right-line"></i>
			</a>
		</div>

		<div class="home__card-overlay">
			<img
				:src="blok.image.filename"
				:alt="blok.image.alt"
				class="home__card-img"
			/>
		</div>
	</div>
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
.home__card {
	color: var(--white-color);
}

.home__card {
	background-color: var(--first-color);
	display: flex;
	align-items: center;
	padding: 1.5rem 1rem;
	column-gap: 0.5rem;
	position: absolute;
	right: 0;
	bottom: 1rem;
	width: 228px;
}

.home__card-title {
	display: block;
	font-size: var(--small-font-size);
	font-weight: var(--font-semi-bold);
	margin-bottom: var(--space-0-75);
}

.home__card-button {
	color: var(--white-color);
	font-size: var(--smaller-font-size);
}

.home__card-overlay {
	overflow: var(--img-hidden);
}

.home__card-img {
	width: 145px;
	max-height: 65px;
	object-fit: cover;
	object-position: center;
	transition: var(--img-transition);
}

.home__card-img:hover {
	transform: var(--img-scale);
}

/* Small Screens */
@media screen and (max-width: 340px) {
	.home__card {
		width: 190px;
		padding: 1rem;
	}
}

/* Medium Screens */
@media screen and (min-width: 768px) {
	.home__card {
		bottom: 3rem;
	}
}

/* Large Screens */
@media screen and (min-width: 1024px) {
	.home__card {
		width: 328px;
		grid-template-columns: 1fr 2fr;
		column-gap: 2rem;
	}

	.home__card-title {
		font-size: var(--normal-font-size);
	}

	.home__card-img {
		width: 240px;
		max-height: 110px;
	}
}
</style>
