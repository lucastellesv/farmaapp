import React from 'react';
import {Container, Content, Background} from './styles'
import logoImg from '../../assets/Icon.svg'
import { FiLogIn } from 'react-icons/fi'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useHistory } from 'react-router-dom';


function SignIn() {
    return(
        <Container>
            <Content>
                <img src= {logoImg} alt="Farma.io" width="300px" height="175px"/>

                <form>
                    <h1>Faça seu Login</h1>
                    <Input placeholder="Código"/>
                    <Input type="password" placeholder="Senha"/>
                   
                
                       <Button type="submit" value="entrar"> Entrar </Button>

                    <a href="/forgot"> Esqueci minha senha </a>
                </form>

                <a  href="/signup">
                    <FiLogIn size="25px"/>
                    Criar conta
                    
                </a>
                
            </Content>
            <Background/>
        </Container>
    )
}

export default SignIn;