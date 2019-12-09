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

export default class FinancaAlterar extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/financas/${id}`);
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
      .put("/financas/" + this.props.match.params.id, obj)
      .then(res => console.log(res.data));

    this.props.history.push("/financas");
    window.location.reload();
  }

  render() {
    const {
      financaTitular,
      financaValor,
      financaReferencia,
      TipoFinanca
    } = this.state;
    return (
      <div>
        <div id="navegar">
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/main">
              Página Inicial
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              Finanças
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Form id="formFinancas" onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="Titular">Titular</Label>
            <Input
              type="text"
              name="financaTitular"
              placeholder="Titular"
              value={financaTitular}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Valor">Valor</Label>
            <Input
              type="text"
              name="financaValor"
              placeholder="Valor"
              value={financaValor}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Referência">Referência</Label>
            <Input
              type="text"
              name="financaReferencia"
              placeholder="Referência"
              value={financaReferencia}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="tipo">Tipo</Label>
            <Input
              type="select"
              name="TipoFinanca"
              onChange={this.changeHandler}
              value={TipoFinanca}
            >
              <option>À Receber</option>
              <option>À Pagar</option>
            </Input>
          </FormGroup>
          <Button type="submit" color="warning">
            Salvar
          </Button>{" "}
        </Form>
      </div>
    );
  }
}
