import { css } from '@emotion/react';
import Button from '@mui/material/Button';

export default function About() {
  const aboutCss = css({
    textAlign: 'center',
    margin: '0 auto'
  });

  return (
    <div css={aboutCss}>
      <h2>About Me</h2>
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
      <Button variant="contained">Contact Me</Button>
    </div>
  );
}
