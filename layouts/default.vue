<template>
	<div>
		<Nuxt />
	</div>
</template>

<style src="~/assets/css/reset.css"></style>
<style>
/*
-----------------------
---- Reusable CSS ---- |
---- classes --------- |
-----------------------
*/

.section {
	padding: 4.5rem 0 2.5rem;
}

.section__title {
	font-size: var(--h2-font-size);
	color: var(--title-color);
	text-align: center;
	text-transform: capitalize;
	margin-bottom: var(--space-2);
}

.container {
	max-width: 968px;
	margin-right: var(--space-1);
	margin-left: var(--space-1);
}

.grid {
	display: grid;
	gap: 1.5rem;
}

/* Medium Screens */
@media screen and (min-width: 768px) {
	.section {
		padding: 7rem 0 2rem;
	}
}

/* Large Screens */
@media screen and (min-width: 1024px) {
	.container {
		margin-right: auto;
		margin-left: auto;
	}
}

@media screen and (min-width: 1200px) {
	.container {
		max-width: 1024px;
	}
}

/*
------------------
---- Buttons ---- |
------------------
*/

.button {
	display: inline-block;
	background-color: var(--first-color);
	color: var(--white-color);
	padding: 1rem 2rem;
	font-weight: var(--font-semi-bold);
	transition: 0.3s;
}

.button:hover {
	background-color: var(--first-color-alt);
}

.button--flex {
	display: flex;
	align-items: center;
	column-gap: 0.25rem;
}

.button--link {
	background: none;
	padding: 0;
}

.button--link:hover {
	background: none;
}
</style>
