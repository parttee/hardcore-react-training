import styled from "styled-components";

const Form = styled.form`
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
  label {
    display: block;
    font-size: 0.9em;
    padding-bottom: 5px;
  }
  button {
    margin-top: 20px;
  }
`;

export const FormBody = styled.div`
  > * + * {
    margin: 10px 0;
    break-inside: avoid;
  }
  column-count: 2;
`;

export default Form;
