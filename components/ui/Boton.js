import styled from "@emotion/styled";

const Boton = styled.a`
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #a19997;
  border-radius: 5px;
  padding: 0.8rem 2rem;
  margin: 2rem auto;
  margin-right: 1rem;
  text-align: center;
  background-color: #a19997;
  color: #ffffff;
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Boton;
