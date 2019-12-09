import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Viagens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viagens: []
    };
  }

  componentDidMount() {
    this.loadViagens();
  }

  loadViagens = async () => {
    const response = await api.get("/viagem");

    this.setState({ viagens: response.data });
  };

  deleteViagem() {
    if (window.confirm("Deseja mesmo excluir?") == true) {
      api.delete(`/viagem/${this.viagemid}`).then(res => {
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
                Viagens
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/viagens/novo">
            <Button color="success" data-placement="bottom" title="VERDE">
              Novo
            </Button>
          </Link>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome Motorista</th>
                <th>Placa Veículo</th>
                <th>Endereço Viagem</th>
                <th>Observação Viagem</th>
                <th>Data Inicio Viagem</th>
                <th>Data Fim Viagem</th>
                <th>Viagem Situação</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.viagens.map(Viagem => (
                <tr key={Viagem.viagemId}>
                  <td>{Viagem.viagemId}</td>
                  <td>{Viagem.motoristaNome}</td>
                  <td>{Viagem.veiculoPlaca}</td>
                  <td>{Viagem.viagemEndereco}</td>
                  <td>{Viagem.viagemObs}</td>
                  <td>{Viagem.dataInicio}</td>
                  <td>{Viagem.dataEncerramento}</td>
                  <td>{Viagem.viagemSituacao}</td>
                  <td align="center">
                    <Link to={`/viagens/${Viagem.viagemId}`}>
                      <Button
                        color="primary"
                        data-placement="bottom"
                        title="AZUL"
                      >
                        Detalhes
                      </Button>
                    </Link>
                    <Link to={`/viagens/alterar/${Viagem.viagemId}`}>
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
                      viagemid={Viagem.viagemId}
                      onClick={this.deleteViagem}
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
