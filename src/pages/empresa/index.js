import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Empresa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empresas: []
    };
  }

  componentDidMount() {
    this.loadEmpresas();
  }

  loadEmpresas = async () => {
    const response = await api.get("/empresas");

    this.setState({ empresas: response.data });
  };

  deleteEmpresa() {
    if (window.confirm("Deseja mesmo excluir?") == true) {
      api.delete(`/empresa/${this.empresaid}`).then(res => {
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
                Empresas
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/empresa/novo">
            <Button color="success" data-placement="bottom" title="VERDE">
              Novo
            </Button>
          </Link>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Razão Social</th>
                <th>Nome Fantasia</th>
                <th>CNPJ</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.empresas.map(empresa => (
                <tr key={empresa.empresaId}>
                  <td>{empresa.empresaId}</td>
                  <td>{empresa.empresaRazaoSocial}</td>
                  <td>{empresa.empresaNomeFantasia}</td>
                  <td>{empresa.empresaCNPJ}</td>
                  <td align="center">
                    <Link to={`/empresa/${empresa.empresaId}`}>
                      <Button
                        color="primary"
                        data-placement="bottom"
                        title="AZUL"
                      >
                        Detalhes
                      </Button>
                    </Link>
                    <Link to={`/empresa/alterar/${empresa.empresaId}`}>
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
                      empresaid={empresa.empresaId}
                      onClick={this.deleteEmpresa}
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
