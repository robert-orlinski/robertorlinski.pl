import List from 'Components/List';

const Ol = ({ children }: JSX.IntrinsicElements['ol']) => <List as="ol" {...{ children }} />;

export default Ol;
