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
import { cpfMask, rgMask } from "../../masks";

export default class UsuarioAlterar extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/usuarios/${id}`);
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

    api.put("/usuarios/" + this.props.match.params.id, obj).then(res => {
      this.props.history.push("/usuarios");

      alert(`Usuário ${usuarioNome} alterado com sucesso`);
      window.location.reload();
    });
  }

  render() {
    const {
      usuarioNome,
      usuarioCPF,
      usuarioLogin,
      usuarioContato,
      usuarioTipo
    } = this.state;
    return (
      <div>
        <div id="navegar">
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/main">
              Página Inicial
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              Usuários
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Form id="formUsuarios" onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="nome">Nome</Label>
            <Input
              type="text"
              name="usuarioNome"
              placeholder="Nome completo"
              value={usuarioNome}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="CPF">CPF</Label>
            <MaskedInput
              minLength="11"
              mask={[
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/
              ]}
              className="form-control"
              name="usuarioCPF"
              placeholder="123.456.789-10"
              value={usuarioCPF}
              onChange={this.changeHandler}
              guide={false}
            />
          </FormGroup>
          <FormGroup>
            <Label for="usuario">Usuário</Label>
            <Input
              type="text"
              name="usuarioLogin"
              placeholder="Usuário"
              value={usuarioLogin}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="contato">Contato</Label>
            <MaskedInput
              mask={[
                "(",
                /[1-9]/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/
              ]}
              className="form-control"
              name="usuarioContato"
              placeholder="(13) 91234-5678"
              value={usuarioContato}
              onChange={this.changeHandler}
              guide={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tipo">Tipo</Label>
            <Input
              type="select"
              name="usuarioTipo"
              onChange={this.changeHandler}
              value={usuarioTipo}
            >
              <option>Administrador</option>
              <option>Gerente</option>
              <option>Padrão</option>
            </Input>
          </FormGroup>
          <Button
            color="warning"
            data-toggle-tooltip="tooltip"
            data-placement="bottom"
            title="AMARELO"
          >
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
