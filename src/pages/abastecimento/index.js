import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Abastecimento extends Component {
  constructor(props) {
    super(props);

    this.state = {
      abastecimento: []
    };
  }

  componentDidMount() {
    this.loadAbastecimento();
  }

  loadAbastecimento = async () => {
    const response = await api.get("/abastecimento");

    this.setState({ abastecimento: response.data });
  };

  deleteAbastecimento() {
    try {
      console.log(this.abastecimentoId);
      api.delete(`/abastecimento/${this.abastecimentoid}`);
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
                Abastecimento
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/abastecimento/novo">
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
                <th>Litragem</th>
                <th>Valor</th>
                <th>Observação</th>
                <th>Id Veículo</th>
                <th>Id Motorista</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.abastecimento.map(abastecimento => (
                <tr key={abastecimento.abastecimentoId}>
                  <td>{abastecimento.abastecimentoId}</td>
                  <td>{abastecimento.abastecimentoLitragem}</td>
                  <td>{abastecimento.abastecimentoValor}</td>
                  <td>{abastecimento.abastecimentoObs}</td>
                  <td>{abastecimento.veiculoId}</td>
                  <td>{abastecimento.motoristaId}</td>
                  <td align="center">
                    <Link
                      to={`/abastecimento/${abastecimento.abastecimentoId}`}
                    >
                      <Button
                        color="primary"
                        data-toggle-tooltip="tooltip"
                        data-placement="bottom"
                        title="AZUL"
                      >
                        Detalhes
                      </Button>
                    </Link>
                    <Link
                      to={`/abastecimento/alterar/${abastecimento.abastecimentoId}`}
                    >
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
                      abastecimentoid={abastecimento.abastecimentoId}
                      onClick={this.deleteAbastecimento}
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
