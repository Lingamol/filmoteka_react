import styled from '@emotion/styled';

export const CardItem = styled.li`
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 7px -7px 21px rgba(123, 64, 22, 0.6);
  }
  @media screen and (min-width: 768px) {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.03);
    }
  }

  margin-bottom: 20px;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
    margin-right: 32px;
    margin-bottom: 32px;

    &:nth-child(2n) {
      margin-right: 0;
    }
    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 32px) / 3);
    margin-right: 16px;
    margin-bottom: 32px;

    &:nth-child(2n) {
      margin-right: 16px;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }

    &:nth-last-child(3) {
      margin-bottom: 0;
    }
  }
`;

export const CardLink = styled.a`
  text-decoration: none;
  display: block;
`;

export const CardImg = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 398px;
  @media screen and (min-width: 768px) {
    height: 455px;
  }
  @media screen and (min-width: 1280px) {
    height: 574px;
  }
`;
export const CardTitle = styled.h3`
  margin-top: 10px;
  line-height: 1.17;
  text-transform: uppercase;
  color: #000000;
  font-weight: 500;
  padding-left: 5px;

  @media screen and (min-width: 768px) {
    line-height: 1.3;
  }
  @media screen and (min-width: 1280px) {
    line-height: 1.2;
    font-size: 20px;
  }
`;

export const CardGenre = styled.span`
  font-weight: 500;
  line-height: 1.3;
  color: #ff6b08;
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

// .card-set__genre,
// .card-set__production-year {
//   color: #ff6b08;
// }

export const CardDescription = styled.div`
  align-items: baseline;
  display: flex;
  padding-bottom: 2px;
  padding-left: 5px;
`;
// .genre {
//   color: #ff6b08;
// }
// .vote {
//   width: 36px;
//   height: 16px;
//   background-color: var(--secondary-orange-color);
//   border-radius: 5px;
//   color: var(--white-color);
//   font-weight: 500;
//   font-size: 12px;
//   line-height: 1.16;
//   padding: 2px 6px;
//   margin-left: 9px;
//   text-align: center;
//   @media screen and (min-width: 768px) {
//     padding: 2px 9px;
//   }
// }

// .flex {
//   display: flex;
//   align-items: center;
// }
