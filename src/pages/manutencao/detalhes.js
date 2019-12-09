import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

export default class ManutencaoDetalhes extends Component {
  state = {
    manutencao: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/manutencao/${id}`);

    this.setState({ manutencao: response.data });
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
              {this.state.manutencao.map(manutencao => (
                <tr key={manutencao.manutencaoId}>
                  <tr>
                    <th>ID</th>
                    <td>{manutencao.manutencaoId}</td>
                  </tr>
                  <tr>
                    <th>Id Veículo</th>
                    <td>{manutencao.veiculoId}</td>
                  </tr>
                  <tr>
                    <th>Revisão para Manutenção</th>
                    <td>{manutencao.manutencaoRevisao}</td>
                  </tr>
                  <tr>
                    <th>Id Técnico</th>
                    <td>{manutencao.tecnicoId}</td>
                  </tr>
                  <tr>
                    <th>Descrição da Peça</th>
                    <td>{manutencao.manutencaoDescricaoPeca}</td>
                  </tr>
                  <tr>
                    <th>Observação</th>
                    <td>{manutencao.manutencaoObs}</td>
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
