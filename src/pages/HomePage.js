import React,{Fragment} from 'react'
import {ProductConsumer} from '../../src/context'

export default function HomePage() {
    return (
        <Fragment>
            <ProductConsumer>
                {value =>
                       { console.log(value);
                   return <h1>i am from home page</h1>}}
            </ProductConsumer>
        </Fragment>
    )
}
