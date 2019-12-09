import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Financas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      financas: []
    };
  }

  componentDidMount() {
    this.loadFinancas();
  }

  loadFinancas = async () => {
    const response = await api.get("/financas");

    this.setState({ financas: response.data });
  };

  deleteFinanca() {
    try {
      console.log(this.financaid);
      api.delete(`/financas/${this.financaid}`);
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
                Finanças
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/financas/novo">
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
                <th>Tipo</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.financas.map(financa => (
                <tr key={financa.financaId}>
                  <td>{financa.financaId}</td>
                  <td>{financa.financaTitular}</td>
                  <td>{financa.financaValor}</td>
                  <td>{financa.financaReferencia}</td>
                  <td>{financa.TipoFinanca}</td>
                  <td align="center">
                    <Link to={`/financas/${financa.financaId}`}>
                      <Button
                        color="primary"
                        data-toggle-tooltip="tooltip"
                        data-placement="bottom"
                        title="AZUL"
                      >
                        Detalhes
                      </Button>
                    </Link>
                    <Link to={`/financas/alterar/${financa.financaId}`}>
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
                      financaid={financa.financaId}
                      onClick={this.deleteFinanca}
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
