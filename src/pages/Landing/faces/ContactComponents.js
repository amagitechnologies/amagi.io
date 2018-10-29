import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: block;

  input,
  textarea {
    background-color: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
    font-size: 1rem;
    padding: 10px;
    width: calc(100% - 20px);
  }

  button {
    background-color: #ffffff;
    padding: 10px;
    outline: none;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const FieldsRow = styled.div`
  flex: 1;
  display: flex;
  margin-bottom: 16px;

  .gutter {
    width: 10px;
  }
`;

export const Field = styled.div`
  flex: 1;

  .label {
    font-weight: bold;
    margin-bottom: 4px;
  }
`;
