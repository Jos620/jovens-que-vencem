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
import gql from 'graphql-tag'
import { toHead } from 'vue-datocms'

export default {
	apollo: {
		home: gql`
			{
				home {
					seo: _seoMetaTags {
						tag
						content
						attributes
					}
				}
			}
		`
	},

	head() {
		if (!this.home) return
		return toHead(this.home.seo)
	}
}
</script>
