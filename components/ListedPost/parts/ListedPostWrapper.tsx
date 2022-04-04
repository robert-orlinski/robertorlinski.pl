import styled from 'styled-components';

import { between } from 'Devices';

export type ListedPostWrapperProps = {
  withFeaturedImageHidden?: boolean;
};

const ListedPostWrapper = styled.li<ListedPostWrapperProps>`
  position: relative;

  margin-bottom: ${({ withFeaturedImageHidden }) => (withFeaturedImageHidden ? '2rem' : '0')};

  @media ${between.tabletAndTabletL} {
    display: flex;

    & > * {
      flex: 1 1 0;
    }
  }
`;

export default ListedPostWrapper;
