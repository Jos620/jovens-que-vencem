<template>
	<div class="footer__data">
		<h3 class="footer__subtitle">{{ title }}</h3>

		<ul class="footer__list">
			<li class="footer__item" v-for="(item, i) in list" :key="i">
				<a :href="item.link" class="footer__link">
					{{ item.text }}
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['title', 'list']
}
</script>

<style scoped>
ul {
	margin-bottom: var(--space-2);
}

.footer__subtitle {
	color: var(--title-color);
	font-size: var(--h3-font-size);
	margin-bottom: var(--space-1);
}

.footer__item {
	margin-bottom: var(--space-0-75);
}

.footer__link {
	color: var(--text-color);
}

.footer__link:hover {
	color: var(--title-color);
}
</style>
