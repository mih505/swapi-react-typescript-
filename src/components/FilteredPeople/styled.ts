import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
`;

export const Pagination = styled.div`
  margin: auto;
  width: 100%;
  & button {
    padding: 10px;
    font-size: 20px;
    border: none;
    width: 50px;
  }
`;

export const Status = styled.div`
  position: absolute;
  top: 46%;
  margin: auto;
  width: 100%;
`
