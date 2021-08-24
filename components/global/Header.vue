<template>
	<header
		id="header"
		class="header"
		:class="{ 'scroll-header': hasScrolled }"
	>
		<nav class="nav container">
			<!--==============================================================|
			| Logo                                                            |
			|===============================================================-->
			<NLink to="/" class="nav__logo">
				{{ header.logo }}
			</NLink>

			<!--==============================================================|
			| Nav Menu                                                        |
			|===============================================================-->
			<div
				id="nav-menu"
				class="nav__menu"
				:class="{ 'show-menu': showModal }"
			>
				<!--==========================================================|
				| Navbar                                                      |
				|===========================================================-->
				<ul class="nav__list">
					<NavItem
						v-for="link in header.navbar"
						:key="link.id"
						:href="link.navbarLinkHref"
						:text="link.navbarLinkText"
					/>
				</ul>

				<!--==========================================================|
				| Dark Mode                                                   |
				|===========================================================-->
				<ChangeTheme />

				<!--==========================================================|
				| Close Menu                                                  |
				|===========================================================-->
				<i
					id="nav-close"
					class="ri-close-line nav__close"
					@click="toggleShow"
				></i>
			</div>

			<!--==============================================================|
			| Open Menu                                                       |
			|===============================================================-->
			<div class="nav__open" id="nav-open" @click="toggleShow">
				<i class="ri-function-line"></i>
			</div>
		</nav>
	</header>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import useShowModal from '~/composables/useShowModal'
import useHandleScroll from '~/composables/useHandleScroll'
import getHeader from '~/queries/getHeader'

export default defineComponent({
	apollo: {
		header: getHeader
	},

	setup() {
		const { showModal, toggleShow } = useShowModal()
		const { hasScrolled } = useHandleScroll(100)

		return {
			showModal,
			toggleShow,
			hasScrolled
		}
	}
})
</script>

<style scoped>
/* 
|-----------------------------------------------------------------------------|
| Header                                                                      | 
|-----------------------------------------------------------------------------|
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
|-----------------------------------------------------------------------------|
| Nav                                                                         | 
|-----------------------------------------------------------------------------|
*/

.nav {
	height: var(--header-height);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.nav__logo,
.nav__open {
	color: var(--white-color);
}

.nav__logo {
	font-family: var(--title-font);
	font-size: var(--h1-font-size);
}

.nav__open {
	font-size: 1.2rem;
	cursor: pointer;
}

.nav__menu {
	position: relative;
}

/* 
|-----------------------------------------------------------------------------|
| Small Screens                                                               | 
|-----------------------------------------------------------------------------|
*/

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
|-----------------------------------------------------------------------------|
| Show Menu                                                                   | 
|-----------------------------------------------------------------------------|
*/

.show-menu {
	right: 0;
}

/* 
|-----------------------------------------------------------------------------|
| Change Background Color                                                     | 
|-----------------------------------------------------------------------------|
*/

.scroll-header {
	background-color: var(--body-color);
	box-shadow: 0 0 4px hsla(var(--hue-color), 64%, 15%, 0.15);
}

.scroll-header .nav__logo,
.scroll-header .nav__open {
	color: var(--title-color);
}

/* 
|-----------------------------------------------------------------------------|
| Medium Screens                                                              | 
|-----------------------------------------------------------------------------|
*/

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

	.nav__open,
	.nav__close {
		display: none;
	}
}
</style>
