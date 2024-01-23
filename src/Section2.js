import React from 'react';
import ValuepropBox from './components/ValuepropBox';
import sectionStyles from './NewSection.module.scss';
import styles from './Section2.module.scss';

export default function Section2() {
  return (
    <section style={{ backgroundColor: '#FAFAFA' }}>
      <div className={sectionStyles.backgroundImages}>
        <img
          className={sectionStyles.leftImage}
          alt="left-scribble"
          style={{ top: '530px', left: '-170px' }}
          src="https://hagrid.io/assets/images/scribble-9.svg"
        />
        <img
          className={sectionStyles.rightImage}
          alt="right-scribble"
          style={{ top: '-128px', right: '-140px' }}
          src="https://hagrid.io/assets/images/scribble-8.svg"
        />
      </div>
      <div className={sectionStyles.headerContent}>
        <h1>All of the results - none of the work!</h1>
        <h2>
          In 15 minutes get set for automatic SEO, social proof and meaningful
          engagement
        </h2>
      </div>
      <div className={sectionStyles.bodyContent}>
        <div className={styles.valuePropsList}>
          <ValuepropBox
            title="Authenticated users"
            subTitle="Socially authenticated posts. So no SPAM. Spend time on meaningful
        questions from high-intent visitors."
            url="https://hagrid.io/assets/images/authentication.svg"
          />
          <ValuepropBox
            title="Respect visitors privacy"
            subTitle="Visitors can post anonymously, encouraging honest QnA and protecting their data."
            url="https://hagrid.io/assets/images/data-security.svg"
          />
          <ValuepropBox
            title="After they`ve left"
            subTitle="Reach visitors, notify them of your responses, even after they have left your website. Even for anonymous posts!"
            url="https://hagrid.io/assets/images/discussions.svg"
          />
          <ValuepropBox
            title="Seed your questions"
            subTitle="Don't wait till they ask. Publish your own FAQ, to kindle the conversation, and guide customers."
            url="https://hagrid.io/assets/images/faq-base.svg"
          />
          <ValuepropBox
            title="Automatic SEO"
            subTitle="hagrid automatically feeds your QnA to the Google FAQ Schema, rank higher with zero effort."
            url="https://hagrid.io/assets/images/seo.svg"
          />
          <ValuepropBox
            title="Hyperintelligent Autocomplete"
            subTitle="Get them to the answers, while they are asking the questions"
            url="https://hagrid.io/assets/images/suggestions.svg"
          />
          <ValuepropBox
            title="Powerful and flexible"
            subTitle="Order questions as you like, respond in private, restrict answers to particular pages and anything else you can think of"
            url="https://hagrid.io/assets/images/rocket.svg"
          />
          <ValuepropBox
            title="Speak any language"
            subTitle="We support all the major languages of the world. If we don't speak yours, we'll add it in 15 minutes."
            url="https://hagrid.io/assets/images/globe.svg"
          />
          <ValuepropBox
            title="Infinite customisation"
            subTitle="Get hagrid to match your webpage brand and theme, down to the last pixel; without writing any code."
            url="https://hagrid.io/assets/images/controls.svg"
          />
        </div>
      </div>
    </section>
  );
}
