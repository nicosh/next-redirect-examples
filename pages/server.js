
const enviroment = process.browser ? "client side" : "server side"

const serverSidePage = () => {
    return <p>You will never see this page</p>
}
export async function getServerSideProps(context) {
    console.log(enviroment)
    const res =  false //await fetch(`https://.../data`)
    const data = false // await res.json()

    // use context.resolvedUrl for conditional redirect

    if (!data) {
        return {
            redirect: {
                destination: '/target',
                permanent: false,
            },
        }
    }

    return {
        props: {}, // will be passed to the page component as props
    }
}

export default serverSidePage
