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

export default class EmbarqueDesembarqueAlterar extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/embarquedesembarque/${id}`);
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
      .put("/embarquedesembarque/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/embarquedesembarque");
    window.location.reload();
  }

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
      <div>
        <div id="navegar">
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/main">
              Página Inicial
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              Embarque e Desembarque
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
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
          <Button type="submit" color="warning">
            Salvar
          </Button>{" "}
        </Form>
      </div>
    );
  }
}
