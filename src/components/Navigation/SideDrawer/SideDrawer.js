import React from 'react'
import { ProductConsumer } from '../../../context/context'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function SideDrawer() {
    return (
        <ProductConsumer>
            {value => {
                const {links, sidedrawerOpen,handleSideDrawer } = value;
                return(
                    <SideWrapper show={sidedrawerOpen}>
                    <ul>
                        {links.map(link => {
                            return (
                                <li key={link.id}>
                                    <Link to={link.path}
                                    className="sideDrawer-link"
                                    style={{textDecoration: 'none'}}
                                    onClick={handleSideDrawer}>
                                    {link.text}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    </SideWrapper>
                )
            }}
        </ProductConsumer>
    )
}

const SideWrapper = styled.nav`
position: fixed;
top: 61px;
left: 0;
width: 100%;
height: 100%;
background: var(--mainGrey);
z-index: 1;
border-right: 4px solid #449187;
transition: var(--mainTransition);
transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
ul {
  list-style-type: none;
  padding: 0 !important;
}
.sideDrawer-link {
  display: block;
  font-size: 1.5rem;
  text-transform: capitalize;
  color: var(--mainBlack);
  padding: 0.5rem 1.5rem;
  background: transparent;
  transition: var(--mainTransition);
}
.sideDrawer-link:hover {
  background: #449187;
  color: var(--mainWhite);
  padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  text-decoration: none;
}
@media (min-width: 576px) {
  width: 20rem;
}
`;