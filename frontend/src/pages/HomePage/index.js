import React from 'react';
import {Content} from './styles'
import { FiLogOut } from 'react-icons/fi'
import Button from '../../components/Button';



function HomePage() {
    return(
        
            <Content>
                <form>
                        <h1>Selecione a sua Filial!</h1>
                        <Button type="submit" value="10496907000147"> BELAFARMA MATRIZ </Button>
                        <Button type="submit" value="06911958000110"> JLM </Button>
                        <Button type="submit" value="01056099000106"> BELASOL </Button>
                        <Button type="submit" value="17500977000170"> BELAVIDA </Button>
                        <Button type="submit" value="25116574000150"> HFM </Button>
                        <Button type="submit" value="03968790000191"> PONTE DOS ARCOS </Button>
                        <Button type="submit" value="10496907000228"> PRIME </Button>
                        <Button type="submit" value="18350015000145"> BELACENTER </Button>
    
                   
                </form>
                <a href="/">
                    <FiLogOut size='15px'/>
                    Sair

                </a>
            </Content>
       
    )
}

export default HomePage;