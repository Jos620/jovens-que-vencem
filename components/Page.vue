<template>
	<div v-editable="blok">
		<component
			v-for="blok in blok.body"
			:key="blok._uid"
			:is="blok.component"
			:blok="blok"
		/>
	</div>
</template>

<script>
export default {
	props: {
		blok: {
			type: Object,
			required: true
		}
	}
}
</script>
