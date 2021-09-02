<template>
	<main>
		<Home />
		<Family />
		<Verse />
		<About />
		<Contact />
	</main>
</template>

<script>
import home from '~/graphql/getGlobalMeta'
import { toHead } from 'vue-datocms'

export default {
	apollo: {
		home
	},

	head() {
		if (!this.home) return
		return toHead(this.home.seo)
	}
}
</script>
