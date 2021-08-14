import styled from 'styled-components';

import { WrapperBase } from '../WrapperBase';
import { WideWrapper } from '../WideWrapper';
import { FooterMenu } from './Menu';
import { Brand } from '../Brand';
import { TextWithLinks } from '../TextWithLinks';

import { contentMenu } from '../../data/footer/contentMenu';
import { formalitiesMenu } from '../../data/footer/formalitiesMenu';
import { copyright } from '../../data/footer/copyright';
import { to } from '../../helpers/styles/devices';

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

const FooterWrapper = styled(WideWrapper)`
  padding: 3.8rem 0;

  @media ${to.tablet} {
    padding: 2.8rem 0;
  }
`;

const Top = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 3.35rem;

  @media ${to.tabletL} {
    margin-bottom: 2.8rem;
  }

  @media ${to.tablet} {
    flex-direction: column;
    margin-bottom: 1.6rem;
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
