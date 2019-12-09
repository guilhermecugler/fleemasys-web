import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Manutencao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      manutencao: []
    };
  }

  componentDidMount() {
    this.loadManutencao();
  }

  loadManutencao = async () => {
    const response = await api.get("/manutencao");

    this.setState({ manutencao: response.data });
  };

  deleteManutencao() {
    try {
      console.log(this.manutencaoid);
      api.delete(`/manutencao/${this.manutencaoid}`);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="componentes">
          <Header />
          <Accordion />
        </div>

        <section className="content">
          <div className="navegar">
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem tag="a" href="/main">
                Página Inicial
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">
                Manutenção
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/manutencao/novo">
            <Button
              data-toggle-tooltip="tooltip"
              data-placement="bottom"
              title="VERDE"
              color="success"
            >
              Novo
            </Button>
          </Link>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Id Veículo</th>
                <th>Revisão para Manutenção</th>
                <th>Id Técnico</th>
                <th>Descrição da Peça</th>
                <th>Observação</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.manutencao.map(manutencao => (
                <tr key={manutencao.manutencaoId}>
                  <td>{manutencao.manutencaoId}</td>
                  <td>{manutencao.veiculoId}</td>
                  <td>{manutencao.manutencaoRevisao}</td>
                  <td>{manutencao.tecnicoId}</td>
                  <td>{manutencao.manutencaoDescricaoPeca}</td>
                  <td>{manutencao.manutencaoObs}</td>
                  <td align="center">
                    <Link to={`/manutencao/${manutencao.manutencaoId}`}>
                      <Button
                        color="primary"
                        data-toggle-tooltip="tooltip"
                        data-placement="bottom"
                        title="AZUL"
                      >
                        Detalhes
                      </Button>
                    </Link>
                    <Link to={`/manutencao/alterar/${manutencao.manutencaoId}`}>
                      <Button
                        color="warning"
                        data-toggle-tooltip="tooltip"
                        data-placement="bottom"
                        title="AMARELO"
                      >
                        Alterar
                      </Button>
                    </Link>
                    <Button
                      color="danger"
                      data-toggle-tooltip="tooltip"
                      data-placement="bottom"
                      title="VERMELHO"
                      manutencaoid={manutencao.manutencaoId}
                      onClick={this.deletemanutencao}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </div>
    );
  }
}
