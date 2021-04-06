import React from 'react';
import {Content, LandingPage} from './styles'
import { FiLogOut } from 'react-icons/fi'
import Button from '../../components/Button';



function HomePage() {
    return(
        
            <Content>
            
                <LandingPage>
                    <h1>Escolha sua opção para avançar:</h1>
                    <Button>CADASTRAR CLIENTE</Button>
                    <Button>UPLOAD DE RECEITA</Button>
                </LandingPage>
            


                <a href="/">
                    <FiLogOut size='15px'/>
                    Sair

                </a>
            </Content>
       
    )
}

export default HomePage;