import { ref } from '@nuxtjs/composition-api'
import { get, set, whenever } from '@vueuse/core'

/**
 * Composable to mask an input with brazilian pattern
 * @returns masked telephone
 */

export default function useTelephoneMask() {
	const tel = ref('')

	const updateTel = () => {
		set(tel, get(tel).replace(/\D/g, '')) // remove any character, only leaves the numbers
		set(tel, get(tel).replace(/^(\d{2})(\d)/g, '($1) $2')) // place parenthesis on the first two numbers
		set(tel, get(tel).replace(/(\d)(\d{4})/g, '$1 $2')) // give a space around the 9 digit
		set(tel, get(tel).replace(/(\d)(\d{4})$/, '$1-$2')) // place an hyphen between the 4 and the 5 character
	}
	whenever(() => get(tel), updateTel)

	return {
		tel
	}
}
