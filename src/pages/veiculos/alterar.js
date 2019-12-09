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

export default class VeiculoAlterar extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {};
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await api.get(`/veiculos/${id}`);
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

    api.put("/veiculos/" + this.props.match.params.id, obj).then(res => {
      this.props.history.push("/veiculos");

      alert(`Veículo ${this.state.veiculoModelo} alterado com sucesso`);
      window.location.reload();
    });
  }

  render() {
    const {
      veiculoMarca,
      veiculoModelo,
      veiculoPlaca,
      veiculoCor,
      veiculoChassi,
      veiculoApolice
    } = this.state;
    return (
      <div>
        <div id="navegar">
          <Breadcrumb tag="nav" listTag="div">
            <BreadcrumbItem tag="a" href="/main">
              Página Inicial
            </BreadcrumbItem>
            <BreadcrumbItem active tag="span">
              Veículos
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <Form id="formVeiculos" onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="nome">Marca</Label>
            <Input
              type="text"
              name="veiculoMarca"
              placeholder="Marca"
              value={veiculoMarca}
              onChange={this.changeHandler}
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="nome">Modelo</Label>
            <Input
              type="text"
              name="veiculoModelo"
              placeholder="Modelo"
              value={veiculoModelo}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="nome">Placa</Label>
            <MaskedInput
              minLength="8"
              mask={[/[a-z]/, /[a-z]/, /[a-z]/, "-", /\d/, /\d/, /\d/, /\d/]}
              className="form-control"
              name="veiculoPlaca"
              placeholder="ABC-1234"
              value={veiculoPlaca}
              onChange={this.changeHandler}
              guide={false}
            />
          </FormGroup>
          <FormGroup>
            <Label for="nome">Cor</Label>
            <Input
              type="text"
              name="veiculoCor"
              placeholder="Cor"
              value={veiculoCor}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="nome">Chassi</Label>
            <Input
              minLength="17"
              maxLength="17"
              type="text"
              name="veiculoChassi"
              placeholder="Chassi"
              value={veiculoChassi}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="nome">Nº Apolice</Label>
            <Input
              maxLength="10"
              type="text"
              name="veiculoApolice"
              placeholder="Apolice"
              value={veiculoApolice}
              onChange={this.changeHandler}
            />
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
