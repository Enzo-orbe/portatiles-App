import styled from "@emotion/styled";

const Boton = styled.a`
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: -6px 7px 34px 0px rgba(36, 36, 36, 1);
  border-radius: 5px;
  padding: 0.8rem 2rem;
  margin: 2rem auto;
  margin-right: 1rem;
  text-align: center;
  background-color: #2a12e8;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%2305010d' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  color: #ffffff;
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default Boton;
