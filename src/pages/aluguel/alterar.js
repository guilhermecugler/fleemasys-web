import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class AluguelAlterar extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/aluguel/${id}`);
      this.setState(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = this.state;

    api.put("/aluguel/" + this.props.match.params.id, obj).then(res => {
      this.props.history.push("/aluguel");

      alert(`Alterado com sucesso`);
      window.location.reload();
    });
  }

  render() {
    const {
      clienteNMFantasia,
      veiculoPlaca,
      empresaId,
      aluguelVeiculoValor,
      aluguelVeiculoObs,
      financaId,
      aluguelVeiculoData,
      aluguelVeiculoDataDevolucao
    } = this.state;
    return (
      <div>
        <div id="navegar">
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/main">
              Página Inicial
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              Aluguel
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Form id="formAluguel" onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="Cliente">Cliente</Label>
            <Input
              type="text"
              name="clienteNMFantasia"
              placeholder="Cliente"
              value={clienteNMFantasia}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Veículo">Placa do Veículo</Label>
            <Input
              type="text"
              name="veiculoPlaca"
              placeholder="Veículo"
              value={veiculoPlaca}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Valor">Valor</Label>
            <Input
              type="text"
              name="aluguelVeiculoValor"
              placeholder="Valor"
              value={aluguelVeiculoValor}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Observação">Observação</Label>
            <Input
              type="text"
              name="aluguelVeiculoObs"
              placeholder="Observação"
              value={aluguelVeiculoObs}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Data do Aluguel">Data do Aluguel</Label>
            <Input
              type="text"
              name="aluguelVeiculoData"
              placeholder="Data do Aluguel"
              value={aluguelVeiculoData}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Data de Devolução do Aluguel">
              Data de Devolução do Aluguel
            </Label>
            <Input
              type="text"
              name="aluguelVeiculoDataDevolucao"
              placeholder="Data de Devolução do Aluguel"
              value={aluguelVeiculoDataDevolucao}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <Button type="submit" color="warning">
            Salvar
          </Button>{" "}
        </Form>
      </div>
    );
  }
}
