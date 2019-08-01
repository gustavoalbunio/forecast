import styled from 'styled-components';

export const WForecast = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  margin-top: 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px;

  div {
    min-height: 120px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      text-align: center;
    }

    strong {
      font-size: 24px;
    }
  }
`;

export const After = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    min-height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      text-align: center;
    }

    strong {
      font-size: 24px;
    }
  }
`;
