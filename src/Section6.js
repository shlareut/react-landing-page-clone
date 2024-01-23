import React from 'react';
import TestimonialBox from './components/TestimonialBox';
import sectionStyles from './NewSection.module.scss';
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
              avatar="https://v5.airtableusercontent.com/v3/u/25/25/1706047200000/jeGz1suEztqqbQbHsd2mkg/g0_YKAjKyyb9fPeCuuNHJC68Wwuhlk9DqcUJniOtG_mmasXr8fIQYJdD1B7BLMTtmRL0xbiE-K0LusqcAtuvLLWKgseKc-lDeNUHGEKTVJ1r-Hv7b-K3HwpJokiBaOjvt5fJd7ZUjUAV2zJD9E7nOw/4DgyfMDrSMIYu4m9BlfFMfNmRvD6vF1-rMxaYCfC75k"
            />
            <TestimonialBox
              text="This is a really great idea, will help solve problems more effectively, and save time too. Love it!"
              name="Connor Jewiss"
              profession="Tech Journalist"
              avatar="https://v5.airtableusercontent.com/v3/u/25/25/1706047200000/61dQ1QnKAqMP3y0V9U63PA/ZtAdPDyNCtRaMHE5z8W0tJa0GJLD6BJ_NtnARDEcZsJrBJQf8cz3DlrWalWPU1_1l3EUCczbgoqo2y-T8Hvx3hsB73LGK4AxER0oK2bokFXABppBLiPHmW8rlb6_FHNyzmAquSQ6iJ3UUlCsXmdmog/mFeMCY_-8x0gf_PaL_rcUpBxmylgXjZvwjN5_QfU7-U"
            />
            <TestimonialBox
              text="#NoCode taking care of content and utilizing users! What's not to love..."
              name="Areeb Mianoor"
              profession="Founder @ProjectANT"
              avatar="https://v5.airtableusercontent.com/v3/u/25/25/1706047200000/xEKVDLWrR6TvBZiRC2fSvg/cBaJqrU-GJIowCFcQW6fcCQaNWMAWYW_idzPaVXwEaUZZ4j_46Ss8X-YOl1gDMktlmVtOKZpKkM-fy8kPtQupuiw42P3WbcGihGsoQPJAbl-2k8rqjBtYBevavUZGUSQL9Ji3oYWW3Kwhu0KHLF2Cw/iYTD-YgUfPl7-dXjJLqetmXoa0rRAcLsJQ-kxWpDPFY"
            />
          </div>
          <div className={styles.gridColumn}>
            <TestimonialBox
              text="This is dope! I love that is notifies users of answered questions after they leave the website."
              name="Dawn Veltri"
              profession="Marketing @RAEK"
              avatar="https://v5.airtableusercontent.com/v3/u/25/25/1706047200000/huUQxYxDXOmKG4JTAWC6ZA/qK68PQqlGBJVhjKmHNlufzgho_5xMi2_Rpd2OBtYJk0UnECb73Q7xB1hYR6GUqiUvRzIPscSEmrHTTex0bl_XUOjPWkel7cOzh3dZgGvyIVved0YYi0d2hpbbfBddx9wDXEshniXWMwL4Ruo4Cl1ZQ/eFetZLBBV7P6ZXtS96I0eKmiLZC-oqFvJUfKSSOjFRA"
            />
            <TestimonialBox
              text="I have been looking for an elegant solution for discussions board and today I think I found what I want. Love the product."
              name="Sharath Kuruganty"
              profession="Co-founder @shoutout"
              avatar="https://v5.airtableusercontent.com/v3/u/25/25/1706047200000/f38S9V23Wwn5LgaTW0PUnA/yam03ganl7FEFvzPIM3-RtFC1yCeM9c9rx8sQbf50eYc1AlSmX7IX-_7pIY_DQZ7vDUgwHnix_zMHd2dJ831tLvLJHRyeO8n6Jarex-5Dn6n_pJJ_3zoXxpBtUfuLkfMqFQMAE6-z22uIn51LsKYUA/dO7JtS2cvObGyCogNrUKD9Znez5VBxnToNTGgs3acpw"
            />
            <TestimonialBox
              text="The combination of FAQ, automation and user generated content can't be wrong."
              name="Piotr Pawłowski"
              profession="Product @Firmbee"
              avatar="https://v5.airtableusercontent.com/v3/u/25/25/1706047200000/lZHXwxLLPxWgtmRvSa0W1g/MnBJZOzO3I07Bw7zopslnAXVPY7pB7RpmLeUJqS3apsniXcCVYbfOsN2U0aaPd_sfQrxlI6Da04QhYMPUNjiHTmNZ2hnrwhjUv3K1chV7VlPGxm3zDvzQ9XsMhRDJ9-rYq6I_Dh_lBBqkEPFF5P5lhnD_cM8zPX_M56nkr99o8p1FR8TNq2F59fJy0RFggoN/xrZ345eYPZKkiQ5llKcaPxG8o5bEYZlYX1vZE7mjjmE"
            />
          </div>
          <div className={styles.gridColumn}>
            <TestimonialBox
              text="Exciting... and great concept 🔥 Should disrupt traditional emails and chats for customer support."
              name="Ilya Novohatskyi"
              profession="Founder of Microns.io"
              avatar="https://v5.airtableusercontent.com/v3/u/25/25/1706047200000/Qn2Gz-p9hzqxtNiXAMqotg/C3WBSPaG5fisr6awFBUzLw1FUIQI84O3-ptdyGbO1FISJZQ9dH-BN_4poo_0paOFugQjtM4an74mCsz5349fPAYXnNqfyXrgIcuS55OYdUEk1YoQMfBbdme8cPeTpCMNnL25jBb_9B7EE7icEuwfhQ/EClrKB67B-eAdAYLoljlYsRCvlXOL58PgQpReEM0DEs"
            />
            <TestimonialBox
              text="Absolutely love this! This is a great and easy to connect with your customers."
              name="Brento Box"
              profession="Micro Indie Maker"
              avatar="https://v5.airtableusercontent.com/v3/u/25/25/1706047200000/18NL3NwXJVaNGKJ29R6Ddw/YT7gz9SDgDFedUTJDG1sZO7Dd7AWEScc4PnY0kwH1HFJDa6bFk1yxN2IM1Hcbpze-wnq3Yk3g4A8fhFNs5hAwpJpubf1qgBBu_u1yz23ZvrIvdRnLkWEjsmi2QH1u1ucW9m6hq9cyJ1Ap9wtmuc4Bw/OegFqWFLj7Tyq41HfRQf7tm_QCJ7bHRxjHlHrcjQVrI"
            />
            <TestimonialBox
              text="Great Idea. It's so helpful to products launches, to get first feedbacks and the first customers."
              name="Maicon Ferreira"
              profession="CEO @ChartPay"
              avatar="https://v5.airtableusercontent.com/v3/u/25/25/1706047200000/n_aic8M-mS2Y032vT7hruw/T5VfpMFs7wm5ETVQh8QPpJzrdLDGjoipf-SKLC1CT1yqOWIOUqcmlFI1SuaVOGjLa3ebELEEG55zrchWj_f4SwPPDX8Y90AdKQPv1w8m1XE_Goay0YobQfSXFgcUIeUE9_XmkQUoz6w8S2yEMfuRYQ/ec7mth9tdBxdSBcKwH8weNT2ENchpvU69L-vDwR3eTo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
