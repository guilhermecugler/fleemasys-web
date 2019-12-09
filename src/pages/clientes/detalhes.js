import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

export default class ClienteDetalhes extends Component {
  state = {
    cliente: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/clientes/${id}`);

    this.setState({ cliente: response.data });
  }

  render() {
    return (
      <div>
        <div className="componentes">
          <Header />
          <Accordion />
        </div>
        {/* <div className="navegar"></div>
        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem tag="a" href="/main">
            Página Inicial
          </BreadcrumbItem>
          <BreadcrumbItem active tag="span">
            Clientes
          </BreadcrumbItem>
        </Breadcrumb> */}
        <section className="content table-responsive col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered">
            <tbody>
              {this.state.cliente.map(cliente => (
                <tr key={cliente.clienteId}>
                  <tr>
                    <th>ID</th>
                    <td>{cliente.clienteId}</td>
                  </tr>
                  <tr>
                    <th>Razão Social</th>
                    <td>{cliente.clienteRazaoSocial}</td>
                  </tr>
                  <tr>
                    <th>Nome Fantasia</th>
                    <td>{cliente.clienteNMFantasia}</td>
                  </tr>
                  <tr>
                    <th>CNPJ</th>
                    <td>{cliente.clienteCNPJ}</td>
                  </tr>
                  <tr>
                    <th>Telefone Comercial</th>
                    <td>{cliente.clienteTelComercial}</td>
                  </tr>
                  <tr>
                    <th>Telefone Celular</th>
                    <td>{cliente.clienteTelCelular}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{cliente.clienteEmail}</td>
                  </tr>
                  <tr>
                    <th>CEP</th>
                    <td>{cliente.clienteCep}</td>
                  </tr>
                  <tr>
                    <th>Logradouro</th>
                    <td>{cliente.clienteLogradouro}</td>
                  </tr>
                  <tr>
                    <th>Número</th>
                    <td>{cliente.clienteNumero}</td>
                  </tr>
                  <tr>
                    <th>Complemento</th>
                    <td>{cliente.clienteComplemento}</td>
                  </tr>
                  <tr>
                    <th>Bairro</th>
                    <td>{cliente.clienteBairro}</td>
                  </tr>
                  <tr>
                    <th>Cidade</th>
                    <td>{cliente.clienteCidade}</td>
                  </tr>
                  <tr>
                    <th>UF</th>
                    <td>{cliente.clienteUF}</td>
                  </tr>
                  <tr>
                    <th>Situação</th>
                    <td>{cliente.clienteSituacao}</td>
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
