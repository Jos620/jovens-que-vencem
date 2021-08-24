<template>
	<li class="nav__item">
		<NLink :to="href" class="nav__link">
			{{ text }}
		</NLink>
	</li>
</template>

<script>
export default {
	props: ['href', 'text']
}
</script>

<style scoped>
/* 
|-----------------------------------------------------------------------------|
| Nav Link                                                                    | 
|-----------------------------------------------------------------------------|
*/

.nav__link {
	color: var(--text-color-light);
	font-weight: var(--font-semi-bold);
	text-transform: uppercase;
}

.nav__link:hover {
	color: var(--text-color);
}

.nav__link.nuxt-link-active {
	color: var(--title-color);
	position: relative;
}

.nav__link.nuxt-link-active:hover {
	color: var(--title-color);
}

.nav__link.nuxt-link-active::after {
	content: '';
	position: absolute;
	left: 0;
	bottom: -2px;
	height: 2px;
	width: 0;
	background-color: var(--title-color);
	animation: appear 275ms 1 forwards;
	/* TODO: an transition efect to nuxt-link-active::after */
}

/* 
|-----------------------------------------------------------------------------|
| Active enter transition                                                     | 
|-----------------------------------------------------------------------------|
*/

@keyframes appear {
	from {
		width: 0;
	}

	to {
		width: 100%;
	}
}

/* 
|-----------------------------------------------------------------------------|
| Medium Screens                                                              | 
|-----------------------------------------------------------------------------|
*/

@media screen and (min-width: 768px) {
	/* 
    |-------------------------------------------------------------------------|
    | Nav Link                                                                | 
    |-------------------------------------------------------------------------|
    */

	.nav__link {
		color: var(--white-color);
		text-transform: initial;
	}

	.nav__link:hover {
		color: var(--white-color);
	}

	.nav__link.nuxt-link-active {
		color: var(--white-color);
	}

	.nav__link.nuxt-link-active:hover {
		color: var(--white-color);
	}

	.nav__link.nuxt-link-active::after {
		bottom: -4px;
		background-color: var(--white-color);
	}

	/* 
    |-------------------------------------------------------------------------|
    | Nav Link Color                                                          | 
    |-------------------------------------------------------------------------|
    | Change link color when the background changes                           | 
    |-------------------------------------------------------------------------|
    */

	.scroll-header .nav__link {
		color: var(--text-color);
	}

	.scroll-header .nav__link.nuxt-link-active {
		color: var(--title-color);
	}

	.scroll-header .nav__link.nuxt-link-active::after {
		background-color: var(--title-color);
	}
}
</style>
