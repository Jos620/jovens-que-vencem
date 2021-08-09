import { Ref } from '@vue/composition-api'
import { set } from '@vueuse/core'
import emailjs from 'emailjs-com'

import useValidateTelephone from './useValidateTelephone'

/**
 * Composable to submit an telephone number to EmailJS
 * @param tel - phone to be verified
 */

export default function useSubmitTelephone(tel: Ref<string>) {
	const { isValid } = useValidateTelephone(tel)

	const userId = process.env.emailUserId

	const submit = () => {
		// send email with EmailJS
		emailjs.send('gmail', 'jovem-novo', { number: tel.value }, userId)
		alert('Em breve entraremos em contato, fique ligado!')
	}

	const invalid = () => alert('Verifique se o número de celular está correto')

	if (isValid) submit()
	else return invalid()

	set(tel, '') // reset the value on form
}
