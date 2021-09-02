<template>
	<section class="contact section" id="contact">
		<div class="contact__bg">
			<div class="contact__container container">
				<!--==========================================================| 
				| Contact Title                                               |
				|===========================================================-->
				<h2 class="section__title contact__title">
					<DatocmsStructuredText :data="contact.title" />
				</h2>

				<!--==========================================================| 
				| Contact Description                                         |
				|===========================================================-->
				<div class="contact__description">
					<DatocmsStructuredText :data="contact.description" />
				</div>

				<!--==========================================================| 
				| Contact Form                                                |
				|===========================================================-->
				<form class="contact__form" @submit.prevent="submitTel">
					<input
						type="text"
						v-model="tel"
						maxlength="16"
						name="telefone"
						autocomplete="off"
						class="contact__input"
						:placeholder="contact.placeholder"
					/>
					<button type="submit" class="button">Enviar</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import contact from '~/graphql/getContact'
import useTelephoneMask from '~/composables/useTelephoneMask'
import useSubmitTelephone from '~/composables/useSubmitTelephone'

export default defineComponent({
	apollo: {
		contact
	},

	setup() {
		const { tel } = useTelephoneMask()
		const submitTel = () => useSubmitTelephone(tel)

		return { tel, submitTel }
	}
})
</script>

<style scoped>
.contact__bg {
	background-color: var(--first-color);
	padding: 2.5rem 0;
}

.contact__title,
.contact__description {
	color: var(--white-color);
}

.contact__description {
	text-align: center;
	margin-bottom: var(--space-2-5);
}

.contact__form {
	background-color: var(--input-color);
	padding: 0.5rem;
	display: flex;
	justify-content: space-between;
}

.contact__input {
	width: 70%;
	padding-inline: 0.5rem;
	background-color: var(--input-color);
	color: var(--text-color);
}

.contact__input::placeholder {
	color: var(--text-color);
}

/*
|-----------------------------------------------------------------------------|
| Medium Screens                                                              |
|-----------------------------------------------------------------------------|
*/

@media screen and (min-width: 568px) {
	.contact__form {
		width: 470px;
		margin-inline: auto;
	}
}

@media screen and (min-width: 768px) {
	.contact__bg {
		background: none;
		padding: 0;
	}

	.contact__container {
		background-color: var(--first-color);
		padding: 3.5rem;
	}

	.contact__input {
		padding: 0 0.5rem;
	}
}
</style>
