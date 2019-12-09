import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

export default class TecnicoDetalhes extends Component {
  state = {
    tecnico: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/tecnico/${id}`);

    this.setState({ tecnico: response.data });
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
              {this.state.tecnico.map(tecnico => (
                <tr key={tecnico.manutetecnicoId}>
                  <tr>
                    <th>ID</th>
                    <td>{tecnico.manutetecnicoId}</td>
                  </tr>
                  <tr>
                    <th>Nome</th>
                    <td>{tecnico.tecnicoNome}</td>
                  </tr>
                  <tr>
                    <th>CPF</th>
                    <td>{tecnico.tecnicoCPF}</td>
                  </tr>
                  <tr>
                    <th>Data de Nascimento</th>
                    <td>{tecnico.tecnicoDataNascimento}</td>
                  </tr>
                  <tr>
                    <th>Telefone Residencial</th>
                    <td>{tecnico.tecnicoTelResidencial}</td>
                  </tr>
                  <tr>
                    <th>Telefone Celular</th>
                    <td>{tecnico.tecnicoTelCelular}</td>
                  </tr>
                  <tr>
                    <th>CEP</th>
                    <td>{tecnico.tecnicoCep}</td>
                  </tr>
                  <tr>
                    <th>Logradouro</th>
                    <td>{tecnico.tecnicoLogradouro}</td>
                  </tr>
                  <tr>
                    <th>Número</th>
                    <td>{tecnico.tecnicoNumero}</td>
                  </tr>
                  <tr>
                    <th>Complemento</th>
                    <td>{tecnico.tecnicoComplemento}</td>
                  </tr>
                  <tr>
                    <th>Bairro</th>
                    <td>{tecnico.tecnicoBairro}</td>
                  </tr>
                  <tr>
                    <th>Cidade</th>
                    <td>{tecnico.tecnicoCidade}</td>
                  </tr>
                  <tr>
                    <th>UF</th>
                    <td>{tecnico.tecnicoUF}</td>
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
