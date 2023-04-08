import React, { useState } from 'react';
import classes from './Home.module.scss';
import banner_2 from '../../assets/img/banner_2.png';
import banner_3 from '../../assets/img/banner_3.svg';
import banner_3_mobile from '../../assets/img/banner_3_mobile.svg';
import featureImg_1 from '../../assets/img/feature_image_1.png';
import featureImg_2 from '../../assets/img/feature_image_2.png';
import featureImg_3 from '../../assets/img/feature_image_3.png';
import featureImg_4 from '../../assets/img/feature_image_4.png';
import chat_1 from '../../assets/img/feature_chat_1.svg';
import chat_2 from '../../assets/img/feature_chat_2.svg';
import chat_3 from '../../assets/img/feature_chat_3.svg';
import chat_4 from '../../assets/img/feature_chat_4.svg';
import chat_5 from '../../assets/img/feature_chat_5.svg';
import chat_6 from '../../assets/img/feature_chat_6.svg';
import chat_7 from '../../assets/img/feature_chat_7.svg';
import chat_8 from '../../assets/img/feature_chat_8.svg';
import chat_9 from '../../assets/img/feature_chat_9.svg';
import chains from '../../assets/img/feature_chains.svg';
import metamask from '../../assets/img/feature_metamask.svg';
import walletConnect from '../../assets/img/feature_wallet_connect.svg';
import rainbow from '../../assets/img/feature_rainbow.svg';
import coinbase from '../../assets/img/feature_coinbase.svg';
import blog_1 from '../../assets/img/blog_1.svg';
import blog_2 from '../../assets/img/blog_2.svg';
import read_1 from '../../assets/img/read_1.png';
import read_2 from '../../assets/img/read_2.png';
import read_3 from '../../assets/img/read_3.png';
import testimonial_1 from '../../assets/img/testimonial_1.svg';
import testimonial_2 from '../../assets/img/testimonial_2.svg';
import testimonial_3 from '../../assets/img/testimonial_3.svg';
import star from '../../assets/img/star.svg';
import starActive from '../../assets/img/star_active.svg';

function Home() {
  const [featureTab, setFeatureTab] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const featureData = [
    {
      title: 'Activity Stream',
      desc: <>Stay ahead of the game by watching the activity of your friends and communities in real-time!</>,
      img: featureImg_1,
      contents: <>
        <img className={classes.chat_1} src={chat_1} alt='chat-1' />
        <img className={classes.chat_2} src={chat_2} alt='chat-2' />
        <img className={classes.chat_3} src={chat_3} alt='chat-3' />
      </>
    },
    {
      title: 'Feeds',
      desc: <>Create Feeds to group accounts and their activity! <br/><br/> Explore Feeds that others have created to learn something new!</>,
      img: featureImg_2,
      contents: <>
        <img className={classes.chat_4} src={chat_4} alt='chat-4' />
        <img className={classes.chat_5} src={chat_5} alt='chat-5' />
        <img className={classes.chat_6} src={chat_6} alt='chat-6' />
      </>
    },
    {
      title: 'Wallet Messaging',
      desc: <>Chat with friends and randos alike, using messaging protocols like XMTP and Chainmail!</>,
      img: featureImg_3,
      contents: <>
        <img className={classes.chat_7} src={chat_7} alt='chat-7' />
        <img className={classes.chat_8} src={chat_8} alt='chat-8' />
        <img className={classes.chat_9} src={chat_9} alt='chat-9' />
      </>
    },
    {
      title: 'Cross-Chain',
      desc: <>Get a full picture by seeing what's happening across all EVM-based chains and L2's!<br/><br/>Blockso puts you closer to the things that you normally share with your friends, faster!</>,
      img: featureImg_4,
      contents: <>
        <img className={classes.chains} src={chains} alt='chains' />
      </>
    },
    {
      title: 'One-Click Connect',
      desc: <>Sign in using your favorite wallet! No need to create an account!</>,
      img: featureImg_4,
      contents: <>
        <img className={classes.metamask} src={metamask} alt='metamask' />
        <img className={classes.walletConnect} src={walletConnect} alt='wallet-connect' />
        <img className={classes.rainbow} src={rainbow} alt='rainbow' />
        <img className={classes.coinbase} src={coinbase} alt='coinbase' />
      </>
    },
  ]

  const testimonialData = [
    {
      name: "Digital Dealer",
      job: <>MINT Marketplace Founder & Active User</>,
      avatar: testimonial_1,
      title: "Feels good to be early!",
      stars: 5,
      desc: <>Blockso helped me find hype projects, <strong>early</strong>, on multiple occasions! Keep it up!!</>
    },
    {
      name: "Power",
      job: <>Purveyor of Fine Digital Art</>,
      avatar: testimonial_2,
      title: "It's honestly entertaining!",
      stars: 4,
      desc: <>I really enjoy scrolling through the feed and discovering new projects!<br />
        It feels like Instagram for web3! 4 stars because the UX can be improved.</>
    },
    {
      name: "Rich BTC Maxi",
      job: <>Active Trader</>,
      avatar: testimonial_3,
      title: "Loving the social aspect!",
      stars: 5,
      desc: <>I love it when my friends tag me on transactions! It's made it easier to hunt for gains with my tribe!</>
    }
  ]

  return (
    <div className={classes.home}>
      <section className={classes.banner}>
        <div className={classes.title}>
          Stay ahead of the curve!
        </div>
        <div className={classes.desc}>
          Find alpha, dodge exploits, learn new strategies, and share insights!
        </div>
        <div className={classes.desc}>
          All with your frens, all within the app!
        </div>
        <div className={classes.launch}>
          <div className={classes.launchBtn}>
            <a href="https://app.blockso.fun">Launch App</a>
          </div>
          <img className={classes.img_1} src={banner_2} alt='banner_2' />
          <img className={classes.img_2} src={banner_3} alt='banner_3' />
          <img className={classes.img_2_mobile} src={banner_3_mobile} alt='banner_3_mobile' />
        </div>
      </section>
      <section className={classes.features} id='features'>
        <div className={classes.title}>
          Power-packed Features!
        </div>
        <div className={classes.desc}>
          Click through to see some of what Blockso has to offer.
        </div>
        <div className={classes.feature}>
          <div className={classes.tabs}>
            {
              featureData.map((item, index) => (
                <div className={featureTab === index ? classes.tabActive : classes.tab} onClick={() => setFeatureTab(index)}>
                  {item.title}
                </div>
              ))
            }
          </div>
          <div className={classes.content}>
            <div className={classes.left}>
              <div className={classes.title}>
                {featureData[featureTab].title}
              </div>
              <div className={classes.desc}>
                {featureData[featureTab].desc}
              </div>
            </div>
            <div className={classes.right}>
              {featureData[featureTab].contents}
            </div>
          </div>
        </div>
      </section>
      <section className={classes.blog}>
        <div className={classes.left}>
          <div className={classes.title}>
            🔔 Web3 Notifications
          </div>
          <div className={classes.desc}>
            Stay connected with real-time alerts from all dapps in web3. Blockso shows you all your notifications in one place!
          </div>
          <img src={blog_1} alt='blog-1' />
        </div>
        <div className={classes.line} />
        <div className={classes.right}>
          <div className={classes.title}>
            <span style={{color: "red"}}>❤</span> User-Friendly Interface
          </div>
          <div className={classes.desc}>
            Simple and intuitive interface makes it enjoyable to keep up with what's going on!
          </div>
          <img src={blog_2} alt='blog-2' />
        </div>
      </section>
      {/*
      <section className={classes.read} id="blog">
        <div className={classes.title}>
          Case Studies
        </div>
        <div className={classes.desc}>
          Below are case studies of people that used Blockso and benefited!
        </div>
        <div className={classes.content}>
          <img src={read_1} alt='read-1' />
          <img src={read_2} alt='read-2' />
          <img src={read_3} alt='read-3' />
        </div>
      </section>
      */}
      <section className={classes.testimonials} id='testimonials'>
        <div className={classes.title}>
          Testimonials
        </div>
        <div className={classes.desc}>
          Read what some users have to say about Blockso!
        </div>
        <div className={classes.content}>
          <div className={classes.left}>
            {
              testimonialData.map((item, index) => (
                <div className={classes.person}>
                  <div className={index === activeTestimonial ? classes.activeCircle : classes.circle}></div>
                  <div className={index === activeTestimonial ? classes.activeFeature : classes.feature} onClick={() => setActiveTestimonial(index)}>
                    <img src={item.avatar} alt="User avatar" />
                    <div className={classes.intro}>
                      <div className={classes.name}>
                        {item.name}
                      </div>
                      <div className={classes.job}>
                        {item.job}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className={classes.right}>
            <div className={classes.title}>
              {testimonialData[activeTestimonial].title}
            </div>
            <div className={classes.stars}>
              <img src={testimonialData[activeTestimonial].stars < 1 ? star : starActive} alt='star' />
              <img src={testimonialData[activeTestimonial].stars < 2 ? star : starActive} alt='star' />
              <img src={testimonialData[activeTestimonial].stars < 3 ? star : starActive} alt='star' />
              <img src={testimonialData[activeTestimonial].stars < 4 ? star : starActive} alt='star' />
              <img src={testimonialData[activeTestimonial].stars < 5 ? star : starActive} alt='star' />
            </div>
            <div className={classes.desc}>
              {testimonialData[activeTestimonial].desc}
            </div>
          </div>
        </div>
      </section>
      <section className={classes.join}>
        <div className={classes.content}>
          <div className={classes.title}>
            What are you waiting for?
          </div>
          <div className={classes.desc}>
            Jump in and see what the fuss is about!
          </div>
        </div>
        <div className={classes.demoBtn}>
          <a href="https://app.blockso.fun">Launch App</a>
        </div>
      </section>
    </div>
  )
}

export default Home;
