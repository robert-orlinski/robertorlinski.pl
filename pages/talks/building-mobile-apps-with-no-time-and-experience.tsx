import Wrapper from 'Components/Wrapper';
import Head from 'Components/Head';

import siteName from 'SiteName';
import addressSeparator from 'AddressSeparator';

import DistantButton from 'Components/DistantButton';
import PostHeader from 'Components/PostHeader';
import RawHeader from 'Components/RawHeader';
import H2 from 'Components/H2';

import featuredImage from 'Images/featured-images/mobile-apps.jpg';
import P from 'Components/P';
import Ul from 'Components/Ul';
import Li from 'Components/Li';
import Link from 'Components/Link';

const MobileAppsTalk = () => (
  <>
    <Head
      title={`How to build a mobile app with no time, experience but at least knowing React 🤷‍♂️ ${addressSeparator} ${siteName}`}
      description="On 23th of January 2023 I gave a talk on building mobile apps as front-end developers without knowing on how to do it. Here are slides, recording, and things I've talked about!"
      featuredImage={featuredImage.src}
      contentType="article"
      publicationDate="23.01.2023"
    />
    <RawHeader />
    <Wrapper as="main" size="medium" withSpaceBelow>
      <PostHeader
        title="How to build a mobile app with no time, experience but at least knowing React 🤷‍♂️"
        date="23.01.2023"
        featuredImage={featuredImage}
        topics={['Front-end']}
      />
      <H2>Slides:</H2>
      <DistantButton href="https://static.robertorlinski.pl/building-mobile-apps-with-no-time-and-experience.pdf">
        Get slides
      </DistantButton>
      <H2>Recording:</H2>
      <P>Will be available soon!</P>
      <H2>Things I've talked about:</H2>
      <Ul>
        <Li>Scenario in which we have 2 months to build our app 😬</Li>
        <Li>
          4 options for building our app. 2 "useless" options (looking at the fact that we have 2
          months to build it): Native or Compiled app and 2 "useful" options: Hybrid app or PWA.
          More info on every of them.
        </Li>
        <Li>Hybrid looks like the best option for our scenario.</Li>
        <Li>More on Capacitor and Ionic - technologies we can use.</Li>
        <Li>Setting up our app and looking into the code.</Li>
        <Li>The rest is classic web app creation with a bit of help...</Li>
        <Li>Then we do the deployment and app release 🚀</Li>
        <Li>This is how we get our app (hopefully on deadline).</Li>
        <Li>
          Couple of FYIs (adding Capacitor to existing project easily, omitting app's review while
          updating our app, and easily making PWA from our Hybrid app).
        </Li>
        <Li>Small contest and Q&A 🥳</Li>
      </Ul>
      <H2>Mentioned sources:</H2>
      <Ul>
        <Li>
          <Link href="#" isExternal isUnderlineVisible>
            How to bypass mobile app’s review thanks to micro frontends 🤯
          </Link>
        </Li>
        <Li>
          <Link
            href="https://tinyletter.com/ionic-max/letters/how-capacitor-works"
            isExternal
            isUnderlineVisible
          >
            How Capacitor Works
          </Link>
        </Li>
        <Li>
          <Link
            href="https://javascript.plainenglish.io/capacitor-turn-your-web-app-into-a-mobile-app-4d114249e55b"
            isExternal
            isUnderlineVisible
          >
            CapacitorJS: Turn Your Web App into a Mobile App
          </Link>
        </Li>
        <Li>
          <Link href="https://ionicframework.com/docs" isExternal isUnderlineVisible>
            Ionic Docs
          </Link>
        </Li>
        <Li>
          <Link href="https://ionicframework.com/docs/developing/ios" isExternal isUnderlineVisible>
            Ionic: iOS Development
          </Link>
        </Li>
        <Li>
          <Link
            href="https://ionicframework.com/docs/developing/android"
            isExternal
            isUnderlineVisible
          >
            Ionic: Android Development
          </Link>
        </Li>
        <Li>
          <Link href="https://capacitorjs.com/docs/ios/custom-code" isExternal isUnderlineVisible>
            Custom Native iOS Code
          </Link>
        </Li>
        <Li>
          <Link
            href="https://capacitorjs.com/docs/android/custom-code"
            isExternal
            isUnderlineVisible
          >
            Custom Native Android Code
          </Link>
        </Li>
        <Li>
          <Link
            href="https://ionicframework.com/docs/deployment/app-store"
            isExternal
            isUnderlineVisible
          >
            Ionic: iOS App Store Deployment
          </Link>
        </Li>
        <Li>
          <Link
            href="https://ionicframework.com/docs/deployment/play-store"
            isExternal
            isUnderlineVisible
          >
            Ionic: Android Play Store Deployment
          </Link>
        </Li>
        <Li>
          <Link href="https://developer.android.com/studio/publish" isExternal isUnderlineVisible>
            Android Developer: Publish your app
          </Link>
        </Li>
        <Li>
          <Link
            href="https://capacitorjs.com/docs/getting-started#adding-capacitor-to-your-existing-web-application"
            isExternal
            isUnderlineVisible
          >
            Adding Capacitor to your existing web application
          </Link>
        </Li>
        <Li>
          <Link href="https://ionicframework.com/docs/react/pwa" isExternal isUnderlineVisible>
            Ionic: Progressive Web Apps in React
          </Link>
        </Li>
      </Ul>
    </Wrapper>
  </>
);

export default MobileAppsTalk;
