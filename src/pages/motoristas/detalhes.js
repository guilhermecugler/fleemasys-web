import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

export default class MotoristaDetalhes extends Component {
  state = {
    motorista: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/motoristas/${id}`);

    this.setState({ motorista: response.data });
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
            Motoristas
          </BreadcrumbItem>
        </Breadcrumb> */}
        <section className="content table-responsive col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered">
            <tbody>
              {this.state.motorista.map(motorista => (
                <tr key={motorista.motoristaId}>
                  <tr>
                    <th>ID</th>
                    <td>{motorista.motoristaId}</td>
                  </tr>
                  <tr>
                    <th>Nome</th>
                    <td>{motorista.motoristaNome}</td>
                  </tr>
                  <tr>
                    <th>CPF</th>
                    <td>{motorista.motoristaCPF}</td>
                  </tr>
                  <tr>
                    <th>RG</th>
                    <td>{motorista.motoristaRG}</td>
                  </tr>
                  <tr>
                    <th>CNH</th>
                    <td>{motorista.motoristaCNH}</td>
                  </tr>
                  <tr>
                    <th>Exame Médico</th>
                    <td>{motorista.motoristaExameMedico}</td>
                  </tr>
                  <tr>
                    <th>Data Nascimento</th>
                    <td>{motorista.motoristaDataNascimento}</td>
                  </tr>
                  <tr>
                    <th>Tel Residencial</th>
                    <td>{motorista.motoristaTelResidencial}</td>
                  </tr>
                  <tr>
                    <th>Celular</th>
                    <td>{motorista.motoristaTelCelular}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{motorista.motoristaEmail}</td>
                  </tr>
                  <tr>
                    <th>Cep</th>
                    <td>{motorista.motoristaCep}</td>
                  </tr>
                  <tr>
                    <th>Logradouro</th>
                    <td>{motorista.motoristaLogradouro}</td>
                  </tr>
                  <tr>
                    <th>Numero</th>
                    <td>{motorista.motoristaNumero}</td>
                  </tr>
                  <tr>
                    <th>Complemento</th>
                    <td>{motorista.motoristaComplemento}</td>
                  </tr>
                  <tr>
                    <th>Bairro</th>
                    <td>{motorista.motoristaBairro}</td>
                  </tr>
                  <tr>
                    <th>Cidade</th>
                    <td>{motorista.motoristaCidade}</td>
                  </tr>
                  <tr>
                    <th>UF</th>
                    <td>{motorista.motoristaUF}</td>
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
