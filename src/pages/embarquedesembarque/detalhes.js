import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

export default class EmbarqueDesembarqueDetalhes extends Component {
  state = {
    embarquedesembarque: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/embarquedesembarque/${id}`);

    this.setState({ embarquedesembarque: response.data });
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
              {this.state.embarquedesembarque.map(embarquedesembarque => (
                <tr key={embarquedesembarque.edId}>
                  <tr>
                    <th>ID</th>
                    <td>{embarquedesembarque.edId}</td>
                  </tr>
                  <tr>
                    <th>Id Motorista</th>
                    <td>{embarquedesembarque.motoristaId}</td>
                  </tr>
                  <tr>
                    <th>Id Veículo</th>
                    <td>{embarquedesembarque.veiculoId}</td>
                  </tr>
                  <tr>
                    <th>Inspeção</th>
                    <td>{embarquedesembarque.edInspecao}</td>
                  </tr>
                  <tr>
                    <th>Observação</th>
                    <td>{embarquedesembarque.edObs}</td>
                  </tr>
                  <tr>
                    <th>Data de Entrada</th>
                    <td>{embarquedesembarque.ebDataEntrada}</td>
                  </tr>
                  <tr>
                    <th>Data de Saída</th>
                    <td>{embarquedesembarque.edDataSaida}</td>
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
