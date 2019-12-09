import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class MultaNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multaTitular: "",
      multaValor: "",
      multaReferencia: "",
      financaId: "",
      motoristaId: "",
      veiculoId: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      console.log(this.state);
      api.post("/multas", this.state).then(res => console.log(res.data));

      this.props.history.push("/multas");

      window.location.reload();
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      multaTitular,
      multaValor,
      multaReferencia,
      financaId,
      motoristaId,
      veiculoId
    } = this.state;
    return (
      <Form id="formMultas" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Titular">Titular</Label>
          <Input
            type="text"
            name="multaTitular"
            placeholder="Titular"
            value={multaTitular}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Valor">Valor</Label>
          <Input
            type="text"
            name="multaValor"
            placeholder="Valor"
            value={multaValor}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Referência">Referência</Label>
          <Input
            type="text"
            name="multaReferencia"
            placeholder="Referência"
            value={multaReferencia}
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
