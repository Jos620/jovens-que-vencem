<template>
	<div>
		<component
			v-if="blok.story.content.component"
			:key="blok.story.content._uid"
			:is="blok.story.content.component"
			:blok="blok.story.content"
		/>
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
