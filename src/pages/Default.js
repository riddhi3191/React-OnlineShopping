import React from 'react'
import storeBcg from '../images/defaultBcg.jpeg'
import Hero from '../components/Hero';
import {Link} from 'react-router-dom'


export default function Default() {
    return (
        <Hero title="404" max="true" img={storeBcg}>
        <h2>Page not Found</h2>
        <Link className="main-link" to="/">return home</Link>
        </Hero>
    )
}
