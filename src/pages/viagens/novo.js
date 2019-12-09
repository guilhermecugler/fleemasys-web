import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class ViagemNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viagens: [],
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
      viagens: { ...this.state.viagens, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      api
        .post("/viagem", this.state.viagens)
        .then(res => {
          this.props.history.push("/viagens");

          window.location.reload();
        })
        .catch(res => {
          alert("Erro: Viagem não cadastrada!");
        });
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      veiculoPlaca,
      viagemEndereco,
      viagemObs,
      viagemSituacao
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
      <Form id="formViagens" onSubmit={this.onSubmit}>
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
          <Label for="Viagem Endereço">Endereço de Viagem</Label>
          <Input
            type="text"
            name="viagemEndereco"
            placeholder="Viagem Endereço"
            value={viagemEndereco}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Observação da Viagem">Observação da Viagem</Label>
          <Input
            type="text"
            name="viagemObs"
            placeholder="Observação da Viagem"
            value={viagemObs}
            onChange={this.changeHandler}
          />
          <FormGroup>
            <Label for="Viagem Situação">Situação</Label>
            <Input
              type="select"
              name="viagemSituacao"
              onChange={this.changeHandler}
              value={viagemSituacao}
            >
              <option value="Pendente">Pendente</option>
              <option value="Em andamento">Em andamento</option>
              <option value="Finalizada">Finalizada</option>
            </Input>
          </FormGroup>
        </FormGroup>
        <Button
          color="warning"
          data-toggle-tooltip="tooltip"
          data-placement="bottom"
          title="AMARELO"
        >
          Adicionar
        </Button>{" "}
      </Form>
    );
  }
}
