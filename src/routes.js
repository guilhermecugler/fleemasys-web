import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";
import Veiculos from "./pages/veiculos";
import VeiculoNovo from "./pages/veiculos/novo";
import VeiculoDetalhes from "./pages/veiculos/detalhes";
import VeiculoAlterar from "./pages/veiculos/alterar";
import Usuarios from "./pages/usuarios";
import UsuarioNovo from "./pages/usuarios/novo";
import UsuarioDetalhes from "./pages/usuarios/detalhes";
import UsuarioAlterar from "./pages/usuarios/alterar";
import Clientes from "./pages/clientes";
import ClienteNovo from "./pages/clientes/novo";
import ClienteDetalhes from "./pages/clientes/detalhes";
import ClienteAlterar from "./pages/clientes/alterar";
import Abastecimento from "./pages/abastecimento";
import AbastecimentoNovo from "./pages/abastecimento/novo";
import AbastecimentoDetalhes from "./pages/abastecimento/detalhes";
import AbastecimentoAlterar from "./pages/abastecimento/alterar";
import Manutencao from "./pages/manutencao";
import ManutencaoNovo from "./pages/manutencao/novo";
import ManutencaoDetalhes from "./pages/manutencao/detalhes";
import ManutencaoAlterar from "./pages/manutencao/alterar";
import Tecnico from "./pages/tecnico";
import TecnicoNovo from "./pages/tecnico/novo";
import TecnicoDetalhes from "./pages/tecnico/detalhes";
import TecnicoAlterar from "./pages/tecnico/alterar";
import Multa from "./pages/multas";
import MultaNovo from "./pages/multas/novo";
import MultaDetalhes from "./pages/multas/detalhes";
import MultaAlterar from "./pages/multas/alterar";
import EmbarqueDesembarque from "./pages/embarquedesembarque";
import EmbarqueDesembarqueNovo from "./pages/embarquedesembarque/novo";
import EmbarqueDesembarqueDetalhes from "./pages/embarquedesembarque/detalhes";
import EmbarqueDesembarqueAlterar from "./pages/embarquedesembarque/alterar";
import Financas from "./pages/financas";
import FinancaNovo from "./pages/financas/novo";
import FinancaDetalhes from "./pages/financas/detalhes";
import FinancaAlterar from "./pages/financas/alterar";
import Aluguel from "./pages/aluguel";
import AluguelNovo from "./pages/aluguel/novo";
import AluguelDetalhes from "./pages/aluguel/detalhes";
import AluguelAlterar from "./pages/aluguel/alterar";
import Empresa from "./pages/empresa";
import EmpresaNovo from "./pages/empresa/novo";
import EmpresaDetalhes from "./pages/empresa/detalhes";
import EmpresaAlterar from "./pages/empresa/alterar";
import Viagens from "./pages/viagens";
import ViagemNovo from "./pages/viagens/novo";
import ViagemDetalhes from "./pages/viagens/detalhes";
import ViagemAlterar from "./pages/viagens/alterar";
import Motoristas from "./pages/motoristas";
import MotoristaDetalhes from "./pages/motoristas/detalhes";
import MotoristaNovo from "./pages/motoristas/novo";
import MotoristaAlterar from "./pages/motoristas/alterar";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main" component={Main} />
      <Route exact path="/usuarios" component={Usuarios} />
      <Route path="/usuarios/:id" component={UsuarioDetalhes} />
      <Route exact path="/usuarios/novo" component={UsuarioNovo} />
      <Route exact path="/usuarios/alterar/:id" component={UsuarioAlterar} />
      <Route exact path="/motoristas" component={Motoristas} />
      <Route path="/motoristas/:id" component={MotoristaDetalhes} />
      <Route exact path="/motoristas/novo" component={MotoristaNovo} />
      <Route
        exact
        path="/motoristas/alterar/:id"
        component={MotoristaAlterar}
      />
      <Route exact path="/clientes" component={Clientes} />
      <Route path="/clientes/:id" component={ClienteDetalhes} />
      <Route exact path="/clientes/novo" component={ClienteNovo} />
      <Route exact path="/clientes/alterar/:id" component={ClienteAlterar} />
      <Route exact path="/veiculos" component={Veiculos} />
      <Route path="/veiculos/:id" component={VeiculoDetalhes} />
      <Route exact path="/veiculos/novo" component={VeiculoNovo} />
      <Route exact path="/veiculos/alterar/:id" component={VeiculoAlterar} />
      <Route exact path="/abastecimento" component={Abastecimento} />
      <Route path="/abastecimento/:id" component={AbastecimentoDetalhes} />
      <Route exact path="/abastecimento/novo" component={AbastecimentoNovo} />
      <Route
        exact
        path="/abastecimento/alterar/:id"
        component={AbastecimentoAlterar}
      />
      <Route exact path="/manutencao" component={Manutencao} />
      <Route path="/manutencao/:id" component={ManutencaoDetalhes} />
      <Route exact path="/manutencao/novo" component={ManutencaoNovo} />
      <Route
        exact
        path="/manutencao/alterar/:id"
        component={ManutencaoAlterar}
      />
      <Route exact path="/tecnico" component={Tecnico} />
      <Route path="/tecnico/:id" component={TecnicoDetalhes} />
      <Route exact path="/tecnico/novo" component={TecnicoNovo} />
      <Route exact path="/tecnico/alterar/:id" component={TecnicoAlterar} />
      <Route exact path="/multas" component={Multa} />
      <Route path="/multas/:id" component={MultaDetalhes} />
      <Route exact path="/multas/novo" component={MultaNovo} />
      <Route exact path="/multas/alterar/:id" component={MultaAlterar} />
      <Route exact path="/aluguel" component={Aluguel} />
      <Route path="/aluguel/:id" component={AluguelDetalhes} />
      <Route exact path="/aluguel/novo" component={AluguelNovo} />
      <Route exact path="/aluguel/alterar/:id" component={AluguelAlterar} />
      <Route exact path="/empresa" component={Empresa} />
      <Route path="/empresa/:id" component={EmpresaDetalhes} />
      <Route exact path="/empresa/novo" component={EmpresaNovo} />
      <Route exact path="/empresa/alterar/:id" component={EmpresaAlterar} />
      <Route exact path="/financas" component={Financas} />
      <Route path="/financas/:id" component={FinancaDetalhes} />
      <Route exact path="/financas/novo" component={FinancaNovo} />
      <Route exact path="/financas/alterar/:id" component={FinancaAlterar} />
      <Route
        exact
        path="/embarquedesembarque"
        component={EmbarqueDesembarque}
      />
      <Route
        path="/embarquedesembarque/:id"
        component={EmbarqueDesembarqueDetalhes}
      />
      <Route
        exact
        path="/embarquedesembarque/novo"
        component={EmbarqueDesembarqueNovo}
      />
      <Route
        exact
        path="/embarquedesembarque/alterar/:id"
        component={EmbarqueDesembarqueAlterar}
      />
      <Route exact path="/viagens" component={Viagens} />
      <Route path="/viagens/:id" component={ViagemDetalhes} />
      <Route exact path="/viagens/novo" component={ViagemNovo} />
      <Route exact path="/viagens/alterar/:id" component={ViagemAlterar} />
    </BrowserRouter>
  );
}
