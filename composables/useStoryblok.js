import { ref, useContext, useFetch } from '@nuxtjs/composition-api'

/**
 * Composable to access storyblok API an get some info
 * @param {string} path to Storyblok content
 * @returns storybloks response
 */

export default function useStoryblok(path) {
	const blok = ref({})

	const { $storyapi, isDev } = useContext()

	// Choose the right version of the content
	const version = isDev ? 'draft' : 'published'

	useFetch(async () => {
		// Query to storyblok API
		const query = await $storyapi.get(`cdn/stories/${path}`, {
			version
		})

		// Update bloks value to the response
		blok.value = query.data.story.content
	})

	return { blok }
}
