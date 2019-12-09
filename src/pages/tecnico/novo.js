import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";
import MaskedInput from "react-text-mask";

export default class TecnicoNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tecnicoNome: "",
      tecnicoCPF: "",
      tecnicoDataNascimento: "",
      tecnicoTelResidencial: "",
      tecnicoTelCelular: "",
      tecnicoCep: "",
      tecnicoLogradouro: "",
      tecnicoNumero: "",
      tecnicoComplemento: "",
      tecnicoBairro: "",
      tecnicoCidade: "",
      tecnicoUF: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      api
        .post("/tecnico", this.state)
        .then(res => {
          this.props.history.push("/tecnico");

          window.location.reload();
        })
        .catch(res => {
          alert("O técnico com este documento já foi cadastrado");
        });
    } catch {
      console.log("erro");
    }
  };

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
            name="tecnicoCPF"
            placeholder="123.456.789-10"
            value={tecnicoCPF}
            onChange={this.changeHandler}
            guide={false}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Data de Nascimento">Data de Nascimento</Label>
          <MaskedInput
            minLength="10"
            mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
            className="form-control"
            name="tecnicoDataNascimento"
            placeholder="01/01/2020"
            value={tecnicoDataNascimento}
            onChange={this.changeHandler}
            guide={true}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Telefone Residencial">Telefone Residencial</Label>
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
            name="tecnicoTelResidencial"
            placeholder="(13) 3455-9090"
            value={tecnicoTelResidencial}
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
            name="tecnicoTelCelular"
            placeholder="(13) 91234-5678"
            value={tecnicoTelCelular}
            onChange={this.changeHandler}
            guide={true}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CEP">CEP</Label>
          <MaskedInput
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
            className="form-control"
            name="tecnicoCep"
            placeholder="12345-000"
            value={tecnicoCep}
            onChange={this.changeHandler}
            guide={true}
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
            type="select"
            name="tecnicoUF"
            onChange={this.changeHandler}
            value={tecnicoUF}
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
