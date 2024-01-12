import styled from '@emotion/styled';
import { colors } from 'styles/stylesLayout';
export const FormSearch = styled.form`
  margin: 0 auto 16px auto;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
  }
`;
export const FormInput = styled.input`
  width: 100%;
  height: 20px;

  padding: 4px 0 4px 0;

  font-size: 14px;
  line-height: 1.14;
  color: ${colors.whiteColor};

  border: none;
  border-bottom: 0.5px solid ${colors.whiteColor};
  background-color: transparent;
  outline: none;

  &::placeholder {
    font-size: 14px;
    line-height: 1.14;

    color: ${colors.whiteColor};
  }
`;
export const SearchBtn = styled.button`
  width: 12px;
  height: 12px;
  border: none;
  outline: none;
  position: absolute;
  padding: 0;
  top: 4px;
  right: 0;
  background: transparent;
  cursor: pointer;
`;
