import { css } from '@emotion/react';

export default function HomeTitles() {
  const h1Css = css({
    margin: '0',
    '@media (max-width: 576px)': {
      fontSize: '2.4rem'
    }
  });

  const h2Css = css({
    margin: '0',
    color: 'rgb(26, 106, 162)',
    fontSize: '2.4rem',
    '@media (max-width: 576px)': {
      fontSize: '1.8rem'
    }
  });

  return (
    <>
      <h1 css={h1Css}>Gwendal Le Bris</h1>
      <h2 css={h2Css}>Fullstack Developer</h2>
    </>
  );
}
