import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-center {
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    padding: 20px;
    width: 300px;
    height: 400px;

    h1 {
      font-size: 30px;
      margin-top: 27px;
    }

    button {
      background-color: #31a4e4;
      color: white;
      height: 40px;
      width: 100%;
      left: 555px;
      top: 686px;
      border-radius: 5px;
      font-size: 18px;
      margin-top: 15px;
      border: none;

      &:hover {
        background-color: #3699ce;
        cursor: pointer;
      }
    }

    .login-eye {
      align-items: center;
      justify-content: center;
      font-size: 20;
      cursor: pointer;
      margin-right: 10px;
    }
  }

  .login-ImputCPF {
    display: flex;
    align-items: center;
    color: gray;
    background-color: #f2f2f2;
    padding: 3px;
    width: 98%;
    height: 50px;
    border-radius: 5px;
    margin-top: 30px;

    svg {
      margin-left: 10px;
      font-size: 25px;
    }

    input {
      background: transparent;
      width: 100%;
      outline-width: 0;
      color: black;
      border: none;
      font-size: 17px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  .login-InputPassword {
    display: flex;
    align-items: center;
    color: gray;
    background-color: #f2f2f2;
    padding: 3px;
    margin: 5px;
    width: 98%;
    height: 50px;
    border-radius: 5px;

    svg {
      margin-left: 10px;
      font-size: 25px;
    }

    input {
      background: transparent;
      width: 100%;
      outline-width: 0;
      color: black;
      border: none;
      font-size: 17px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
