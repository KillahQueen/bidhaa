import React, { PureComponent } from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import {ButtonContainer} from "./Button";


class Navbar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
                <img src={"https://cdn4.iconfinder.com/data/icons/appliances-glyph-1/32/Appliances_4-128.png"}
              height="85px" className="navbar brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
              <Link to="/" className="nav-link">products</Link>
          </li>
          </ul>
          <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                  <span className="mr-2">
                      <i className="fas fa-cart-plus"/>my cart</span>
              </ButtonContainer>
          </Link>
            </NavWrapper>
        );
    }
}
const NavWrapper = styled.nav`
.nav-link {
    font-size: 1.3rem;
    color: #dfe4ea;
    text-transform: capitalize;
}
`








export default Navbar