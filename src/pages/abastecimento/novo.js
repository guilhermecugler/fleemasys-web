import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class AbastecimentoNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      abastecimentoLitragem: "",
      abastecimentoValor: "",
      abastecimentoObs: "",
      veiculoId: "",
      motoristaId: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      api
        .post("/abastecimento", this.state)
        .then(res => {
          this.props.history.push("/abastecimento");

          window.location.reload();
        })
        .catch(res => {
          alert("Erro ao cadastrar");
        });
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      abastecimentoLitragem,
      abastecimentoValor,
      abastecimentoObs,
      veiculoId,
      motoristaId
    } = this.state;
    return (
      <Form id="formAbastecimento" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Litragem">Litragem</Label>
          <Input
            type="text"
            name="abastecimentoLitragem"
            placeholder="Litragem"
            value={abastecimentoLitragem}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Valor">Valor</Label>
          <Input
            type="text"
            name="abastecimentoValor"
            placeholder="Valor"
            value={abastecimentoValor}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Observação">Observação</Label>
          <Input
            type="text"
            name="abastecimentoObs"
            placeholder="Observação"
            value={abastecimentoObs}
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
          <Label for="Id Motorista">Id Motorista</Label>
          <Input
            type="text"
            name="motoristaId"
            placeholder="Id Motorista"
            value={motoristaId}
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
