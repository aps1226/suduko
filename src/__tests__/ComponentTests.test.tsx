import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../state/reducers/index';
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router'; 
import { RouteComponentProps } from 'react-router-native';
import { fireEvent, render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme'
// import toJson from 'enzyme-to-json';
import Title from '../../components/Title';
import Home from '../../components/Home';
import App from '../../App';

const history = createMemoryHistory();
const path = `/route/:id`;
const match: match<{ id: string }> = {
    isExact: false,
    path,
    url: path.replace(':id', '1'),
    params: { id: "1" }
};
const location = createLocation(match.url);

function renderWithRedux(
  component:JSX.Element,
  //@ts-ignore
  {initialState,store = createStore(reducers,initialState)} = {}
){
  return {
    ...render(<Provider store = {store}>{component}</Provider>),
    store
  }
}

describe('Home component', () =>{
  let homeComponent:any;
  beforeEach(() =>{
    homeComponent = renderWithRedux(
      <Home
        history={history}
        location={location}
        match={match}
      />
    );
  })

  it('renders without crashing', () => {
    expect(homeComponent.toJSON()).toMatchSnapshot();
  });

  it(`routes to difficulty selection menu when selecting 'Play New Game'.`, () => {
    const {getByTestId} = homeComponent;
    const newGameButton = getByTestId('newGameButton');
    
  });

});
describe('Title component', () =>{
  it('renders without crashing', () => {
    const titleComponent = render(<Title/>).toJSON();
    expect(titleComponent).toMatchSnapshot();
  });
});
