import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import logo from "../logo.svg";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative 
          Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makokto_msk */}
          <NavLink to="/">
            <img src={logo} alt="store" className="navbar-brand" />
          </NavLink>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <NavLink to="/" className="nav-link">
                Produtos
              </NavLink>
            </li>
          </ul>
          <NavLink to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              Carrinho
            </ButtonContainer>
          </NavLink>
        </NavWrapper>
      </React.Fragment>
    );
  }
}
export default Navbar;

const NavWrapper = styled.nav`
  background: var(--mainBlue);
`;
