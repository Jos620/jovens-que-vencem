import { onMounted, onUnmounted, ref } from '@nuxtjs/composition-api'
import { set } from '@vueuse/core'

/**
 * Composable to add 'scroll' event listener on window
 * @param amount of pixels for the window to scroll
 * @returns an boolean that say if the window has scrolled the amount defined
 */

export default function useHandleScroll(amount: number) {
	const hasScrolled = ref(false)

	const handleScroll = () => {
		if (window.scrollY >= amount) set(hasScrolled, true)
		else set(hasScrolled, false)
	}

	onMounted(() => {
		window.addEventListener('scroll', handleScroll)
	})
	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll)
	})

	return { hasScrolled }
}
