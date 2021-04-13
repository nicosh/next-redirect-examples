module.exports = {
    async redirects() {
        return [
            {
                source: '/config',
                destination: '/target',
                permanent: false,
            }
        ]
    }

}