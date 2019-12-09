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

export default class ViagemAlterar extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/viagem/${id}`);
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

    api.put("/viagem/" + this.props.match.params.id, obj).then(res => {
      this.props.history.push("/viagens");

      alert(`Viagem alterada com sucesso`);
      window.location.reload();
    });
  }

  render() {
    const {
      motoristaNome,
      veiculoPlaca,
      viagemEndereco,
      viagemObs,
      dataInicio,
      dataEncerramento,
      viagemSituacao
    } = this.state;
    return (
      <div>
        <div id="navegar">
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/main">
              Página Inicial
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              Viagens
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Form id="formViagens" onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="Nome do Motorista">Nome do Motorista</Label>
            <Input
              type="text"
              name="motoristaNome"
              placeholder="Nome do Motorista"
              value={motoristaNome}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Placa do Veículo">Placa do Veículo</Label>
            <Input
              type="text"
              name="veiculoPlaca"
              placeholder="Placa do Veículo"
              value={veiculoPlaca}
              onChange={this.changeHandler}
            />
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
              <Label for="Data de Inicio da Viagem">
                Data de Inicio da Viagem
              </Label>
              <Input
                type="text"
                name="dataInicio"
                placeholder="Data de Inicio da Viagem"
                value={dataInicio}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Data de Encerramento da Viagem">
                Data de Encerramento da Viagem
              </Label>
              <Input
                type="text"
                name="dataEncerramento"
                placeholder="Data de Encerramento da Viagem"
                value={dataEncerramento}
                onChange={this.changeHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="Viagem Situação">Viagem Situação</Label>
              <Input
                type="text"
                name="viagemSituacao"
                placeholder="Viagem Situação"
                value={viagemSituacao}
                onChange={this.changeHandler}
              />
            </FormGroup>
          </FormGroup>
          <Button type="submit" color="warning">
            Salvar
          </Button>{" "}
        </Form>
      </div>
    );
  }
}
