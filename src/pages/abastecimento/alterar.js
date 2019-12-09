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

export default class AbastecimentoAlterar extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/abastecimento/${id}`);
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
      .put("/abastecimento/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/abastecimento");
    window.location.reload();
  }

  render() {
    const {
      abastecimentoLitragem,
      abastecimentoValor,
      abastecimentoObs,
      veiculoId,
      motoristaId
    } = this.state;
    return (
      <div>
        <div id="navegar">
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/main">
              Página Inicial
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              Abastecimento
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
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
          <Button type="submit" color="warning">
            Salvar
          </Button>{" "}
        </Form>
      </div>
    );
  }
}
