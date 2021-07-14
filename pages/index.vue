<template>
	<div v-editable="blok">
		<component v-if="blok.component" :is="blok.component" :blok="blok" />
		<ScrollUp />
	</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

import useStoryblok from '~/composables/useStoryblok'

export default defineComponent({
	setup() {
		const { blok } = useStoryblok('pages')

		return { blok }
	}
})
</script>
