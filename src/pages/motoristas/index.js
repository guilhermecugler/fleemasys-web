import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Motoristas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      motoristas: []
    };
  }

  componentDidMount() {
    this.loadMotoristas();
  }

  loadMotoristas = async () => {
    const response = await api.get("/motoristas");

    this.setState({ motoristas: response.data });
  };

  deleteMotorista() {
    if (window.confirm("Deseja mesmo excluir?") == true) {
      api.delete(`/motoristas/${this.motoristaid}`).then(res => {
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
                Motoristas
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/motoristas/novo">
            <Button color="success" data-placement="bottom" title="VERDE">
              Novo
            </Button>
          </Link>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>CNH</th>
                <th>Celular</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.motoristas.map(motorista => (
                <tr key={motorista.motoristaId}>
                  <td>{motorista.motoristaId}</td>
                  <td>{motorista.motoristaNome}</td>
                  <td>{motorista.motoristaCPF}</td>
                  <td>{motorista.motoristaCNH}</td>
                  <td>{motorista.motoristaTelCelular}</td>
                  <td align="center">
                    <Link to={`/motoristas/${motorista.motoristaId}`}>
                      <Button
                        color="primary"
                        data-placement="bottom"
                        title="AZUL"
                      >
                        Detalhes
                      </Button>
                    </Link>
                    <Link to={`/motoristas/alterar/${motorista.motoristaId}`}>
                      <Button
                        color="warning"
                        data-placement="bottom"
                        title="AMARELO"
                      >
                        Alterar
                      </Button>
                    </Link>
                    <Button
                      color="danger"
                      data-placement="bottom"
                      title="VERMELHO"
                      motoristaid={motorista.motoristaId}
                      onClick={this.deleteMotorista}
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
