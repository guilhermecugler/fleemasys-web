import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

export default class UsuarioDetalhes extends Component {
  state = {
    usuario: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/usuarios/${id}`);

    this.setState({ usuario: response.data });
  }

  render() {
    return (
      <div>
        <div className="componentes">
          <Header />
          <Accordion />
        </div>
        {/* <div className="navegar"></div> */}
        {/* <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="/main">
            Página Inicial
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            Usuários
          </BreadcrumbItem>
        </Breadcrumb> */}
        <section className="content table-responsive col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered">
            <tbody>
              {this.state.usuario.map(usuario => (
                <tr key={usuario.usuarioId}>
                  <tr>
                    <th>ID</th>
                    <td>{usuario.usuarioId}</td>
                  </tr>
                  <tr>
                    <th>Nome</th>
                    <td>{usuario.usuarioNome}</td>
                  </tr>
                  <tr>
                    <th>CPF</th>
                    <td>{usuario.usuarioCPF}</td>
                  </tr>
                  <tr>
                    <th>Login</th>
                    <td>{usuario.usuarioLogin}</td>
                  </tr>
                  <tr>
                    <th>Contato</th>
                    <td>{usuario.usuarioContato}</td>
                  </tr>
                  <tr>
                    <th>Tipo</th>
                    <td>{usuario.usuarioTipo}</td>
                  </tr>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}
