// prettier-ignore
export default {
	/**
	 * |----------------------------------------------------------------------|
	 * | Target - Static (JAM Stack)                                          |
	 * |----------------------------------------------------------------------|
	 */
	target: 'static',

	/**
	 * |----------------------------------------------------------------------|
	 * | Global Head                                                          |
	 * |----------------------------------------------------------------------|
	 */
	head: {
		/**
		 * |------------------------------------------------------------------|
		 * | Title                                                            |
		 * |------------------------------------------------------------------|
		 */
		title: process.env.SEO_TITLE,

		/**
		 * |------------------------------------------------------------------|
		 * | Meta Tags                                                        |
		 * |------------------------------------------------------------------|
		 */
		meta: [
			{ charset: 'utf-8' },
			{ httpEquiv: 'X-UA-Compatible',    content: 'IE=edge'                             },
			{ name: 'viewport',                content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection',        content: 'telephone=no'                        },
			{ name: 'msapplication-TileColor', content: '#ffffff'                             },
			{ name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png'        },
			{ name: 'theme-color',             content: '#000'                                },

			/**
			 * |--------------------------------------------------------------|
			 * | SEO Tags                                                     |
			 * |--------------------------------------------------------------|
			 */
			{ name: 'title',                   content: process.env.SEO_TITLE       },
			{ name: 'description',             content: process.env.SEO_DESCRIPTION },

			// // Open Graph / Facebook -----------------------------------------|
			// { property: 'og:type',             content: 'website'                   },
			// { property: 'og:url',              content: process.env.SEO_PERMALINK   },
			// { property: 'og:title',            content: process.env.SEO_TITLE       },
			// { property: 'og:description',      content: process.env.SEO_DESCRIPTION },
			// { property: 'og:image',            content: process.env.SEO_PREVIEW     },

			// // Twitter -------------------------------------------------------|
			// { property: 'twitter:card',        content: 'summary_large_image'       },
			// { property: 'twitter:url',         content: process.env.SEO_PERMALINK   },
			// { property: 'twitter:title',       content: process.env.SEO_TITLE       },
			// { property: 'twitter:description', content: process.env.SEO_DESCRIPTION },
			// { property: 'twitter:image',       content: process.env.SEO_PREVIEW     },

		],

		/**
		 * |------------------------------------------------------------------|
		 * | Link Tags                                                        |
		 * |------------------------------------------------------------------|
		 */
		link: [
			/**
			 * |--------------------------------------------------------------|
			 * | Favicon                                                      |
			 * |--------------------------------------------------------------|
			 */
			{ rel: 'apple-touch-icon',        sizes: '57x57',   href: '/favicon/apple-icon-57x57.png'   },
			{ rel: 'apple-touch-icon',        sizes: '60x60',   href: '/favicon/apple-icon-60x60.png'   },
			{ rel: 'apple-touch-icon',        sizes: '72x72',   href: '/favicon/apple-icon-72x72.png'   },
			{ rel: 'apple-touch-icon',        sizes: '76x76',   href: '/favicon/apple-icon-76x76.png'   },
			{ rel: 'apple-touch-icon',        sizes: '114x114', href: '/favicon/apple-icon-114x114.png' },
			{ rel: 'apple-touch-icon',        sizes: '120x120', href: '/favicon/apple-icon-120x120.png' },
			{ rel: 'apple-touch-icon',        sizes: '144x144', href: '/favicon/apple-icon-144x144.png' },
			{ rel: 'apple-touch-icon',        sizes: '152x152', href: '/favicon/apple-icon-152x152.png' },
			{ rel: 'apple-touch-icon',        sizes: '180x180', href: '/favicon/apple-icon-180x180.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16',   href: '/favicon/favicon-16x16.png'      },
			{ rel: 'icon', type: 'image/png', sizes: '32x32',   href: '/favicon/favicon-32x32.png'      },
			{ rel: 'icon', type: 'image/png', sizes: '96x96',   href: '/favicon/favicon-96x96.png'      },
			{ rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/favicon-192x192.png'    },
			{ rel: 'manifest',                                  href: '/favicon/manifest.json'          },

			/**
			 * |--------------------------------------------------------------|
			 * | Google Fonts                                                 |
			 * |--------------------------------------------------------------|
			 * | - Open Sans                                                  |
			 * | - Raleway                                                    |
			 * |--------------------------------------------------------------|
			 */
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com'                                                                                 },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true                                                                 },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@500;600;700&display=swap' },

			/**
			 * |--------------------------------------------------------------|
			 * | Remix Icon                                                   |
			 * |--------------------------------------------------------------|
			 */
			{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' }
		]
	},

	/**
	 * |----------------------------------------------------------------------|
	 * | Global CSS                                                           |
	 * |----------------------------------------------------------------------|
	 */
	css: [
		'~/assets/css/reset.css',
		'~/assets/css/variables.css',
	],

	/**
	 * |----------------------------------------------------------------------|
	 * | Auto Import Components                                               |
	 * |----------------------------------------------------------------------|
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
	 * |----------------------------------------------------------------------|
	 * | Vue Plugins                                                          |
	 * |----------------------------------------------------------------------|
	 */
	plugins: [
		'~/plugins/datocms.js',
	],

	/**
	 * |----------------------------------------------------------------------|
	 * | Nuxt Modules for Dev                                                 |
	 * |----------------------------------------------------------------------|
	 */
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/composition-api/module',
		'@nuxtjs/imagemin'
	],

	/**
	 * |----------------------------------------------------------------------|
	 * | Nuxt Modules                                                         |
	 * |----------------------------------------------------------------------|
	 */
	modules: [
		'@nuxtjs/axios', 
		'@nuxtjs/dotenv', 
		'@nuxtjs/apollo',
	],

	/**
	 * |----------------------------------------------------------------------|
	 * | Apollo Config                                                        |
	 * |----------------------------------------------------------------------|
	 */
	apollo: {
		clientConfigs: {
			default: '~/apollo/config.js'
		}
	}
}
