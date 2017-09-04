// @flow

import { css } from 'styled-components';

export const media = {
  fromSm: (...args: any) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  fromMd: (...args: any) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,
  fromLg: (...args: any) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
  fromSmHeight: (...args: any) => css`
    @media (min-height: 768px) {
      ${css(...args)}
    }
  `
};
