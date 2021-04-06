import React from 'react';
import {Content, LandingPage} from './styles'
import { FiSkipBack, FiSend } from 'react-icons/fi'
import Input from '../../components/Input';
import Button from '../../components/Button'



function HomePage() {
    return(
        
            <Content>
            
                <LandingPage>
                    <h1>Preencha os campos com os dados do cliente:</h1>
                    <form>
                    <Input placeholder="Nome de Cliente"/>
                    <Input placeholder="CPF do Cliente"/>
                    <Input placeholder="CEP"/>
                    <Input placeholder="RUA"/>
                    <Button>
                        <FiSend size="20px" />
                        Enviar
                    </Button>
                    </form>
                </LandingPage>
            


                <a href="/home">
                    <FiSkipBack size='15px'/>
                    Voltar

                </a>
            </Content>
       
    )
}

export default HomePage;