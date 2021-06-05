import styled from "styled-components";
import MediaQuery from "../../styles/media";

export const Wrapper = styled.div`

    width: 100vw;
    height: 100vh;

    ${MediaQuery.tablet} {
      max-width: 100%;
    }


  
`;

export const Main = styled.main`

      margin: 3.2rem auto;
      width: 90%;

      ${MediaQuery.tablet} {
        padding: 3.2rem 0;
        max-width: 740px;
        margin: 0 auto;
      }
    
`;

export const Form = styled.form`

    margin-top: 3.2rem;

    ${MediaQuery.tablet} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 16px;
      position: absolute;
      bottom: -28px;
    }
    
    label {
      color: var(--color-text-in-primary);
    }

    button {
                  width: 100%;
                  height: 5.6rem;
                  background-color: var(--color-secundary);
                  color: var(--color-button-text);
                  border: 0;
                  border-radius: 0.8rem;
                  cursor: pointer;
                  font-weight: 700;
                  font-family: 'Archivo', sans-serif;
                  font-size: 1.6rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  text-decoration: none;
                  transition: background-color 0.2s;
                  bottom: -28px;
                  align-self: end;
                  margin-top: 2.2rem;

                  ${MediaQuery.tablet} {
                    width: 20rem;
                    margin-top: 0;
                    }

                  &:hover {
                      background-color: var(--color-secundary-dark);
                  }
              }

  
`;


