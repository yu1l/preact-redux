import '../style';
import { Component } from 'preact'
import { Provider } from 'preact-redux'
import thunk from 'redux-thunk'
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'
import App from './components/App'

const allReducers = combineReducers({
	products: productsReducer,
	user: userReducer
});

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
)

const store = createStore(allReducers, {
		products: [{ name: 'iPhone' }],
		user: 'Michael'
	},
    allStoreEnhancers);

export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <App mainTitle = "Main" />
            </Provider>
        )
    }
}