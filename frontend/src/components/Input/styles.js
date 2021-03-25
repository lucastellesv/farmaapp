import styled from 'styled-components';

export const Container = styled.input `
    background: #E9E9EB;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    & + input {
         margin-top: 5px;
            }
    
`