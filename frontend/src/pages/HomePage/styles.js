import styled from 'styled-components';
import {shade} from 'polished'


export const LandingPage = styled.div`
display: flex;
flex-direction: column;
place-content:center;
border: 2px solid #E9E9EB;
border-radius: 25px;
padding: 25px;
box-shadow: 7px 7px 7px 0px rgba(0,0,0,0.68);


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
        h1 {
            margin-bottom: 10px;
            color: #5B262C;
        }

`

export const Content = styled.div`
    display: flex;
    flex-direction:column;
    place-content: center;

    width: 100%;
    margin-top: 50px;

    align-items: center;
  
> a {
        color: #E9E9EB;
        display: block;
        margin-top: 15px;
        text-decoration: none;
        transition: color 0.2s;
        font-size: 25px;
                    
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
