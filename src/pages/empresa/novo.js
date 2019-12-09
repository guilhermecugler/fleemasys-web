import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";
import MaskedInput from "react-text-mask";

export default class EmpresaNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empresaRazaoSocial: "",
      empresaNomeFantasia: "",
      empresaCNPJ: "",
      empresaTelefone: "",
      empresaTelefone2: "",
      empresaEmail: "",
      empresaCep: "",
      empresaLogradouro: "",
      empresaNumero: "",
      empresaComplemento: "",
      empresaBairro: "",
      empresaCidade: "",
      empresaUF: "",
      empresaSituacao: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      api
        .post("/empresa", this.state)
        .then(res => {
          this.props.history.push("/empresa");

          window.location.reload();
        })
        .catch(res => {
          alert("A empresa com este documento já foi cadastrada");
        });
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      empresaRazaoSocial,
      empresaNomeFantasia,
      empresaCNPJ,
      empresaTelefone,
      empresaTelefone2,
      empresaEmail,
      empresaCep,
      empresaLogradouro,
      empresaNumero,
      empresaComplemento,
      empresaBairro,
      empresaCidade,
      empresaUF,
      empresaSituacao
    } = this.state;
    return (
      <Form id="formEmpresa" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Razão Social">Razão Social</Label>
          <Input
            type="text"
            name="empresaRazaoSocial"
            placeholder="Razão Social"
            value={empresaRazaoSocial}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Nome Fantasia">Nome Fantasia</Label>
          <Input
            type="text"
            name="empresaNomeFantasia"
            placeholder="Nome Fantasia"
            value={empresaNomeFantasia}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CNPJ">CNPJ</Label>
          <MaskedInput
            minLength="18"
            mask={[
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
              "/",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/
            ]}
            className="form-control"
            name="empresaCNPJ"
            placeholder="12.345.678/9111-10"
            value={empresaCNPJ}
            onChange={this.changeHandler}
            guide={false}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Telefone Comercial">Telefone Comercial</Label>
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
              "-",
              /\d/,
              /\d/,
              /\d/,
              /\d/
            ]}
            className="form-control"
            name="empresaTelefone"
            placeholder="(13) 3455-9090"
            value={empresaTelefone}
            onChange={this.changeHandler}
            guide={true}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Telefone Celular">Telefone Celular</Label>
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
            name="empresaTelefone2"
            placeholder="(13) 91234-5678"
            value={empresaTelefone2}
            onChange={this.changeHandler}
            guide={true}
          />
          <FormGroup>
            <Label for="Email">Email</Label>
            <Input
              type="text"
              name="empresaEmail"
              placeholder="Email"
              value={empresaEmail}
              onChange={this.changeHandler}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="CEP">CEP</Label>
          <MaskedInput
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
            className="form-control"
            name="empresaCep"
            placeholder="12345-000"
            value={empresaCep}
            onChange={this.changeHandler}
            guide={true}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Logradouro">Logradouro</Label>
          <Input
            type="text"
            name="empresaLogradouro"
            placeholder="Logradouro"
            value={empresaLogradouro}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Número">Número</Label>
          <Input
            type="text"
            name="empresaNumero"
            placeholder="Número"
            value={empresaNumero}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Complemento">Complemento</Label>
          <Input
            type="text"
            name="empresaComplemento"
            placeholder="Complemento"
            value={empresaComplemento}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Bairro">Bairro</Label>
          <Input
            type="text"
            name="empresaBairro"
            placeholder="Bairro"
            value={empresaBairro}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Cidade">Cidade</Label>
          <Input
            type="text"
            name="empresaCidade"
            placeholder="Cidade"
            value={empresaCidade}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="UF">UF</Label>
          <Input
            type="select"
            name="empresaUF"
            onChange={this.changeHandler}
            value={empresaUF}
          >
            <option value="">Selecione</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espirito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MT">Mato Grosso</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="Situação">Situação</Label>
          <Input
            type="select"
            name="empresaSituacao"
            onChange={this.changeHandler}
            value={empresaSituacao}
          >
            <option value="">Selecione</option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
            <option value="Inadimplente">Inadimplente</option>
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
