<template>
	<div class="about__img-overlay">
		<img :src="img" alt="About" :class="`about__img--${size}`" />
	</div>
</template>

<script>
export default {
	props: ['img', 'size']
}
</script>

<style scoped>
.about__img-overlay {
	overflow: var(--img-hidden);
}

.about__img--small {
	width: 130px;
	height: 200px;
}

.about__img--large {
	width: 180px;
	height: 250px;
}

.about__img--small,
.about__img--large {
	object-fit: cover;
	object-position: center;
	transition: var(--img-transition);
}

.about__img--small:hover,
.about__img--large:hover {
	transform: var(--img-scale);
}

/* Large Screens */
@media screen and (min-width: 1024px) {
	.about__img--small {
		width: 240px;
		height: 350px;
	}

	.about__img--large {
		width: 290px;
		height: 420px;
	}
}
</style>
