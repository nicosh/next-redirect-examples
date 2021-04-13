import React, { useEffect } from "react";
import Router from 'next/router'
const enviroment = process.browser ? "client side" : "server side"
const ClientSide = ()=>{
    useEffect(() => {
        console.log(enviroment)
        const {pathname} = Router
        // conditional redirect
        if(pathname == '/client' ){
            // with router.push the page may be added to history
            // you can prevent this behaviour using location.replace
            Router.push('/target')
           //location.replace("/target")
        }
      });
    return ( 
    <p>
        You will see this page flashing, <br/>
        you can avoid the flashing using a loader.
    </p> 
    )
}
export default ClientSide