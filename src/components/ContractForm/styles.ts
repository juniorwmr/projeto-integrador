import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.div`
  flex: 1;
`;

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;
  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  padding: 64px 80px;
  overflow: hidden;
  .leaflet-container {
    margin-bottom: 40px;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
  }
`;
export const Fieldset = styled.fieldset`
  border: 0;
  + fieldset {
    margin-top: 50px;
  }
  legend {
    width: 100%;
    font-size: 28px;
    line-height: 34px;
    color: #5c8599;
    font-weight: 700;
    border-bottom: 1px solid #d3e2e5;
    padding-bottom: 24px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputField = styled.div`
  && {
    margin-top: 23px;
  }
  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }
  span {
    font-size: 14px;
    color: #8fa7b3;
    margin-left: 24px;
    line-height: 24px;
  }
  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
    font-size: 1rem;
  }
  input {
    height: 60px;
    padding: 0 16px;
  }
  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }
`;

export const SelectInputField = styled(Select)`
  && {
    margin-top: 23px;
  }
  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }
  span {
    font-size: 14px;
    color: #8fa7b3;
    margin-left: 24px;
    line-height: 24px;
  }
  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
    font-size: 1rem;
  }
  input {
    height: 60px;
    padding: 0 16px;
  }
  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }
`;

export const SelectField = styled.div`
  && {
    margin-top: 23px;
  }
  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;
  }
  span {
    font-size: 14px;
    color: #8fa7b3;
    margin-left: 24px;
    line-height: 24px;
  }
  select {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #f5f8fa 95.5% 50% no-repeat;
    cursor: pointer;
    height: 60px;
    padding: 0 16px;
    border: 0;
    border: 1px solid #cecece;
    box-shadow: 0 0 3px 0;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }
`;
