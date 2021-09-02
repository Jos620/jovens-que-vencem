<template>
	<section id="family" class="family section">
		<div class="family__container container grid">
			<!--==============================================================| 
            | Family Data                                                     |
            |===============================================================-->
			<div class="family__data">
				<h2 class="section__title family__title">
					<DatocmsStructuredText :data="family.title" />
				</h2>
				<DatocmsStructuredText
					:data="family.description"
					class="family__description"
				/>
			</div>

			<!--==============================================================| 
            | Family Images                                                   |
            |===============================================================-->
			<div class="family__image">
				<FamilyImage :src="family.imageOne" name="one" />
				<FamilyImage :src="family.imageTwo" name="two" />
			</div>
		</div>
	</section>
</template>

<script>
import family from '~/graphql/getFamily'

export default {
	apollo: {
		family
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

/* 
|-----------------------------------------------------------------------------|
| Small Screens                                                               | 
|-----------------------------------------------------------------------------|
*/

@media screen and (max-width: 340px) {
	.family__container {
		padding: 0;
	}

	.family__img {
		padding: 0;
	}
}

/* 
|-----------------------------------------------------------------------------|
| Large Screens                                                               | 
|-----------------------------------------------------------------------------|
*/

@media screen and (min-width: 1024px) {
	.family__container {
		margin: var(--space-1) auto var(--space-1);
	}

	.family__description {
		padding: 0 8rem;
	}
}
</style>
