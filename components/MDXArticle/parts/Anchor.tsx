import Link from 'Components/Link';

const Anchor = ({ children, href }: any) => {
  if (children && children.type === 'img' && !href) {
    return (
      <Link href={children.props.src} isExternal isUnderlineVisible>
        {children}
      </Link>
    );
  }

  return <Link {...{ children, href }} isUnderlineVisible />;
};

export default Anchor;
