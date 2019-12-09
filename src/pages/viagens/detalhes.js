import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class ViagemDetalhes extends Component {
  state = {
    viagem: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/viagem/${id}`);

    this.setState({ viagem: response.data });
  }

  render() {
    return (
      <div>
        <div className="componentes">
          <Header />
          <Accordion />
        </div>
        {/* <div className="navegar"></div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="/main">
            Página Inicial
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            Viagens
          </BreadcrumbItem>
        </Breadcrumb> */}
        <section className="content table-responsive col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered">
            <tbody>
              {this.state.viagem.map(viagem => (
                <tr key={viagem.viagemId}>
                  <tr>
                    <th>Id Viagem</th>
                    <td>{viagem.viagemId}</td>
                  </tr>
                  <tr>
                    <th>Nome do Motorista</th>
                    <td>{viagem.motoristaNome}</td>
                  </tr>
                  <tr>
                    <th>Placa do Veículo</th>
                    <td>{viagem.veiculoPlaca}</td>
                  </tr>
                  <tr>
                    <th>Endereço de Viagem</th>
                    <td>{viagem.viagemEndereco}</td>
                  </tr>
                  <tr>
                    <th>Observação da Viagem</th>
                    <td>{viagem.viagemObs}</td>
                  </tr>
                  <tr>
                    <th>Data de Inicio da Viagem</th>
                    <td>{viagem.dataInicio}</td>
                  </tr>
                  <tr>
                    <th>Data de Encerramento da Viagem</th>
                    <td>{viagem.dataEncerramento}</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <th>Viagem Situação</th>
                    <td>{viagem.viagemSituacao}</td>
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
