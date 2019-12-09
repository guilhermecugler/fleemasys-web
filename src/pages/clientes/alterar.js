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

export default class ClienteAlterar extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/clientes/${id}`);
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

    api.put("/clientes/" + this.props.match.params.id, obj).then(res => {
      this.props.history.push("/clientes");

      alert(`Cliente ${this.state.clienteRazaoSocial} alterado com sucesso`);
      window.location.reload();
    });
  }

  render() {
    const {
      clienteRazaoSocial,
      clienteNMFantasia,
      clienteCNPJ,
      clienteTelComercial,
      clienteTelCelular,
      clienteEmail,
      clienteCep,
      clienteLogradouro,
      clienteNumero,
      clienteComplemento,
      clienteBairro,
      clienteCidade,
      clienteUF,
      clienteSituacao
    } = this.state;
    return (
      <div>
        <div id="navegar">
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/main">
              Página Inicial
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              Clientes
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Form id="formClientes" onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="Razão Social">Razão Social</Label>
            <Input
              type="text"
              name="clienteRazaoSocial"
              placeholder="Razão Social"
              value={clienteRazaoSocial}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Nome Fantasia">Nome Fantasia</Label>
            <Input
              type="text"
              name="clienteNMFantasia"
              placeholder="Nome Fantasia"
              value={clienteNMFantasia}
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
              name="clienteCNPJ"
              placeholder="12.345.678/9111-10"
              value={clienteCNPJ}
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
              name="clienteTelComercial"
              placeholder="(13) 3455-9090"
              value={clienteTelComercial}
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
              name="clienteTelCelular"
              placeholder="(13) 91234-5678"
              value={clienteTelCelular}
              onChange={this.changeHandler}
              guide={true}
            />
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                type="text"
                name="clienteEmail"
                placeholder="Email"
                value={clienteEmail}
                onChange={this.changeHandler}
              />
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="CEP">CEP</Label>
            <MaskedInput
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/]}
              className="form-control"
              name="clienteCep"
              placeholder="12345-000"
              value={clienteCep}
              onChange={this.changeHandler}
              guide={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Logradouro">Logradouro</Label>
            <Input
              type="text"
              name="clienteLogradouro"
              placeholder="Logradouro"
              value={clienteLogradouro}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Número">Número</Label>
            <Input
              type="text"
              name="clienteNumero"
              placeholder="Número"
              value={clienteNumero}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Complemento">Complemento</Label>
            <Input
              type="text"
              name="clienteComplemento"
              placeholder="Complemento"
              value={clienteComplemento}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Bairro">Bairro</Label>
            <Input
              type="text"
              name="clienteBairro"
              placeholder="Bairro"
              value={clienteBairro}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Cidade">Cidade</Label>
            <Input
              type="text"
              name="clienteCidade"
              placeholder="Cidade"
              value={clienteCidade}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="UF">UF</Label>
            <Input
              type="select"
              name="clienteUF"
              onChange={this.changeHandler}
              value={clienteUF}
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
              name="clienteSituacao"
              onChange={this.changeHandler}
              value={clienteSituacao}
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
