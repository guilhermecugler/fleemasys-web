import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class EmbarqueDesembarqueNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      motoristaId: "",
      veiculoId: "",
      edInspecao: "",
      edObs: "",
      ebDataEntrada: "",
      edDataSaida: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      console.log(this.state);
      api
        .post("/embarquedesembarque", this.state)
        .then(res => console.log(res.data));

      this.props.history.push("/embarquedesembarque");

      window.location.reload();
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
    return (
      <Form id="formEmbarqueDesembarque" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Id Motorista">Id Motorista</Label>
          <Input
            type="text"
            name="motoristaId"
            placeholder="Id Motorista"
            value={motoristaId}
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
