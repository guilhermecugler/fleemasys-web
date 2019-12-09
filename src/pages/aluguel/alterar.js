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

    api
      .put("/aluguel/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/aluguel");
    window.location.reload();
  }

  render() {
    const {
      clienteId,
      veiculoId,
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
            <Label for="Id Cliente">Id Cliente</Label>
            <Input
              type="text"
              name="clienteId"
              placeholder="Id Cliente"
              value={clienteId}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Id Veículo">Id Veículo</Label>
            <Input
              type="text"
              name="veiculoId"
              placeholder="Id Veículo"
              value={veiculoId}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Id Empresa">Id Empresa</Label>
            <Input
              type="text"
              name="empresaId"
              placeholder="Id Empresa"
              value={empresaId}
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
            <Label for="Id Finança">Id Finança</Label>
            <Input
              type="text"
              name="financaId"
              placeholder="Id Finança"
              value={financaId}
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
            <Label for=">Data de Devolução do Aluguel">
              Data de Devolução do Aluguel
            </Label>
            <Input
              type="text"
              name="aluguelVeiculoDataDevolucao"
              placeholder=">Data de Devolução do Aluguel"
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
