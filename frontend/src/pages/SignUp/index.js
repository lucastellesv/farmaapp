import React from 'react';
import {Container, Content, Background} from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom'


function SignUp() {
    return(
        <Container>
            <Content>

                <form>
                    <h1>Faça seu Cadastro</h1>
                    <Input placeholder="Nome de Usuário"/>
                    <Input placeholder="CNPJ da farmacia"/>
                    <Input placeholder="CPF"/>
                    <Input type="password" placeholder="Senha"/>
                    <Input type="password" placeholder="Confirme a senha"/>
                    <Button type="submit"> Cadastrar </Button>
                </form>

                <a href="/">
                    <FiArrowLeft size="30px"/>
                    Voltar
                </a>
            </Content>
            <Background/>
        </Container>
    )
}

export default SignUp;