<template>
	<a :href="link" target="_blank" class="social__link">
		<i :class="icon"></i>
	</a>
</template>

<script>
export default {
	props: ['icon', 'link']
}
</script>

<style>
a.social__link {
	color: var(--white-color);
	font-size: 1.2rem;
	width: max-content;
}

.social__link:hover {
	color: var(--first-color-lighter);
}
</style>
