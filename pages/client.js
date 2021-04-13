import React, { useEffect } from "react";
import Router from 'next/router'

const ClientSide = ()=>{
    useEffect(() => {
        const {pathname} = Router
        if(pathname == '/client' ){
            Router.push('/target')
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