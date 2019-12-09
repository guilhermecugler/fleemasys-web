import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

export default class AbastecimentoDetalhes extends Component {
  state = {
    abastecimento: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/abastecimento/${id}`);

    this.setState({ abastecimento: response.data });
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
              {this.state.abastecimento.map(abastecimento => (
                <tr key={abastecimento.abastecimentoId}>
                  <tr>
                    <th>ID</th>
                    <td>{abastecimento.abastecimentoId}</td>
                  </tr>
                  <tr>
                    <th>Litragem</th>
                    <td>{abastecimento.abastecimentoLitragem}</td>
                  </tr>
                  <tr>
                    <th>Valor</th>
                    <td>{abastecimento.abastecimentoValor}</td>
                  </tr>
                  <tr>
                    <th>Observação</th>
                    <td>{abastecimento.abastecimentoObs}</td>
                  </tr>
                  <tr>
                    <th>Id Veículo</th>
                    <td>{abastecimento.veiculoId}</td>
                  </tr>
                  <tr>
                    <th>Id Motorista</th>
                    <td>{abastecimento.motoristaId}</td>
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
