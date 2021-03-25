import styled from 'styled-components';
import signInBackgroundImg from '../../assets/sign-in-background.png'
import {shade} from 'polished'
export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

`

export const Content = styled.div`
    display: flex;
    flex-direction:column;
    place-content: center;

    width: 100%;
    max-width: 700px;

    align-items: center;
    form {
            margin: 10px 0;
            width: 340px;
            text-align: center;

        h1 {
            margin-bottom: 15px;
            color: #5B262C;
        }
        
        a {
            color: #FFF;
            display: block;
            margin-top: 20px;
            text-decoration:none;
            transition: color 0.2s;

            &:hover{
                color: ${shade(0.2, '#FFF')}
            }
        }
}

    > a {
        color: #E9E9EB;
        display: block;
        margin-top: 0px;
        text-decoration: none;
        transition: color 0.2s;
                    
        display: flex;
        align-items: center;

        svg {
            margin-right:16px;
        }
        &:hover {
            color: ${shade(0.2, '#FFF')}
        }
    }

`

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`