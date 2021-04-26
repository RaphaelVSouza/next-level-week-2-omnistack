import styled from "styled-components";
import MediaQuery from "../../styles/media";

const Wrapper = styled.div`
  .teacher-item {
    background-color: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;

    header,
    footer {
      ${MediaQuery.tablet} {
        padding: 3.2rem;
      }
    }

    header {
      padding: 3.2rem 2rem;
      display: flex;
      align-items: center;

      img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
      }

      div {
        margin-left: 2.4rem;

        strong {
          display: block;
          font-weight: 700;
          font-size: 2.4rem;
          font-family: "Archivo", sans-serif;
          color: var(--color-text-title);
        }

        span {
          display: block;
          font-size: 1.6rem;
          margin-top: 0.4rem;
        }
      }
    }

    & > p {
      padding: 0 2rem;
      font-size: 1.6rem;
      line-height: 2.8rem;
      word-wrap: break-word;

      ${MediaQuery.tablet} {
        padding: 0 3.2rem;
      }
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 3.2rem;
      padding: 3.2rem 2rem;
      background-color: var(--color-box-footer);
      border-top: 1px solid var(--color-line-in-white);

      p strong {
        display: block;
        font-size: 1.6rem;
        color: var(--color-primary);

        ${MediaQuery.tablet} {
          display: initial;
          margin-left: 1.6rem;
        }
      }

      a {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 20rem;
        height: 5.6rem;
        background-color: var(--color-secundary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font-weight: 700;
        font-size: 1.4rem;
        font-family: "Archivo", sans-serif;
        transition: background-color 0.2s;
        text-decoration: none;

        ${MediaQuery.tablet} {
          width: 24.5rem;
          font-size: 1.6rem;
          justify-content: center;
        }

        &:hover {
          background-color: var(--color-secundary-dark);
        }

        img {
          ${MediaQuery.tablet} {
            margin-right: 1.6rem;
          }
        }
      }
    }
  }
`;

export default Wrapper;
