// prettier-ignore
export default {
	/**
	 * Target - Static (JAM Stack)
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
			'~/components/global',
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
		'~/plugins/storyblok-rich-text-renderer' // rich text renderer
	],

	/**
	 * Modules for
	 * build and dev
	 */
	buildModules: [
		// TypeScript builder
		'@nuxt/typescript-build',
		// Composition API
		'@nuxtjs/composition-api/module',
		// Image optimization
		'@nuxtjs/imagemin'			
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
	],

	/**
	 * Env variables
	 */
	env: {
		emailUserId: process.env.EMAILJS_USER_ID
	},

	/**
	 * Image optimization
	 */
	imagemin: {
		enableInDev: true		
	}
}
