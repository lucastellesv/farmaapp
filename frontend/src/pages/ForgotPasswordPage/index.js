import React from 'react';
import { Background,Container,Content} from './styles'
import { FiSend, FiArrowLeft, FiMail } from 'react-icons/fi'
import Input from '../../components/Input';
import Button from '../../components/Button';


function ForgotPasswordPage() {
    return(
        <Container>
            <Content>
                <form>
                        <h1>Escolha seu melhor email para receber o link para alterar sua senha e informe o seu CPF para conferencia de cadastro.</h1>
                        <Input placeholder='Email'></Input>
                        <Input placeholder='CPF'></Input>
                        <Button type="submit" value="send_recover_password">
                            <FiSend size="20px" />
                            Enviar
                        </Button>
                       
    
                   
                </form>
                <a href="/">
                    <FiArrowLeft size="25px"/>
                    Voltar

                </a>
            </Content>
            <Background/>
        </Container>
       
    )
}

export default ForgotPasswordPage;