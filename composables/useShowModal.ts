import { ref } from '@nuxtjs/composition-api'
import { useToggle } from '@vueuse/core'

/**
 * Composable to show an modal/menu
 * @returns an variable that says if the modal is showing, an method to toggle the show
 */

export default function useShowModal() {
	const showModal = ref(false)
	const toggleShow = useToggle(showModal)

	return { showModal, toggleShow }
}
