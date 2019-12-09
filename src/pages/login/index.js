import React, { useState } from 'react';
import { Label, Input, Button } from 'reactstrap';
import './styles.css';
import api from '../../services/api';
import logo from '../../assets/logo-branco.png'

export default function Login({ history }) {
    const [usuarioLogin, setUsuario] = useState('');
    const [usuarioSenha, setSenha] = useState('');

    async function hundleSubmit(e) {
        e.preventDefault();

        try {
            await api.post('/authenticate', { usuarioLogin: usuarioLogin, usuarioSenha: usuarioSenha, });
            history.push('/main');
        }
        catch (e) {
            alert('Login/Senha inválidos!');
        }
    }

    return (
        <div id="tela-login" className="tela-login">
            <img alt="logo" id="logo" src={logo}></img>
            <section className="form-section">
                <div className="form-wrapper">
                    <form action="" onSubmit={hundleSubmit}>
                        <div className="input-block">
                            <Label for="examplEmail" className="mr-sm-2">Usuário</Label>
                            <Input value={usuarioLogin} onChange={e => setUsuario(e.target.value)} type="text" name="email" id="login-email" required="required" placeholder="usuario" />

                        </div>
                        <div className="input-block">
                            <Label for="examplePassword" className="mr-sm-2">Senha</Label>
                            <Input value={usuarioSenha} onChange={e => setSenha(e.target.value)} type="password" name="password" id="login-password" placeholder="sua senha" required="required" />

                        </div>
                        <Button className="btn-login" type="submit" color="primary">Acessar</Button>{' '}
                    </form>
                </div>
            </section>
        </div>

        // <Form inline onSubmit={hundleSubmit}>
        //     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        //         <Label for="examplEmail" className="mr-sm-2">E-mail</Label>
        //         <Input value={usuarioLogin} onChange={e => setUsuario(e.target.value)} type="text" name="email" id="exampleEmail" placeholder="email@exemplo.com" />
        //     </FormGroup>
        //     <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        //         <Label for="examplePassword" className="mr-sm-2">Senha</Label>
        //         <Input value={usuarioSenha} onChange={e => setSenha(e.target.value)} type="password" name="password" id="examplePassword" placeholder="sua senha" />
        //     </FormGroup>
        //     <Button type="submit" color="primary">Acessar</Button>{' '}
        // </Form>

    );
}