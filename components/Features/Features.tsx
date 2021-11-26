import styled from 'styled-components';

import Row from 'Components/Row';

const Features = styled(Row).attrs({ as: 'ol' })`
  --columns: 1fr 1fr 1fr;

  padding: calc(var(--section-gap) * 0.3) 0 0 calc(var(--title-font-size) * 0.3);

  counter-reset: feature;
`;

export default Features;
