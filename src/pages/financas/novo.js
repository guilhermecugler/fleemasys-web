import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";

export default class FinancaNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      financaTitular: "",
      financaValor: "",
      financaReferencia: "",
      TipoFinanca: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      console.log(this.state);
      api.post("/financas", this.state).then(res => console.log(res.data));

      this.props.history.push("/financas");

      window.location.reload();
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      financaTitular,
      financaValor,
      financaReferencia,
      TipoFinanca
    } = this.state;
    return (
      <Form id="formFinancas" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Titular">Titular</Label>
          <Input
            type="text"
            name="financaTitular"
            placeholder="Titular"
            value={financaTitular}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Valor">Valor</Label>
          <Input
            type="text"
            name="financaValor"
            placeholder="Valor"
            value={financaValor}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Referência">Referência</Label>
          <Input
            type="text"
            name="financaReferencia"
            placeholder="Referência"
            value={financaReferencia}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="tipo">Tipo</Label>
          <Input
            type="select"
            name="TipoFinanca"
            onChange={this.changeHandler}
            value={TipoFinanca}
          >
            <option>À Receber</option>
            <option>À Pagar</option>
          </Input>
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
