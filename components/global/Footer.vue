<template>
	<footer id="footer" class="footer section">
		<div class="footer__container container grid">
			<div class="footer__content grid">
				<div class="footer__data">
					<NLink to="/">
						<h3 class="footer__title">
							<DatocmsStructuredText :data="footer.logo" />
						</h3>
					</NLink>
					<div class="footer__description">
						<DatocmsStructuredText :data="footer.description" />
					</div>

					<div>
						<SocialLink
							class="footer__social"
							v-for="social in footer.social"
							:key="social.id"
							:href="social.link"
							:icon="social.icon"
						/>
					</div>
				</div>

				<FooterList
					v-for="footerList in allFooterLists"
					:key="footerList.id"
					:title="footerList.title"
					:list="footerList.list"
				/>
			</div>

			<div class="footer__rights">
				<p class="footer__copy">
					&#169; {{ year }} JQV - Campo Largo. Todos os direitos
					reservados.
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { get, useNow } from '@vueuse/core'
import footer from '~/graphql/getFooter'
import allFooterLists from '~/graphql/getAllFooterLists'

export default defineComponent({
	apollo: {
		footer,
		allFooterLists
	},
	setup() {
		const now = useNow()
		const year = get(now).getFullYear()

		return { year }
	}
})
</script>

<style scoped>
.footer__container {
	row-gap: 5rem;
}

.footer__content {
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	row-gap: 2rem;
}

.footer__title {
	font-size: var(--h2-font-size);
	margin-bottom: var(--space-0-5);
}

.footer__description {
	margin-bottom: var(--space-2);
}

.footer__social {
	font-size: 1.25rem;
	color: var(--title-color);
	margin-right: var(--space-1-25);
}

.footer__rights {
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;
	text-align: center;
}

.footer__copy {
	font-size: var(--small-font-size);
	color: var(--text-color-light);
}

/* Large Screens */
@media screen and (min-width: 1024px) {
	.footer__content {
		justify-items: center;
	}
}
</style>
