<template>
	<header
		id="header"
		class="header"
		:class="{ 'scroll-header': hasScrolled }"
	>
		<nav class="nav container">
			<!-- Nav Logo -->
			<NLink to="/" class="nav__logo">{{ blok.logo }}</NLink>

			<!-- Nav Menu -->
			<div
				id="nav-menu"
				class="nav__menu"
				:class="{ 'show-menu': showModal }"
			>
				<ul class="nav__list">
					<NavItem
						v-for="navItem in blok.navbar"
						:key="navItem._uid"
						:link="navItem.link"
						@click.native="toggleShow"
						>{{ navItem.text }}</NavItem
					>
				</ul>

				<!-- Dark Mode -->
				<component 
					v-if="blok.changeTheme[0].component" 
					:is="blok.changeTheme[0].component" 
					:dark="blok.changeTheme[0].iconDark"
					:light="blok.changeTheme[0].iconLight"
				/>

				<i
					id="nav-close"
					class="ri-close-line nav__close"
					@click="toggleShow"
				></i>
			</div>


			<!-- Nav Toggle -->
			<div class="nav__toggle" id="nav-toggle" @click="toggleShow">
				<i class="ri-function-line"></i>
			</div>
		</nav>
	</header>
</template>

<script>
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

import useShowModal from '~/composables/useShowModal'
import useHandleScroll from '~/composables/useHandleScroll'
import useStoryblok from '~/composables/useStoryblok'

export default defineComponent({
	setup() {
		const { blok } = useStoryblok('components/header')

		const { showModal, toggleShow } = useShowModal()

		const { hasScrolled } = useHandleScroll(100)

		onMounted(() => console.log(blok.value))

		return {
			blok,
			showModal,
			toggleShow,
			hasScrolled
		}
	}
})
</script>

<style scoped>
/*
-----------------
---- Header ---- |
-----------------
*/

.header {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: var(--z-fixed);
	transition: 0.125s;
}

/*
--------------
---- Nav ---- |
--------------
*/

.nav {
	height: var(--header-height);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.nav__logo,
.nav__toggle {
	color: var(--white-color);
}

.nav__logo {
	font-family: var(--title-font);
	font-size: var(--h1-font-size);
}

.nav__toggle {
	font-size: 1.2rem;
	cursor: pointer;
}

.nav__menu {
	position: relative;
}

@media screen and (max-width: 767px) {
	.nav__menu {
		position: fixed;
		background-color: var(--body-color);
		top: 0;
		right: -100%;
		width: 70%;
		height: 100%;
		box-shadow: -1px 0 4px hsla(var(--hue-color), 64%, 15%, 0.15);
		padding: 3rem;
		transition: 0.4s;
	}
}

.nav__list {
	display: flex;
	flex-direction: column;
	row-gap: 2.5rem;
}

.nav__close {
	position: absolute;
	top: 0.75rem;
	right: 1rem;
	font-size: 1.5rem;
	color: var(--title-color);
	cursor: pointer;
}

/*
--------------------
---- Show Menu ---- |
--------------------
*/

.show-menu {
	right: 0;
}

/*
----------------------------
---- Change background ---- |
---- color ---------------- |
----------------------------
*/

.scroll-header {
	background-color: var(--body-color);
	box-shadow: 0 0 4px hsla(var(--hue-color), 64%, 15%, 0.15);
}

.scroll-header .nav__logo,
.scroll-header .nav__toggle {
	color: var(--title-color);
}

/* Medium Screens */
@media screen and (min-width: 768px) {
	.nav {
		height: calc(var(--header-height) + 1.5rem);
	}

	.nav__menu {
		display: flex;
		column-gap: 1rem;
	}

	.nav__list {
		flex-direction: row;
		column-gap: 4rem;
		margin-right: 4rem;
	}

	.nav__toggle,
	.nav__close {
		display: none;
	}
}
</style>
