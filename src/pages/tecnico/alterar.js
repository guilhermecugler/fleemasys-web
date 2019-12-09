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
import MaskedInput from "react-text-mask";

export default class TecnicoAlterar extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/tecnico/${id}`);
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

    api.put("/tecnico/" + this.props.match.params.id, obj).then(res => {
      this.props.history.push("/tecnico");

      alert(`Técnico ${this.state.tecnicoNome} alterado com sucesso`);
      window.location.reload();
    });
  }

  render() {
    const {
      tecnicoNome,
      tecnicoCPF,
      tecnicoDataNascimento,
      tecnicoTelResidencial,
      tecnicoTelCelular,
      tecnicoCep,
      tecnicoLogradouro,
      tecnicoNumero,
      tecnicoComplemento,
      tecnicoBairro,
      tecnicoCidade,
      tecnicoUF
    } = this.state;
    return (
      <div>
        <div id="navegar">
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/main">
              Página Inicial
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              Técnico
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Form id="formTecnico" onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="nome">Nome</Label>
            <Input
              type="text"
              name="tecnicoNome"
              placeholder="Nome"
              value={tecnicoNome}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="CPF">CPF</Label>
            <Input
              type="text"
              name="tecnicoCPF"
              placeholder="CPF"
              value={tecnicoCPF}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Data de Nascimento">Data de Nascimento</Label>
            <Input
              type="text"
              name="tecnicoDataNascimento"
              placeholder="Data de Nascimento"
              value={tecnicoDataNascimento}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Telefone Residencial">Telefone Residencial</Label>
            <Input
              type="text"
              name="tecnicoTelResidencial"
              placeholder="Telefone Residencial"
              value={tecnicoTelResidencial}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Telefone Celular">Telefone Celular</Label>
            <Input
              type="text"
              name="tecnicoTelCelular"
              placeholder="Telefone Celular"
              value={tecnicoTelCelular}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="CEP">CEP</Label>
            <Input
              type="text"
              name="tecnicoCep"
              placeholder="CEP"
              value={tecnicoCep}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Logradouro">Logradouro</Label>
            <Input
              type="text"
              name="tecnicoLogradouro"
              placeholder="Logradouro"
              value={tecnicoLogradouro}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Número">Número</Label>
            <Input
              type="text"
              name="tecnicoNumero"
              placeholder="Número"
              value={tecnicoNumero}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Complemento">Complemento</Label>
            <Input
              type="text"
              name="tecnicoComplemento"
              placeholder="Complemento"
              value={tecnicoComplemento}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Bairro">Bairro</Label>
            <Input
              type="text"
              name="tecnicoBairro"
              placeholder="Bairro"
              value={tecnicoBairro}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Cidade">Cidade</Label>
            <Input
              type="text"
              name="tecnicoCidade"
              placeholder="Cidade"
              value={tecnicoCidade}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="UF">UF</Label>
            <Input
              type="text"
              name="tecnicoUF"
              placeholder="UF"
              value={tecnicoUF}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <Button type="submit" color="warning">
            Alterar
          </Button>{" "}
          <a href="javascript:window.history.go(-1)" className="btn btn-danger">
            <span className="glyphicon glyphicon-remove"></span> Cancelar
          </a>
        </Form>
      </div>
    );
  }
}
