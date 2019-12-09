import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class Usuarios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuarios: []
    };
  }

  componentDidMount() {
    this.loadUsuarios();
  }

  loadUsuarios = async () => {
    const response = await api.get("/usuarios");

    this.setState({ usuarios: response.data });
  };

  deleteUsuario() {
    if (window.confirm("Deseja mesmo excluir?") == true) {
      api.delete(`/usuarios/${this.usuarioid}`).then(res => {
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
                Usuários
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/usuarios/novo">
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
                <th>Login</th>
                <th>Tipo</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.usuarios.map(usuario => (
                <tr key={usuario.usuarioId}>
                  <td>{usuario.usuarioId}</td>
                  <td>{usuario.usuarioNome}</td>
                  <td>{usuario.usuarioLogin}</td>
                  <td>{usuario.usuarioTipo}</td>
                  <td align="center">
                    <Link to={`/usuarios/${usuario.usuarioId}`}>
                      <Button
                        color="primary"
                        data-toggle-tooltip="tooltip"
                        data-placement="bottom"
                        title="AZUL"
                      >
                        Detalhes
                      </Button>
                    </Link>
                    <Link to={`/usuarios/alterar/${usuario.usuarioId}`}>
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
                      usuarioid={usuario.usuarioId}
                      onClick={this.deleteUsuario}
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
