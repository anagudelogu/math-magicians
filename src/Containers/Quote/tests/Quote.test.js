import renderer from 'react-test-renderer';
import Quote from '../index';

describe('Quote page', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
