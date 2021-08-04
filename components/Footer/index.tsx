import styled from 'styled-components';

import { WideWrapper } from '../Foundations/Wrapper';
import { Top } from './Top';
import { Bottom } from './Bottom';
import { FooterMenu } from './Menu';
import { Brand } from '../Brand';
import { TextWithLinks } from '../TextWithLinks';

import { contentMenu } from '../../helpers/content/footer/contentMenu';
import { formalitiesMenu } from '../../helpers/content/footer/formalitiesMenu';
import { copyright } from '../../helpers/content/footer/copyright';
import { to } from '../../helpers/styles/devices';

const FooterWrapper = styled(WideWrapper)`
  padding: 70px 0;

  @media ${to.tablet} {
    padding: 50px 0;
  }
`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper as="footer">
      <Top>
        <FooterMenu source={contentMenu} />
        <Brand />
        <FooterMenu source={formalitiesMenu} />
      </Top>
      <Bottom>
        <p>Copyright | {currentYear}</p>
        <TextWithLinks text={copyright} />
      </Bottom>
    </FooterWrapper>
  );
};
