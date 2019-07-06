import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      display: flex;
      flex-direction: column;
      width: 350px;
    }

    input {
      flex: 1;
      font-size: 15px;
      line-height: 42px;
      border: 0px;
      border-radius: 7px;
      padding: 0px 15px 0px 15px;
      margin-bottom: 10px;
    }

    .actions {
      display: flex;
      flex-direction: column;

      button {
        flex: 1;
        font-size: 15px;
        font-weight: 500;
        line-height: 42px;
        border: 0px;
        border-radius: 7px;
        padding: 0px 10px 0px 10px;
        margin: 5px 0px 5px 0px;
      }

      button[type='submit'] {
        color: #fff;
        background-color: red;
        cursor: pointer;
      }
    }

    .aviso {
      color: #000;
      border-radius: 7px;
      background-color: palegoldenrod;
      line-height: 32px;
      padding: 0px 10px 0px 10px;
    }
  }
`
