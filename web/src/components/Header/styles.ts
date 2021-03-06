import styled from "styled-components";
import MediaQuery from "../../styles/media";


export const Header = styled.header`
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary);

    ${MediaQuery.tablet} {
      height: 340px;
    }
`;

export const TopBar = styled.div`
      width: 90%;
      margin: 0 auto;

      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--color-text-in-primary);
      padding: 1.6rem 0;

      ${MediaQuery.tablet} {
        max-width: 1100px;
      }

      a {
        height: 3.2rem;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.6;
        }
      }

      & > img {
        height: 1.6rem;
      }
    
`;

export const HeaderContent = styled.div`

      width: 90%;
      margin: 0 auto;
      position: relative;
      margin: 3.2rem auto;

      ${MediaQuery.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex: 1 1;
        max-width: 740px;
        margin: 0 auto;
        padding-bottom: 48px;
      }

      strong {
        font-size: 3.6rem;
        line-height: 4.2rem;
        font-family: "Archivo", sans-serif;
        color: var(--color-title-in-primary);

        ${MediaQuery.tablet} {
          max-width: 350px;
        }
      }

      p {
        max-width: 30rem;
        font-size: 1.6rem;
        line-height: 2.6rem;
        color: var(--color-text-in-primary);
        margin: 2.4rem 0;

      }
`;
