import { css } from '@emotion/react';
import HomeAvatar from '../components/HomeAvatar';
import HomeTitles from '../components/HomeTitles';
import HomeButtons from '../components/HomeButtons';

export default function Home() {
  const homeCss = css({
    textAlign: 'center',
    margin: '0 auto'
  });

  return (
    <div css={homeCss}>
      <HomeAvatar />
      <HomeTitles />
      <HomeButtons />
      <p>Hello, I'm Gwendal, and I'm a Freelance Fullstack Developer.</p>
      <p>
        After having completed the web development course of Le Wagon in
        December 2022, I have done 3 Fullstack websites and the Back-End for
        another one. I am also Lecturer and Teacher Assistant for Le Wagon since
        January 2023. I am available to work on web projects, as a Fullstack or
        Back-end Developer.
      </p>
      <p>
        I have also an academic background in science, IT and management (EDHEC
        Business School), as well as 4 years of experience in the event
        industry.
      </p>
      <p>Feel free to contact me to speak about your projects !</p>
    </div>
  );
}
