import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

export default class MultaDetalhes extends Component {
  state = {
    multa: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/multas/${id}`);

    this.setState({ multa: response.data });
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
              {this.state.multa.map(multa => (
                <tr key={multa.multaId}>
                  <tr>
                    <th>ID</th>
                    <td>{multa.multaId}</td>
                  </tr>
                  <tr>
                    <th>Titular</th>
                    <td>{multa.multaTitular}</td>
                  </tr>
                  <tr>
                    <th>Valor</th>
                    <td>{multa.multaValor}</td>
                  </tr>
                  <tr>
                    <th>Referência</th>
                    <td>{multa.multaReferencia}</td>
                  </tr>
                  <tr>
                    <th>Id Finança</th>
                    <td>{multa.financaId}</td>
                  </tr>
                  <tr>
                    <th>Id Motorista</th>
                    <td>{multa.motoristaId}</td>
                  </tr>
                  <tr>
                    <th>Id Veículo</th>
                    <td>{multa.veiculoId}</td>
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
