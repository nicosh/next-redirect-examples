import React, { useEffect,useState } from "react";
import Router from 'next/router'
const enviroment = process.browser ? "client side" : "server side"
const ClientSide2 = ()=>{
    const [loaded,setLoaded] = useState(false)
    useEffect(() => {
        console.log(enviroment)
        const {pathname} = Router
        // conditional redirect
        if(pathname == '/client2' ){
            // with router.push the page may be added to history
            // the browser on history back will  go back to this page and then forward again to the redirected page
            // you can prevent this behaviour using location.replace
            Router.push('/target')
           //location.replace("/target")
        }else{
            setLoaded(true)
        }
      },[]);

    if(!loaded){
        return <div></div> //show nothing or a loader
    }
    return ( 
        <p>
            You will see this page only if pathname !== "client2" , <br/>
        </p> 
    )
}
export default ClientSide2