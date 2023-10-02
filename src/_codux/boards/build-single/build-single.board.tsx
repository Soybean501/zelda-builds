import { createBoard } from '@wixc3/react-board';
import { BuildSingle } from '../../../components/build-single/build-single';

export default createBoard({
    name: 'BuildSingle',
    Board: () => <BuildSingle />,
    isSnippet: true,
});
