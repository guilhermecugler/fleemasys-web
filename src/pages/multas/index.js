import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Multas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multas: []
    };
  }

  componentDidMount() {
    this.loadMultas();
  }

  loadMultas = async () => {
    const response = await api.get("/multas");

    this.setState({ multas: response.data });
  };

  deleteMulta() {
    try {
      console.log(this.multaid);
      api.delete(`/multas/${this.multaid}`);
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
                Multas
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/multas/novo">
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
                <th>Titular</th>
                <th>Valor</th>
                <th>Referência</th>
                <th>Id Finança</th>
                <th>Id Motorista</th>
                <th>Id Veículo</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.multas.map(multa => (
                <tr key={multa.multaId}>
                  <td>{multa.multaId}</td>
                  <td>{multa.multaTitular}</td>
                  <td>{multa.multaValor}</td>
                  <td>{multa.multaReferencia}</td>
                  <td>{multa.financaId}</td>
                  <td>{multa.motoristaId}</td>
                  <td>{multa.veiculoId}</td>
                  <td align="center">
                    <Link to={`/multas/${multa.multaId}`}>
                      <Button
                        color="primary"
                        data-toggle-tooltip="tooltip"
                        data-placement="bottom"
                        title="AZUL"
                      >
                        Detalhes
                      </Button>
                    </Link>
                    <Link to={`/multas/alterar/${multa.multaId}`}>
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
                      multaid={multa.multaId}
                      onClick={this.deleteMulta}
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
