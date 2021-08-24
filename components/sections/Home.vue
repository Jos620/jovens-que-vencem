<template>
	<section id="home" class="home">
		<!--==================================================================|
		| Home Background Image                                               |
		|===================================================================-->
		<DatocmsImage
			v-if="home.image"
			class="home__img"
			style="position: absolute"
			:data="home.image.responsiveImage"
			:pictureStyle="{ objectFit: 'cover' }"
		/>

		<!--==================================================================|
		| No Image                                                            |
		|===================================================================-->
		<div v-else class="no-image"></div>

		<div class="home__container container grid">
			<!--==============================================================|
			| Home Data                                                       |
			|===============================================================-->
			<div class="home__data">
				<span v-if="home.preTitle" class="home__data-pretitle">
					{{ home.preTitle }}
				</span>
				<h1
					class="home__data-title"
					:class="{ 'has-subtitle': home.subTitle }"
				>
					<DatocmsStructuredText :data="home.title" />
				</h1>
				<span v-if="home.subTitle" class="home__data-subtitle">
					{{ home.subTitle }}
				</span>
			</div>

			<!--==============================================================|
			| Home Social                                                     |
			|===============================================================-->
			<div class="home__social">
				<SocialLink
					v-for="social in home.social"
					:key="social.id"
					:icon="social.icon"
					:href="social.link"
				/>
			</div>

			<!--==============================================================|
			| Home Card                                                       |
			|===============================================================-->
			<HomeCard />
		</div>
	</section>
</template>

<script>
import gql from 'graphql-tag'
import imageFields from '~/queries/getImageFields'

export default {
	apollo: {
		home: gql`
			{
				home {
					image {
						responsiveImage {
							...imageFields
						}
					}
					title {
						value
					}
					preTitle
					subTitle
					social {
						id
						icon
						link
					}
				}
			}

			${imageFields}
		`
	}
}
</script>

<style scoped>
/* 
|-----------------------------------------------------------------------------|
| Background Image                                                            | 
|-----------------------------------------------------------------------------|
*/

.home__img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	filter: brightness(65%);
}

/* 
|-----------------------------------------------------------------------------|
| No Image                                                                    | 
|-----------------------------------------------------------------------------|
*/

.no-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: var(--first-color);
}

/* 
|-----------------------------------------------------------------------------|
| Content                                                                     | 
|-----------------------------------------------------------------------------|
*/

.home__container {
	position: relative;
	height: calc(100vh - var(--header-height));
	align-content: center;
	row-gap: 3rem;
}

.home__data-pretitle,
.home__data-subtitle,
.home__data-title {
	color: var(--white-color);
}

.home__data-pretitle {
	display: block;
	font-weight: var(--font-semi-bold);
	margin-bottom: var(--space-0-75);
}

.home__data-title {
	font-size: var(--biggest-font-size);
	font-weight: var(--font-medium);
	margin-bottom: var(--space-2-5);
}

.home__data-title.has-subtitle {
	margin-bottom: var(--space-1);
}

/* 
|-----------------------------------------------------------------------------|
| Social Media                                                                | 
|-----------------------------------------------------------------------------|
*/

.home__social {
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
}

/* 
|-----------------------------------------------------------------------------|
| Medium Screens                                                              | 
|-----------------------------------------------------------------------------|
*/

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

/* 
|-----------------------------------------------------------------------------|
| Large Screens                                                               | 
|-----------------------------------------------------------------------------|
*/

@media screen and (min-width: 1024px) {
	.home__img {
		object-position: 83%;
	}

	.home__container {
		grid-template-rows: 2fr 0.5fr;
	}
}

/* 
|-----------------------------------------------------------------------------|
| Tall Screens                                                                | 
|-----------------------------------------------------------------------------|
*/

@media screen and (min-height: 721px) {
	.home__container,
	.home__img,
	.no-image {
		height: 720px;
	}
}
</style>
