import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class ManutencaoNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      veiculoId: "",
      manutencaoRevisao: "",
      tecnicoId: "",
      manutencaoDescricaoPeca: "",
      manutencaoObs: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      console.log(this.state);
      api.post("/manutencao", this.state).then(res => console.log(res.data));

      this.props.history.push("/manutencao");

      window.location.reload();
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      veiculoId,
      manutencaoRevisao,
      tecnicoId,
      manutencaoDescricaoPeca,
      manutencaoObs
    } = this.state;
    return (
      <Form id="formManutencao" onSubmit={this.onSubmit}>
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
          <Label for="Revisão para Manutenção">Revisão para Manutenção</Label>
          <Input
            type="text"
            name="manutencaoRevisao"
            placeholder="Revisão para Manutenção"
            value={manutencaoRevisao}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Id Técnico">Id Técnico</Label>
          <Input
            type="text"
            name="tecnicoId"
            placeholder="Id Técnico"
            value={tecnicoId}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Descrição da Peça">Descrição da Peça</Label>
          <Input
            type="text"
            name="manutencaoDescricaoPeca"
            placeholder="Descrição da Peça"
            value={manutencaoDescricaoPeca}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Observação">Observação</Label>
          <Input
            type="text"
            name="manutencaoObs"
            placeholder="Observação"
            value={manutencaoObs}
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
