<template>
	<section id="verse" class="verse section">
		<!--==================================================================| 
        | Verse Image                                                         |
        |===================================================================-->
		<DatocmsImage
			:data="verse.image.responsiveImage"
			class="verse__img"
			style="height: 276px; position: absolute"
			:pictureStyle="{ objectFit: 'cover' }"
		/>
		<div class="verse__container container grid">
			<!--==============================================================| 
			| Verse Data                                                      |
			|===============================================================-->
			<div class="verse__data">
				<h2 class="section__title verse__title">
					<DatocmsStructuredText :data="verse.title" />
				</h2>
				<div class="verse__content">
					<!--======================================================| 
					| Verse                                                   |
					|=======================================================-->
					<span class="verse__description">
						<DatocmsStructuredText
							:data="verse.content"
							class="verse__description"
						/>
					</span>

					<!--======================================================| 
					| Verse Reference                                         |
					|=======================================================-->
					<a
						:href="verse.link"
						target="_blank"
						class="
							button button--flex button--link
							verse__reference
						"
					>
						{{ verse.reference }}
						<i class="ri-arrow-right-line"></i>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import gql from 'graphql-tag'
import imageFields from '~/queries/getImageFields'

export default {
	apollo: {
		verse: gql`
			{
				verse {
					image {
						responsiveImage {
							...imageFields
						}
					}
					title {
						value
					}
					content {
						value
					}
					reference
					link
				}
			}

			${imageFields}
		`
	}
}
</script>

<style scoped>
.verse {
	padding-top: 2rem;
	margin-top: 1.5rem;
	position: relative;
}

.verse__img {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	filter: brightness(65%);
	object-fit: cover;
	object-position: 0%;
}

.verse__container {
	position: relative;
}

.verse__title,
.verse__description,
.verse__reference {
	color: var(--white-color);
}

.verse__description {
	text-align: center;
	/* color: var(--title-color); */
	font-size: var(--normal-font-size);
	font-weight: var(--font-semi-bold);
	font-style: italic;
}

.verse__reference {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: var(--space-1-5);
}

.verse__reference::before {
	content: '';
	width: 12px;
	height: 2px;
	background-color: var(--white-color);
	margin-right: 8px;
}

/* 
|-----------------------------------------------------------------------------|
| Medium Screens                                                              | 
|-----------------------------------------------------------------------------|
*/

@media screen and (min-width: 768px) {
	.verse {
		margin-top: 4rem;
		padding-top: 3rem;
	}

	.verse__description {
		max-width: 640px;
		margin-right: auto;
		margin-left: auto;
		font-size: var(--h3-font-size);
	}
}
</style>
