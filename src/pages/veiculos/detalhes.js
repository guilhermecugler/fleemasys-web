import React, { Component } from "react";
import api from "../../services/api";
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from 'react-router-dom';

export default class VeiculoDetalhes extends Component {
  state = {
    veiculo: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/veiculos/${id}`);

    this.setState({ veiculo: response.data });
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
            Veículos
          </BreadcrumbItem>
        </Breadcrumb> */}
        <section className="content table-responsive col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered">
            <tbody>
              {this.state.veiculo.map(veiculo => (
                <tr key={veiculo.veiculoId}>
                  <tr>
                    <th>ID</th>
                    <td>{veiculo.veiculoId}</td>
                  </tr>
                  <tr>
                    <th>Marca</th>
                    <td>{veiculo.veiculoMarca}</td>
                  </tr>
                  <tr>
                    <th>Modelo</th>
                    <td>{veiculo.veiculoModelo}</td>
                  </tr>
                  <tr>
                    <th>Cor</th>
                    <td>{veiculo.veiculoCor}</td>
                  </tr>
                  <tr>
                    <th>Placa</th>
                    <td>{veiculo.veiculoPlaca}</td>
                  </tr>
                  <tr>
                    <th>Chassi</th>
                    <td>{veiculo.veiculoChassi}</td>
                  </tr>
                  <tr>
                    <th>Nº Apolice</th>
                    <td>{veiculo.veiculoApolice}</td>
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
