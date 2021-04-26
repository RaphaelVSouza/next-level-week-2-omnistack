import styled from "styled-components";
import MediaQuery from "../../styles/media";

const Wrapper = styled.div`
  #page-teacher-form {
      width: 100vw;
      height: 100vh;

      ${MediaQuery.tablet} {
        max-width: 100vw;
      }

      .header-content {
        margin-bottom: 6.4rem;

        ${MediaQuery.tablet} {
            margin-bottom: 0;
        }
      }

      main {
          background-color: var(--color-box-base);
          width: 100%;
          max-width: 74rem;
          border-radius: 0.8rem;
          margin: -3.2rem auto 3.2rem;
          padding-top: 6.4rem;
          overflow: hidden;

           label {
            color: var(--color-text-complement);
          }

          fieldset {
              border: 0;
              padding: 0 2.4rem;

              ${MediaQuery.tablet} {
                padding: 0 6.4rem;

                }

             

              legend {
                  font-weight: 700;
                  font-size: 2.4rem;
                  font-family: 'Archivo', sans-serif;
                  color: var(--color-text-title);
                  margin-bottom: 2.4rem;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  width: 100%;
                  padding-bottom: 1.6rem;
                  border-bottom: 1px solid var(--color-line-in-white);

                  button {
                    background: none;
                    border: 0;
                    color: var(--color-primary);
                    font-weight: 700;
                    font-family: "Archivo", sans-serif;
                    font-size: 1.6rem;
                    cursor: pointer;
                    transition: color 0.2s;

                    &:hover {
                      color: var(--color-primary-dark);
                    }
                  }
                }

                .input-block, .textarea-block {
                  margin-top: 2.4rem;
                }

              & + fieldset {
                  margin-top: 6.4rem;
                }

                .schedule-item {
                  ${MediaQuery.tablet} {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr;
                    column-gap: 1.6rem;

                    .input-block {
                      margin-top: 0;
                    }
                  }


                }

            
            }

          footer {
              padding: 4rem 2.4rem;
              background-color: var(--color-box-footer);
              border-top: 1px solid var(--color-line-in-white);
              margin-top: 6.4rem;

              ${MediaQuery.tablet} {
                 padding: 4rem 6.4rem;
                 display: flex;
                 align-items: center;
                 justify-content: space-between;
                }

              p {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.4rem;
                line-height: 2.4rem;
                color: var(--color-text-complement);

                ${MediaQuery.tablet} {
                 justify-content: space-between;
                }
              }

              img {
                  margin-right: 2rem;
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
                  margin-top: 3.2rem;

                  ${MediaQuery.tablet} {
                    width: 20rem;
                    margin-top: 0;
                    }

                  &:hover {
                      background-color: var(--color-secundary-dark);
                  }
              }

          }
        }
    }
`;

export default Wrapper;
