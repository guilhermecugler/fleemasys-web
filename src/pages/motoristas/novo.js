import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../../services/api";
import { cpfMask, rgMask } from "../../masks";
import MaskedInput from "react-text-mask";

export default class MotoristaNovo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      motoristaNome: "",
      motoristaCPF: "",
      motoristaRG: "",
      motoristaCNH: "",
      motoristaExameMedico: "",
      motoristaDataNascimento: "",
      motoristaTelResidencial: "",
      motoristaLogradouro: "",
      motoristaNumero: "",
      motoristaComplemento: "",
      motoristaBairro: "",
      motoristaCidade: "",
      motoristaUF: "",
      motoristaCep: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    try {
      e.preventDefault();
      api
        .post("/motoristas", this.state)
        .then(res => {
          this.props.history.push("/motoristas");

          window.location.reload();
        })
        .catch(res => {
          alert("O motorista com este documento já foi cadastrado");
        });
    } catch {
      console.log("erro");
    }
  };

  render() {
    const {
      motoristaNome,
      motoristaCPF,
      motoristaRG,
      motoristaCNH,
      motoristaDataNascimento,
      motoristaTelCelular,
      motoristaEmail,
      motoristaTelResidencial,
      motoristaExameMedico,
      motoristaLogradouro,
      motoristaNumero,
      motoristaComplemento,
      motoristaBairro,
      motoristaCidade,
      motoristaUF,
      motoristaCep
    } = this.state;
    return (
      <Form id="formMotoristas" onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="Nome">Nome</Label>
          <Input
            type="text"
            name="motoristaNome"
            placeholder="Nome"
            value={motoristaNome}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CPF">CPF</Label>
          <Input
            maxLength="14"
            minLength="14"
            type="text"
            name="motoristaCPF"
            placeholder="123.456.789-10"
            value={cpfMask(motoristaCPF)}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="RG">RG</Label>
          <Input
            maxLength="12"
            minLength="11"
            type="text"
            name="motoristaRG"
            placeholder="RG"
            value={rgMask(motoristaRG)}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CNH">CNH</Label>
          <Input
            maxLength="11"
            minLength="11"
            type="text"
            name="motoristaCNH"
            placeholder="CNH"
            value={motoristaCNH}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Exame Médico">Exame Médico</Label>
          <Input
            type="select"
            name="motoristaExameMedico"
            placeholder="Status exame"
            onChange={this.changeHandler}
            value={motoristaExameMedico}
          >
            <option>Em dia</option>
            <option>Pendente</option>
            <option>Irregular</option>
          </Input>
          <FormGroup>
            <Label for="Data Nascimento">Data Nascimento</Label>
            <MaskedInput
              minLength="10"
              mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
              className="form-control"
              name="motoristaDataNascimento"
              placeholder="01/01/2020"
              value={motoristaDataNascimento}
              onChange={this.changeHandler}
              guide={true}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="Tel Residencial">Tel Residencial</Label>
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
            name="motoristaTelResidencial"
            placeholder="(13) 3455-9090"
            value={motoristaTelResidencial}
            onChange={this.changeHandler}
            guide={true}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Celular">Celular</Label>
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
            name="motoristaTelCelular"
            placeholder="(13) 91234-5678"
            value={motoristaTelCelular}
            onChange={this.changeHandler}
            guide={true}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            id="exampleEmail"
            name="motoristaEmail"
            placeholder="Email"
            value={motoristaEmail}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Logradouro">Logradouro</Label>
          <Input
            type="text"
            name="motoristaLogradouro"
            placeholder="Logradouro"
            value={motoristaLogradouro}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Número">Número</Label>
          <Input
            type="text"
            name="motoristaNumero"
            placeholder="Número"
            value={motoristaNumero}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Complemento">Complemento</Label>
          <Input
            type="text"
            name="motoristaComplemento"
            placeholder="Complemento"
            value={motoristaComplemento}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Bairro">Bairro</Label>
          <Input
            type="text"
            name="motoristaBairro"
            placeholder="Bairro"
            value={motoristaBairro}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Cidade">Cidade</Label>
          <Input
            type="text"
            name="motoristaCidade"
            placeholder="Cidade"
            value={motoristaCidade}
            onChange={this.changeHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="UF">UF</Label>
          <Input
            type="select"
            name="motoristaUF"
            onChange={this.changeHandler}
            value={motoristaUF}
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
          <Label for="CEP">CEP</Label>
          <MaskedInput
            mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
            className="form-control"
            name="motoristaCep"
            placeholder="12345-000"
            value={motoristaCep}
            onChange={this.changeHandler}
            guide={true}
          />
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
