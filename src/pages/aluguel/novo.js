import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";
import MaskedInput from "react-text-mask";

export default class AluguelNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alugueis: [],
      veiculos: [],
      clientes: []
    };
  }

  componentDidMount() {
    this.handleSelectChangeCliente();
    this.handleSelectChangeVeiculo();
  }

  changeHandler = e => {
    this.setState({
      alugueis: { ...this.state.alugueis, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      api
        .post("/aluguel", this.state.alugueis)
        .then(res => {
          this.props.history.push("/aluguel");

          window.location.reload();
        })
        .catch(res => {
          alert("Erro: Aluguel não cadastrada!");
        });
    } catch {
      console.log("erro");
    }
  };

  handleSelectChangeCliente = async () => {
    const response = await api.get("/clientes");

    this.setState({ clientes: response.data });
  };

  handleSelectChangeVeiculo = async () => {
    const response = await api.get("/veiculos");

    this.setState({ veiculos: response.data });
  };

  render() {
    const {
      clienteNMFantasia,
      veiculoPlaca,
      aluguelVeiculoValor,
      aluguelVeiculoObs,
      aluguelVeiculoData,
      aluguelVeiculoDataDevolucao
    } = this.state.alugueis;

    const optionClientes = this.state.clientes.map(cliente => (
      <option
        onChange={this.changeHandler}
        name="clienteNome"
        key={cliente.clienteId}
        value={cliente.clienteNMFantasia}
      >
        {cliente.clienteNMFantasia}
      </option>
    ));

    const optionVeiculo = this.state.veiculos.map(veiculo => (
      <option
        onChange={this.changeHandler}
        name="veiculoPlaca"
        key={veiculo.veiculoId}
        value={veiculo.veiculoPlaca}
      >
        {veiculo.veiculoPlaca}
      </option>
    ));

    return (
      <Form id="formAluguel" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Cliente">Cliente</Label>
          <Input
            onChange={this.changeHandler}
            name="clienteNMFantasia"
            value={this.state.clientes.clienteNMFantasia}
            type="select"
          >
            {optionClientes}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="Id Veículo">Veículo</Label>
          <Input
            onChange={this.changeHandler}
            name="veiculoPlaca"
            value={this.state.veiculos.veiculoPlaca}
            type="select"
          >
            {optionVeiculo}
          </Input>
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
          <MaskedInput
            mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
            name="aluguelVeiculoData"
            className="form-control"
            placeholder="01/01/2020"
            value={aluguelVeiculoData}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Data de Devolução">Data de Devolução</Label>
          <MaskedInput
            mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
            name="aluguelVeiculoDataDevolucao"
            className="form-control"
            placeholder="01/01/2020"
            value={aluguelVeiculoDataDevolucao}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <Button
          color="warning"
          data-toggle-tooltip="tooltip"
          data-placement="bottom"
          title="AMARELO"
        >
          Alugar
        </Button>{" "}
        <a href="javascript:window.history.go(-1)" className="btn btn-danger">
          <span className="glyphicon glyphicon-remove"></span> Cancelar
        </a>
      </Form>
    );
  }
}
