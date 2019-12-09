import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";
import { cpfMask, rgMask } from "../../masks";
import MaskedInput from "react-text-mask";

export default class UsuarioNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usuarioNome: "",
      usuarioCPF: "",
      usuarioLogin: "",
      usuarioSenha: "",
      usuarioContato: "",
      usuarioTipo: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      api
        .post("/usuarios", this.state)
        .then(res => {
          this.props.history.push("/usuarios");

          window.location.reload();
        })
        .catch(res => {
          alert("O usuario com este documento já foi cadastrado");
        });
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      usuarioNome,
      usuarioCPF,
      usuarioLogin,
      usuarioSenha,
      usuarioContato,
      usuarioTipo
    } = this.state;
    return (
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
          <Input
            maxLength="14"
            minLength="14"
            type="text"
            name="usuarioCPF"
            placeholder="123.456.789-10"
            value={cpfMask(usuarioCPF)}
            onChange={this.changeHandler}
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
          <Label for="nome">Senha</Label>
          <Input
            type="password"
            name="usuarioSenha"
            placeholder="Senha"
            value={usuarioSenha}
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
          Adicionar
        </Button>{" "}
        <a href="javascript:window.history.go(-1)" className="btn btn-danger">
          <span className="glyphicon glyphicon-remove"></span> Cancelar
        </a>
      </Form>
    );
  }
}
