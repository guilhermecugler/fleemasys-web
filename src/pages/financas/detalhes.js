import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

export default class FinancaDetalhes extends Component {
  state = {
    financa: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/financas/${id}`);

    this.setState({ financa: response.data });
  }

  render() {
    return (
      <div>
        <div className="componentes">
          <Header />
          <Accordion />
        </div>
        {/* <div className="navegar"></div> */}
        {/* <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="/main">
            Página Inicial
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            Usuários
          </BreadcrumbItem>
        </Breadcrumb> */}
        <section className="content table-responsive col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered">
            <tbody>
              {this.state.financa.map(financa => (
                <tr key={financa.financaId}>
                  <tr>
                    <th>ID</th>
                    <td>{financa.financaId}</td>
                  </tr>
                  <tr>
                    <th>Titular</th>
                    <td>{financa.financaTitular}</td>
                  </tr>
                  <tr>
                    <th>Valor</th>
                    <td>{financa.financaValor}</td>
                  </tr>
                  <tr>
                    <th>Referência</th>
                    <td>{financa.financaReferencia}</td>
                  </tr>
                  <tr>
                    <th>Tipo</th>
                    <td>{financa.TipoFinanca}</td>
                  </tr>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}
