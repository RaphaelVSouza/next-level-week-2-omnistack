import styled from "styled-components";
import MediaQuery from "../../styles/media";

const Wrapper = styled.div`
  #page-landing {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-text-in-primary);
    background-color: var(--color-primary);
  }
  #page-landing-content {
    text-align: center;
    ${MediaQuery.desktop} {
      max-width: 1100px;
      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas:
        "logo hero hero"
        "buttons buttons total";
    }
    .logo-container {
      text-align: center;
      margin-bottom: 3.2rem;
      ${MediaQuery.desktop} {
        grid-area: logo;
        align-self: center;
        margin: 0;
        text-align: left;
      }
      img {
        height: 10rem;
        ${MediaQuery.desktop} {
          height: 100%;
        }
      }
      h2 {
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 4.6rem;
        margin-top: 0.8rem;
        ${MediaQuery.desktop} {
          text-align: initial;
          font-size: 3.6rem;
        }
      }
    }
    .hero-image {
      width: 100%;
      justify-self: end;
      ${MediaQuery.desktop} {
        grid-area: hero;
      }
    }
    .buttons-container {
      display: flex;
      justify-content: center;
      margin: 3.2rem 0;
      ${MediaQuery.desktop} {
        grid-area: buttons;
        justify-content: flex-start;
      }
      a {
        width: 30rem;
        height: 10.4rem;
        border-radius: 0.8rem;
        font-size: 2rem;
        font-weight: 700;
        font-family: "Archivo", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: var(--color-button-text);
        ${MediaQuery.desktop} {
          font-size: 2.4rem;
        }
        img {
          width: 4rem;
          ${MediaQuery.desktop} {
            margin-right: 2.4rem;
          }
        }
      }
      .study {
        margin-right: 1.6rem;
        background-color: var(--color-primary-lighter);
        &:hover {
          background-color: var(--color-primary-light);
        }
      }
      .give-classes {
        background-color: var(--color-secundary);
        transition: background-color 0.2s;
        &:hover {
          background-color: var(--color-secundary-dark);
        }
      }
      .total-connections {
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        ${MediaQuery.desktop} {
          grid-area: total;
          justify-self: end;
        }
        img {
          margin-left: 0.8rem;
        }
      }
    }
  }
`;

export default Wrapper;