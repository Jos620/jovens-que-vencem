<template>
	<div class="nav__dark">
		<span class="change-theme-name">
			{{ isDark ? 'Light' : 'Dark' }} Mode
		</span>
		<i
			class="change-theme"
			:class="isDark ? 'ri-moon-fill' : 'ri-sun-fill'"
			@click="toggleTheme"
		></i>
	</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { useDark, useToggle } from '@vueuse/core'

export default defineComponent({
	setup() {
		const isDark = useDark()
		const toggleTheme = useToggle(isDark)

		return { isDark, toggleTheme }
	}
})
</script>

<style scoped>
/* 
|-----------------------------------------------------------------------------|
| Dark Mode                                                                   | 
|-----------------------------------------------------------------------------|
*/

.nav__dark {
	display: flex;
	align-items: center;
	column-gap: 2rem;
	position: absolute;
	left: 3rem;
	bottom: 4rem;
}

.change-theme,
.change-theme-name {
	color: var(--text-color);
}

.change-theme {
	cursor: pointer;
	font-size: 1rem;
}

.change-theme-name {
	font-size: var(--small-font-size);
}

@media screen and (min-width: 768px) {
	.nav__dark {
		position: initial;
	}

	.change-theme-name {
		display: none;
	}

	.change-theme {
		color: var(--white-color);
		position: absolute;
		right: 0.8rem;
		top: 3px;
	}

	.scroll-header .change-theme {
		color: var(--text-color);
	}
}

@media screen and (min-width: 1024px) {
	.change-theme {
		right: 0;
	}
}
</style>
