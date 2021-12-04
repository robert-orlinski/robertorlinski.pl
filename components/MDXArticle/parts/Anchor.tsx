import Link from 'Components/Link';

const Anchor = ({ children, href }: any) => {
  const childrenIsStyledImage = children && children.type && children.type.name === 'Img';

  if (childrenIsStyledImage && !href) {
    return (
      <Link href={children.props.src} isExternal isUnderlineVisible>
        {children}
      </Link>
    );
  }

  return <Link {...{ children, href }} isUnderlineVisible />;
};

export default Anchor;
