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

export default class ManutencaoAlterar extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/manutencao/${id}`);
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
      .put("/manutencao/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/manutencao");
    window.location.reload();
  }

  render() {
    const {
      veiculoId,
      manutencaoRevisao,
      tecnicoId,
      manutencaoDescricaoPeca,
      manutencaoObs
    } = this.state;
    return (
      <div>
        <div id="navegar">
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/main">
              Página Inicial
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              Manutenção
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
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
          <Button type="submit" color="warning">
            Salvar
          </Button>{" "}
        </Form>
      </div>
    );
  }
}
