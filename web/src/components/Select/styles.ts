import styled from "styled-components";
import MediaQuery from "../../styles/media";

const Wrapper = styled.div`
   .select-block {
      position: relative;

      label {
        font-size: 1.4rem;
        
      }

      select {
        width: 100%;
        height: 5.6rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background-color: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline: 0;
        padding: 0 1.6rem;

        font-size: 1.6rem;
        font-family: "Archivo", sans-serif;
      }

      &:focus-within::after {
        content: "";
        width: calc(100% - 3.2rem);
        height: 2px;
        background-color: var(--color-primary-light);
        position: absolute;
        left: 1.6rem;
        right: 1.6rem;
        bottom: 0;
      }

    }

    .select-block + .select-block {
        margin-top: 1.4rem;

        ${MediaQuery.tablet} {
          margin-top: 0;
        }
      }
`;

export default Wrapper;