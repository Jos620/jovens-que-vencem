<template>
	<section id="verse" class="verse section">
		<img class="verse__image" :src="blok.image.filename" alt="Verse" />
		<div v-if="blok.image.filename" class="verse__container container grid">
			<div class="verse__data">
				<h2 class="section__title verse__title">
					<rich-text-renderer
						:document="blok.title"
					></rich-text-renderer>
				</h2>
				<div class="verse__content">
					<p class="verse__description">
						<rich-text-renderer
							:document="blok.verse"
						></rich-text-renderer>
					</p>
					<a
						class="verse__reference"
						target="_blank"
						:href="blok.link.url"
					>
						{{ blok.reference }}
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		blok: {
			type: Object,
			required: true
		}
	},

	mounted() {
		console.log(this.blok)
	}
}
</script>

<style scoped>
.verse {
	padding-top: 2rem;
	margin-top: 1.5rem;
	position: relative;
}

.verse__image {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 100%;
	width: 100%;
	filter: brightness(65%);
	object-fit: cover;
	object-position: 0%;
}

.verse__container {
	position: relative;
}

.verse__title,
.verse__description,
.verse__reference {
	color: var(--white-color);
}

.verse__description {
	text-align: center;
	/* color: var(--title-color); */
	font-size: var(--normal-font-size);
	font-weight: var(--font-semi-bold);
	font-style: italic;
}

.verse__reference {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: var(--space-1-5);
}

.verse__reference::before {
	content: '';
	width: 12px;
	height: 2px;
	background-color: var(--white-color);
	margin-right: 8px;
}

/* Medium Screens */
@media screen and (min-width: 768px) {
	.verse {
		margin-top: 4rem;
		padding-top: 3rem;
	}

	.verse__description {
		max-width: 640px;
		margin-right: auto;
		margin-left: auto;
		font-size: var(--h3-font-size);
	}
}
</style>
