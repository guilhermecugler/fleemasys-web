import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

export default class AluguelDetalhes extends Component {
  state = {
    aluguel: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/aluguel/${id}`);

    this.setState({ aluguel: response.data });
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
              {this.state.aluguel.map(aluguel => (
                <tr key={aluguel.aluguelVeiculoId}>
                  <tr>
                    <th>ID</th>
                    <td>{aluguel.aluguelVeiculoId}</td>
                  </tr>
                  <tr>
                    <th>Id Cliente</th>
                    <td>{aluguel.clienteId}</td>
                  </tr>
                  <tr>
                    <th>Id Veículo</th>
                    <td>{aluguel.veiculoId}</td>
                  </tr>
                  <tr>
                    <th>Id Empresa</th>
                    <td>{aluguel.empresaId}</td>
                  </tr>
                  <tr>
                    <th>Valor</th>
                    <td>{aluguel.aluguelVeiculoValor}</td>
                  </tr>
                  <tr>
                    <th>Observação</th>
                    <td>{aluguel.aluguelVeiculoObs}</td>
                  </tr>
                  <tr>
                    <th>Id Finança</th>
                    <td>{aluguel.financaId}</td>
                  </tr>
                  <tr>
                    <th>Data do Aluguel</th>
                    <td>{aluguel.aluguelVeiculoData}</td>
                  </tr>
                  <tr>
                    <th>Data de Devolução do Aluguel</th>
                    <td>{aluguel.aluguelVeiculoDataDevolucao}</td>
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
