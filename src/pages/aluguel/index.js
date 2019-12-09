import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Aluguel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aluguel: []
    };
  }

  componentDidMount() {
    this.loadAluguel();
  }

  loadAluguel = async () => {
    const response = await api.get("/aluguel");

    this.setState({ aluguel: response.data });
  };

  deleteAluguel() {
    if (window.confirm("Deseja mesmo excluir?") == true) {
      api.delete(`/aluguel/${this.aluguelVeiculoId}`).then(res => {
        window.location.reload();
      });
    } else return;
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
                Aluguel
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/aluguel/novo">
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
                <th>Cliente</th>
                <th>Veículo</th>
                <th>Data do Aluguel</th>
                <th>Data de Devolução do Aluguel</th>
                <th>Valor</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.aluguel.map(aluguel => (
                <tr key={aluguel.aluguelVeiculoId}>
                  <td>{aluguel.aluguelVeiculoId}</td>
                  <td>{aluguel.clienteNMFantasia}</td>
                  <td>{aluguel.veiculoPlaca}</td>
                  <td>{aluguel.aluguelVeiculoData}</td>
                  <td>{aluguel.aluguelVeiculoDataDevolucao}</td>
                  <td>{aluguel.aluguelVeiculoValor}</td>
                  <td align="center">
                    <Link to={`/aluguel/${aluguel.aluguelId}`}>
                      <Button
                        color="primary"
                        data-toggle-tooltip="tooltip"
                        data-placement="bottom"
                        title="AZUL"
                      >
                        Detalhes
                      </Button>
                    </Link>
                    <Link to={`/aluguel/alterar/${aluguel.aluguelVeiculoId}`}>
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
                      aluguelVeiculoId={aluguel.aluguelVeiculoId}
                      onClick={this.deleteAluguel}
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
