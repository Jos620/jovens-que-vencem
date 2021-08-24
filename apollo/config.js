const config = ctx => ({
	httpEndpoint: 'https://graphql.datocms.com',
	getAuth: () => process.env.DATOCMS_API_TOKEN
})

export default config
