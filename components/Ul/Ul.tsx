import List from 'Components/List';

const Ul = ({ children }: JSX.IntrinsicElements['ul']) => <List as="ul" {...{ children }} />;

export default Ul;
