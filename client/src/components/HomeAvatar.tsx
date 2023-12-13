import { css } from '@emotion/react';

export default function HomeAvatar() {
  const avatarCss = css({
    borderRadius: '50%',
    width: '10rem',
    height: '10rem',
    margin: '0 auto'
  });

  return (
    <>
      <img
        src="src/assets/portrait.jpg"
        alt="Gwendal Le Bris picture"
        css={avatarCss}
      />
    </>
  );
}
