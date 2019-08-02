import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto 0;

  .toastContainer {
    border-radius: 4px;

    .Toastify__toast-body {
      font-weight: bold;
    }
  }
`;

export const Search = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 10px 15px;

  h1 {
    margin: 10px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const SelectInput = styled.select`
  background: #fff;
  border: 1px solid #999;
  font-size: 16px;
  height: 32px;
  border-radius: 4px;
  margin-right: 5px;
  padding: 0 10px;

  &:nth-child(1) {
    flex: 1;
  }
  &:nth-child(2) {
    flex: 2;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #31b8f5;
  border: 0;
  border-radius: 4px;
  height: 32px;
  width: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Default = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 50px 15px;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
