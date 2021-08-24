<template>
	<div class="family__overlay">
		<DatocmsImage
			:data="src.responsiveImage"
			:class="`family__image-${name}`"
			:pictureStyle="{ objectFit: 'cover' }"
		/>
	</div>
</template>

<script>
export default {
	props: ['src', 'name']
}
</script>

<style scoped>
.family__overlay:nth-child(1) {
	width: 263px;
	height: 175px;
	margin-right: 2rem;
}

.family__overlay:nth-child(2) {
	width: 120px;
	height: 180px;
	position: absolute;
	top: 2rem;
	right: 0;
}

.family__overlay {
	height: auto;
	overflow: var(--img-hidden);
}

.family__image-one,
.family__image-two {
	object-fit: cover;
	object-position: center;
	height: 100%;
	transition: var(--img-transition);
}

.family__image-one:hover,
.family__image-two:hover {
	transform: var(--img-scale);
}

/* 
|-----------------------------------------------------------------------------|
| Small Screens                                                               | 
|-----------------------------------------------------------------------------|
*/

@media screen and (max-width: 340px) {
	.family__overlay:nth-child(1) {
		width: 190px;
		height: 126px;
	}

	.family__overlay:nth-child(2) {
		width: 80px;
		height: 120px;
	}
}

/* 
|-----------------------------------------------------------------------------|
| Medium Screens                                                              | 
|-----------------------------------------------------------------------------|
*/

@media screen and (min-width: 768px) {
	.family__overlay:nth-child(1) {
		width: 363px;
		height: 242px;
		margin-right: 4rem;
	}

	.family__overlay:nth-child(2) {
		width: 160px;
		height: 240px;
	}
}

/* 
|-----------------------------------------------------------------------------|
| Large Screens                                                               | 
|-----------------------------------------------------------------------------|
*/

@media screen and (min-width: 1024px) {
	.family__overlay:nth-child(1) {
		width: 463px;
		height: 315px;
		margin-right: 7rem;
	}

	.family__overlay:nth-child(2) {
		width: 220px;
		height: 330px;
		top: 3rem;
	}
}
</style>
