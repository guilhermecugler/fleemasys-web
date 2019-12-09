import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class EmbarqueDesembarqueNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      embarqued: [],
      motoristas: [],
      veiculos: []
    };
  }

  componentDidMount() {
    this.handleSelectChange();
    this.handleSelectChangeVeiculo();
  }

  handleSelectChange = async () => {
    const response = await api.get("/motoristas");

    this.setState({ motoristas: response.data });
  };

  handleSelectChangeVeiculo = async () => {
    const response = await api.get("/veiculos");

    this.setState({ veiculos: response.data });
  };

  changeHandler = e => {
    this.setState({
      embarqued: { ...this.state.embarqued, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      api
        .post("/embarquedesembarque", this.state.embarqued)
        .then(res => {
          this.props.history.push("/embarquedesembarque");

          window.location.reload();
        })
        .catch(res => {
          alert("Erro: Não cadastrado!");
        });
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      motoristaId,
      veiculoId,
      edInspecao,
      edObs,
      ebDataEntrada,
      edDataSaida
    } = this.state;

    const optionMotoristas = this.state.motoristas.map(motorista => (
      <option
        onChange={this.changeHandler}
        name="motoristaNome"
        key={motorista.motoristaId}
        value={motorista.motoristaNome}
      >
        {motorista.motoristaNome}
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
      <Form id="formEmbarqueDesembarque" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Nome do Motorista">Nome do Motorista</Label>
          <Input
            onChange={this.changeHandler}
            name="motoristaNome"
            value={this.state.motoristas.motoristaNome}
            type="select"
          >
            {optionMotoristas}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="Placa do Veículo">Placa do Veículo</Label>
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
          <Label for="Inspeção">Inspeção</Label>
          <Input
            type="text"
            name="edInspecao"
            placeholder="Inspeção"
            value={edInspecao}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Observação">Observação</Label>
          <Input
            type="text"
            name="edObs"
            placeholder="Observação"
            value={edObs}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Data de Entrada">Data de Entrada</Label>
          <Input
            type="text"
            name="ebDataEntrada"
            placeholder="Data de Entrada"
            value={ebDataEntrada}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Data de Saída">Data de Saída</Label>
          <Input
            type="text"
            name="edDataSaida"
            placeholder="Data de Saída"
            value={edDataSaida}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <Button
          color="warning"
          data-toggle-tooltip="tooltip"
          data-placement="bottom"
          title="AMARELO"
        >
          Adicionar
        </Button>{" "}
        <a href="javascript:window.history.go(-1)" className="btn btn-danger">
          <span className="glyphicon glyphicon-remove"></span> Cancelar
        </a>
      </Form>
    );
  }
}
