import styled from "@emotion/styled";

export const ContainerWrapper = styled.div`
  width: 100%;
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 20px;
  border: 2px solid blue;

  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
    border: 2px solid green;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-right: 32px;
    padding-left: 32px;
    border: 2px solid yellow;
  }
`;
