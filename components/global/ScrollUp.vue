<template>
	<a
		href="#"
		class="scrollup"
		:style="{
			bottom: hasScrolled ? '5rem' : '-20%'
		}"
	>
		<i class="ri-arrow-up-line scrollup__icon"></i>
	</a>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import useHandleScroll from '~/composables/useHandleScroll'

export default defineComponent({
	setup() {
		const { hasScrolled } = useHandleScroll(200)

		return { hasScrolled }
	}
})
</script>

<style scoped>
.scrollup {
	position: fixed;
	right: 1rem;
	background-color: var(--first-color);
	padding: 0.5rem;
	display: flex;
	opacity: 0.9;
	z-index: var(--z-tooltip);
	transition: 0.4s;
}

.scrollup:hover {
	background-color: var(--first-color-alt);
	opacity: 1;
}

.scrollup__icon {
	color: var(--white-color);
}
</style>
