import styled from 'styled-components';

import { Wrapper } from '../Wrapper';
import { FooterMenu } from './FooterMenu';
import { Brand } from '../Brand';
import { TextWithLinks } from '../TextWithLinks';

import { contentMenu } from 'Data/footer/contentMenu';
import { formalitiesMenu } from 'Data/footer/formalitiesMenu';
import { copyright } from 'Data/footer/copyright';
import { to } from 'Devices';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Top>
        <FooterMenu source={contentMenu} />
        <BrandContainer>
          <Brand />
        </BrandContainer>
        <FooterMenu source={formalitiesMenu} />
      </Top>
      <Bottom>
        <p>Copyright | {currentYear}</p>
        <TextWithLinks text={copyright} />
      </Bottom>
    </FooterWrapper>
  );
};

const FooterWrapper = styled(Wrapper).attrs({
  as: 'footer',
})`
  padding: 3.8rem 0;
  border-top: 1px solid var(--blue-gray);

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

const BrandContainer = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;

  left: 0;
  right: 0;

  z-index: -1;
`;

const Bottom = styled(Wrapper)`
  --width: 460px;

  font-size: 0.9rem;
  text-align: center;

  @media ${to.tablet} {
    --width: 400px;
  }
`;
