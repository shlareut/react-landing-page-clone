import React from 'react';
import avatar from './avatar1.jpeg';
import TestimonialBox from './components/TestimonialBox';
import sectionStyles from './Section.module.scss';
import styles from './Section6.module.scss';

export default function Section6() {
  return (
    <section style={{ backgroundColor: '#E2E2F4' }}>
      <div className={sectionStyles.backgroundImages}>
        <img
          className={sectionStyles.leftImage}
          alt="left-scribble"
          style={{ top: '670px', left: '-130px' }}
          src="https://hagrid.io/assets/images/scribble-6.svg"
        />
        <img
          className={sectionStyles.rightImage}
          alt="right-scribble"
          style={{ top: '-100px', right: '-125px' }}
          src="https://hagrid.io/assets/images/scribble-7.svg"
        />
      </div>
      <div className={sectionStyles.headerContent}>
        <h1>What they are saying about hagrid...</h1>
        <h2>People ❤️ us</h2>
      </div>
      <div className={sectionStyles.bodyContent}>
        <div className={styles.testimonialGrid}>
          <div className={styles.gridColumn}>
            <TestimonialBox
              text="Brilliant idea to replace knowledge bases 😱"
              name="Stefan Wirth"
              profession="Product @NicheMates"
              avatar={avatar}
            />
            <TestimonialBox
              text="This is a really great idea, will help solve problems more effectively, and save time too. Love it!"
              name="Connor Jewiss"
              profession="Tech Journalist"
              avatar={avatar}
            />
            <TestimonialBox
              text="#NoCode taking care of content and utilizing users! What's not to love..."
              name="Areeb Mianoor"
              profession="Founder @ProjectANT"
              avatar={avatar}
            />
          </div>
          <div className={styles.gridColumn}>
            <TestimonialBox
              text="This is dope! I love that is notifies users of answered questions after they leave the website."
              name="Dawn Veltri"
              profession="Marketing @RAEK"
              avatar={avatar}
            />
            <TestimonialBox
              text="I have been looking for an elegant solution for discussions board and today I think I found what I want. Love the product."
              name="Sharath Kuruganty"
              profession="Co-founder @shoutout"
              avatar={avatar}
            />
            <TestimonialBox
              text="The combination of FAQ, automation and user generated content can't be wrong."
              name="Piotr Pawłowski"
              profession="Product @Firmbee"
              avatar={avatar}
            />
          </div>
          <div className={styles.gridColumn}>
            <TestimonialBox
              text="Exciting... and great concept 🔥 Should disrupt traditional emails and chats for customer support."
              name="Ilya Novohatskyi"
              profession="Founder of Microns.io"
              avatar={avatar}
            />
            <TestimonialBox
              text="Absolutely love this! This is a great and easy to connect with your customers."
              name="Brento Box"
              profession="Micro Indie Maker"
              avatar={avatar}
            />
            <TestimonialBox
              text="Great Idea. It's so helpful to products launches, to get first feedbacks and the first customers."
              name="Maicon Ferreira"
              profession="CEO @ChartPay"
              avatar={avatar}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
