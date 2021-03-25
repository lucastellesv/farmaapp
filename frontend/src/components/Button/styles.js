import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.button `
    background: #E9E9EB;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #312e38;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2, '#E9E9EB')};
        }
        

`