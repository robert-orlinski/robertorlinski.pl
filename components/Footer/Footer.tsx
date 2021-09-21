import styled from 'styled-components';

import { Wrapper } from 'Components/Wrapper';
import { FooterMenu } from './Menu';
import { Brand } from 'Components/Brand';
import { TextWithLinks } from 'Components/TextWithLinks';

import { contentMenu } from 'Data/footer/contentMenu';
import { formalitiesMenu } from 'Data/footer/formalitiesMenu';
import { copyright } from 'Data/footer/copyright';
import { from, to } from 'Devices';
import { Separator } from 'Components/Separator';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper withSpaceAbove>
      <Top>
        <FooterMenu source={contentMenu} />
        <BrandContainer>
          <Brand />
          <BrandSeparator />
        </BrandContainer>
        <FooterMenu source={formalitiesMenu} />
      </Top>
      <Bottom size="tiny">
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
  border-top: 1px solid var(--line-gray);

  @media ${to.tablet} {
    padding: 2.8rem 0;
  }
`;

const Top = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: var(--logo-height);

  margin-bottom: 3.35rem;

  @media ${to.tabletL} {
    flex-direction: column;
    margin-bottom: 1.6rem;
  }
`;

const BrandContainer = styled.div`
  @media ${from.tabletL} {
    display: flex;
    justify-content: center;

    position: absolute;

    left: 0;
    right: 0;

    z-index: -1;
  }

  @media ${to.tabletL} {
    order: -1;
  }
`;

const BrandSeparator = styled(Separator)`
  margin: 0.5rem auto 1.5rem auto;

  @media ${from.tabletL} {
    display: none;
  }
`;

const Bottom = styled(Wrapper)`
  font-size: 0.9rem;
  text-align: center;
`;
