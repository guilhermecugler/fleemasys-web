import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

export default class EmpresaDetalhes extends Component {
  state = {
    empresa: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/empresa/${id}`);

    this.setState({ empresa: response.data });
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
            Usuários
          </BreadcrumbItem>
        </Breadcrumb> */}
        <section className="content table-responsive col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered">
            <tbody>
              {this.state.empresa.map(empresa => (
                <tr key={empresa.empresaId}>
                  <tr>
                    <th>ID</th>
                    <td>{empresa.empresaId}</td>
                  </tr>
                  <tr>
                    <th>Razão Social</th>
                    <td>{empresa.empresaRazaoSocial}</td>
                  </tr>
                  <tr>
                    <th>Nome Fantasia</th>
                    <td>{empresa.empresaNomeFantasia}</td>
                  </tr>
                  <tr>
                    <th>CNPJ</th>
                    <td>{empresa.empresaCNPJ}</td>
                  </tr>
                  <tr>
                    <th>Telefone</th>
                    <td>{empresa.empresaTelefone}</td>
                  </tr>
                  <tr>
                    <th>Telefone 2</th>
                    <td>{empresa.empresaTelefone2}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{empresa.empresaEmail}</td>
                  </tr>
                  <tr>
                    <th>CEP</th>
                    <td>{empresa.empresaCep}</td>
                  </tr>
                  <tr>
                    <th>Logradouro</th>
                    <td>{empresa.empresaLogradouro}</td>
                  </tr>
                  <tr>
                    <th>Número</th>
                    <td>{empresa.empresaNumero}</td>
                  </tr>
                  <tr>
                    <th>Complemento</th>
                    <td>{empresa.empresaComplemento}</td>
                  </tr>
                  <tr>
                    <th>Bairro</th>
                    <td>{empresa.empresaBairro}</td>
                  </tr>
                  <tr>
                    <th>Cidade</th>
                    <td>{empresa.empresaCidade}</td>
                  </tr>
                  <tr>
                    <th>UF</th>
                    <td>{empresa.empresaUF}</td>
                  </tr>
                  <tr>
                    <th>Situação</th>
                    <td>{empresa.empresaSituacao}</td>
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
