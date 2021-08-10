import styled from 'styled-components';

import { WrapperBase, WideWrapper } from '../Wrapper';
import { FooterMenu } from './Menu';
import { Brand } from '../Brand';
import { TextWithLinks } from '../TextWithLinks';

import { contentMenu } from '../../data/footer/contentMenu';
import { formalitiesMenu } from '../../data/footer/formalitiesMenu';
import { copyright } from '../../data/footer/copyright';
import { flex } from '../../helpers/styles/mixins';
import { to } from '../../helpers/styles/devices';

const FooterWrapper = styled(WideWrapper)`
  padding: 70px 0;

  @media ${to.tablet} {
    padding: 50px 0;
  }
`;

const Top = styled.section`
  ${flex({ justifyContent: 'space-between' })}
  margin-bottom: 60px;

  @media ${to.tabletL} {
    margin-bottom: 50px;
  }

  @media ${to.tablet} {
    flex-direction: column;
    margin-bottom: 35px;
  }
`;

const Bottom = styled(WrapperBase)`
  max-width: 460px;

  font-size: 0.9rem;
  text-align: center;

  @media ${to.tablet} {
    max-width: 400px;
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
