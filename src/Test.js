import React from 'react';
import styles from './Test.module.scss';
import ValueProp from './ValueProp';

export default function Test() {
  return (
    <div className={styles.valuePropsList}>
      <ValueProp
        title="Authenticated users"
        subTitle="Socially authenticated posts. So no SPAM. Spend time on meaningful
questions from high-intent visitors."
        url="https://hagrid.io/assets/images/authentication.svg"
      />
      <ValueProp
        title="Respect visitors privacy"
        subTitle="Visitors can post anonymously, encouraging honest QnA and protecting their data."
        url="https://hagrid.io/assets/images/data-security.svg"
      />
      <ValueProp
        title="After they`ve left"
        subTitle="Reach visitors, notify them of your responses, even after they have left your website. Even for anonymous posts!"
        url="https://hagrid.io/assets/images/discussions.svg"
      />
      <ValueProp
        title="Seed your questions"
        subTitle="Don't wait till they ask. Publish your own FAQ, to kindle the conversation, and guide customers."
        url="https://hagrid.io/assets/images/faq-base.svg"
      />
      <ValueProp
        title="Automatic SEO"
        subTitle="hagrid automatically feeds your QnA to the Google FAQ Schema, rank higher with zero effort."
        url="https://hagrid.io/assets/images/seo.svg"
      />
      <ValueProp
        title="Hyperintelligent Autocomplete"
        subTitle="Get them to the answers, while they are asking the questions"
        url="https://hagrid.io/assets/images/suggestions.svg"
      />
      <ValueProp
        title="Powerful and flexible"
        subTitle="Order questions as you like, respond in private, restrict answers to particular pages and anything else you can think of"
        url="https://hagrid.io/assets/images/rocket.svg"
      />
      <ValueProp
        title="Speak any language"
        subTitle="We support all the major languages of the world. If we don't speak yours, we'll add it in 15 minutes."
        url="https://hagrid.io/assets/images/globe.svg"
      />
      <ValueProp
        title="Infinite customisation"
        subTitle="Get hagrid to match your webpage brand and theme, down to the last pixel; without writing any code."
        url="https://hagrid.io/assets/images/controls.svg"
      />
    </div>
  );
}
