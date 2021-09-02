<template>
	<section id="about" class="about section">
		<div class="about__container container grid">
			<!--==============================================================| 
			| About Data                                                      |
			|===============================================================-->
			<div class="about__data">
				<h2 class="section__title about__title">
					<DatocmsStructuredText :data="iigd.title" />
				</h2>
				<div class="about__description">
					<DatocmsStructuredText :data="iigd.description" />
				</div>
				<a :href="iigd.link" target="_blank" class="button">
					Conheça Mais
				</a>
			</div>

			<!--==============================================================| 
			| About Images                                                    |
			|===============================================================-->
			<div class="about__img">
				<AboutImage :src="iigd.imageOne" size="small" />
				<AboutImage :src="iigd.imageTwo" size="large" />
			</div>
		</div>
	</section>
</template>

<script>
import iigd from '~/graphql/getAbout'

export default {
	apollo: {
		iigd
	},

	mounted() {
		console.log(this.iigd)
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
|-----------------------------------------------------------------------------|
| Images                                                                      | 
|-----------------------------------------------------------------------------|
*/

.about__img {
	display: flex;
	column-gap: 1rem;
	align-items: center;
	justify-content: center;
}

/* 
|-----------------------------------------------------------------------------|
| Medium Screens                                                              | 
|-----------------------------------------------------------------------------|
*/

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
