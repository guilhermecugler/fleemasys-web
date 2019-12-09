import React from "react";
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem
// } from 'reactstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import logo from "../../assets/logo-texto.png";
import acessibilidade from "../../assets/acessibilidade.png";
// aqui ele importa a pagina tooltip.js
//import "./tooltip.js";

const Example = props => {
  // var i = 0;
  // function ativatooltip() {
  //   var btn = document.getElementById("btnAcessibilidade").click();
  //   if (i == 0) {
  //     btn.title = "";
  //     i++;
  //   } else {
  //     btn.title = "mudou";
  //     i--;
  //   }
  // }
  return (
    <div>
      <nav
        data-toggle-tooltip="tooltip"
        data-placement="bottom"
        title="ROXO"
        className="navbar fixed-top navbar-expand-lg  "
      >
        <img
          alt="logo"
          id="logo-texto"
          data-toggle-tooltip="tooltip"
          data-placement="bottom"
          title="BRANCO"
          src={logo}
        ></img>
        <button
          id="btnAcessibilidade"
          className="btn btn-outline-light"
          data-placement="bottom"
          title="ACESSIBILIDADE"
          //aqui é a função sendo chamada
          // onClick={ativatooltip}
        >
          <img alt="" src={acessibilidade} id="imgAcessibilidade"></img>
        </button>
        <a className="navbar-brand" id="logo-texto" href="/main"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};

export default Example;
