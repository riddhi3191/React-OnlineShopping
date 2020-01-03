import React,{Fragment} from 'react'
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

export default function Layout(props) {
    return (
        <Fragment>
        
            <Toolbar/>
                
            <main className="Content">
                {props.children}
            </main>
        </Fragment>
    )
}
