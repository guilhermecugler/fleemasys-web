import React, { Component } from "react";
import api from "../../services/api"; //Importando api do backend
import { Table, Button, Breadcrumb, BreadcrumbItem } from "reactstrap"; //Importando componentes do reactstrap
import Header from "../../components/Header";
import Accordion from "../../components/Accordion";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default class EmbarqueDesembarque extends Component {
  constructor(props) {
    super(props);

    this.state = {
      embarquedesembarque: []
    };
  }

  componentDidMount() {
    this.loadEmbarqueDesembarque();
  }

  loadEmbarqueDesembarque = async () => {
    const response = await api.get("/embarquedesembarque");

    this.setState({ embarquedesembarque: response.data });
  };

  deleteEmbarqueDesembarque() {
    try {
      console.log(this.embarquedesembarqueid);
      api.delete(`/embarquedesembarque/${this.embarquedesembarqueid}`);
    } catch (error) {
      console.log(error);
    }
    window.location.reload();
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
                Embarque e Desembarque
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Link to="/embarquedesembarque/novo">
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
                <th>Motorista</th>
                <th>Veículo</th>
                <th>Inspeção</th>
                <th>Observação</th>
                <th>Data de Entrada</th>
                <th>Data de Saída</th>
                <th colSpan="2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.embarquedesembarque.map(embarquedesembarque => (
                <tr key={embarquedesembarque.edId}>
                  <td>{embarquedesembarque.edId}</td>
                  <td>{embarquedesembarque.motoristaNome}</td>
                  <td>{embarquedesembarque.veiculoPlaca}</td>
                  <td>{embarquedesembarque.edInspecao}</td>
                  <td>{embarquedesembarque.edObs}</td>
                  <td>{embarquedesembarque.ebDataEntrada}</td>
                  <td>{embarquedesembarque.edDataSaida}</td>
                  <td align="center">
                    <Link
                      to={`/embarquedesembarque/${embarquedesembarque.edId}`}
                    >
                      <Button
                        color="primary"
                        data-toggle-tooltip="tooltip"
                        data-placement="bottom"
                        title="AZUL"
                      >
                        Detalhes
                      </Button>
                    </Link>
                    <Link
                      to={`/embarquedesembarque/alterar/${embarquedesembarque.edId}`}
                    >
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
                      embarquedesembarqueid={embarquedesembarque.edId}
                      onClick={this.deleteEmbarqueDesembarque}
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
