// prettier-ignore
export default {
	/**
	 * Target
	 */
	target: 'static',

	/**
	 * Global CSS
	 */

	css: [
		'~/assets/css/variables.css'
	],

	/**
	 * Auto import components
	 */
	components: {
		dirs: [
			'~/components',
			'~/components/sections',
			'~/components/atoms',
			'~/components/molecules',
			'~/components/organisms',
		]
	},

	/**
	 * Plugins
	 */

	plugins: [
		'~/plugins/composition-api', // required for storyblok-rich-text-renderer
		'~/plugins/storyblok-rich-text-renderer'
	],

	/**
	 * Modules for
	 * build and dev
	 */
	buildModules: [
		// TypeScript builder
		'@nuxt/typescript-build',
		// Composition API
		'@nuxtjs/composition-api/module'
	],

	/**
	 * Modules
	 */
	modules: [
		// Axios for HTTP requests
		'@nuxtjs/axios',
		// Storyblok API
		[
			'storyblok-nuxt',
			{
				accessToken: process.env.STORYBLOK_API_KEY,
				cacheProvider: 'memory'
			}
		]
	]
}
