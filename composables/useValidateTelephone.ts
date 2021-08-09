import { Ref } from '@vue/composition-api'

/**
 * Composable to validate an telephone number, work only on brazilian phones
 * @param tel string to be verified
 * @returns a boolean to indicate if the tel is valid
 */

export default function useValidateTelephone(tel: Ref<string>) {
	const regex = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g
	const isValid = regex.test(tel.value)

	return { isValid }
}
