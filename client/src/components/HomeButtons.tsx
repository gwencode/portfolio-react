import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

export default function HomeButtons() {
  const buttonsCss = css({
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    margin: '2rem 0'
  });

  const buttonCss = css({
    backgroundImage: 'linear-gradient(-180deg, #37AEE2 0%, #1E96C8 100%)',
    borderRadius: '.5rem',
    boxSizing: 'border-box',
    color: '#FFFFFF',
    display: 'flex',
    fontSize: '16px',
    justifyContent: 'center',
    padding: '1rem 1.75rem',
    textDecoration: 'none',
    border: '0',
    cursor: 'pointer',
    userSelect: 'none',
    touchAction: 'manipulation',
    ':hover': {
      backgroundImage: 'linear-gradient(-180deg, #1D95C9 0%, #17759C 100%)',
      color: '#FFFFFF'
    },
    '@media (min-width: 768px)': {
      padding: '1rem 2rem'
    }
  });

  return (
    <div css={buttonsCss}>
      <Link to="/contact" css={buttonCss}>
        Contact me
      </Link>
      <a href="#resume" css={buttonCss}>
        Resume
      </a>
    </div>
  );
}
