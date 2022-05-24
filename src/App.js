import { Row } from 'react-bootstrap';
import './App.css';

// Import Components :
import Header from './components/header';
import Product from './components/product';

// Redux et Reducers :
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import products from './reducers/products';

const store = createStore(combineReducers({products}))

function App() {
  return (
    <Provider store={store}>
    <Row className="App">
      <Header />
      <Row className="content">
      <Product />
      </Row>
    </Row>
    </Provider>

  );
}

export default App;
