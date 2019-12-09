import React, { Component } from 'react';
import Header from '../../components/Header';
import Accordion from '../../components/Accordion'
import './styles.css'
import logo from '../../assets/logo.png'

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className="main-conteudo">
                    <Header />
                    <Accordion />
                    <img alt="logo" id="logo-main" src={logo}></img>
                </div>
            </div>
        );
    }

}