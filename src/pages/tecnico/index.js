import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Tecnico extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tecnico: []
    };
  }

  componentDidMount() {
    this.loadTecnico();
  }

  loadTecnico = async () => {
    const response = await api.get("/tecnico");

    this.setState({ tecnico: response.data });
  };

  deleteTecnico() {
    if (window.confirm("Deseja mesmo excluir?") == true) {
      api.delete(`/tecnico/${this.tecnicoid}`).then(res => {
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
                Técnico
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/tecnico/novo">
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
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone Celular</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tecnico.map(tecnico => (
                <tr key={tecnico.manutetecnicoId}>
                  <td>{tecnico.tecnicoId}</td>
                  <td>{tecnico.tecnicoNome}</td>
                  <td>{tecnico.tecnicoCPF}</td>
                  <td>{tecnico.tecnicoTelCelular}</td>
                  <td align="center">
                    <Link to={`/tecnico/${tecnico.tecnicoId}`}>
                      <Button
                        color="primary"
                        data-toggle-tooltip="tooltip"
                        data-placement="bottom"
                        title="AZUL"
                      >
                        Detalhes
                      </Button>
                    </Link>
                    <Link to={`/tecnico/alterar/${tecnico.tecnicoId}`}>
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
                      tecnicoid={tecnico.tecnicoId}
                      onClick={this.deleteTecnico}
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
