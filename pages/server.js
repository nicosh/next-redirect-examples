
const serverSidePage = () => {
    return <p>You will never see this page</p>
}
export async function getServerSideProps(context) {
    const res =  false //await fetch(`https://.../data`)
    const data = false // await res.json()

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
