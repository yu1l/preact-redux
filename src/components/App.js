import Child from './Child'
import { Component } from 'preact'
import { bindActionCreators } from 'redux'
import { connect } from 'preact-redux'
import { createSelector } from 'reselect'
import { updateUser, apiRequest, requestMade } from '../actions/user-action'

const style = {
    textAlign: "center",
    lineHeight: "32px",
    borderRadius: 4,
    border: "none",
    padding: "0 16px",
    color: "#fff",
    background: "#639"
};

class App extends Component {
    constructor(props) {
        super(props)
        console.log("App - constructor()")
        this.setState({
            foo: "bar",
            uuid: "fjaiuroq20934029"
        })
        this.handle = this.handle.bind(this)
        this.onUpdateUser = this.onUpdateUser.bind(this)
    }

    onUpdateUser(event) {
        this.props.onUpdateUser(event.target.value)
    }

    componentDidMount() {
        console.log("App - componentDidMount()")
        this.props.onApiRequestMade()
        setTimeout(() => {
            this.props.onApiRequest()
        }, 1500)
    }

    componentWillMount() {
        console.log("App - componentWillMount()")
    }

    componentDidUpdate() {
        console.log("App - componentDidUpdate()")
    }

    componentWillReceiveProps() {
        console.log("App - componentWillReceiveProps()")
    }

    componentWillUnmount() {
        console.log("App - componentWillUnmount()")
    }

    handle(val) {
        console.log("App - " + val)
        this.setState({
            foo: val
        })
        this.changed(val)
    }

    changed(val) {
        console.log("App - changed() - " + val)
    }

	render() {
		return (
            <div>
                <h1 style={style}>Hello, {this.state.foo}</h1>
                <Child updateParent={this.handle} uuid={this.state.uuid} />
                <hr />
                <input onChange={this.onUpdateUser} placeholder="Enter Username" />
                <br />
                {this.props.user}
            </div>
		);
	}
}

const productsSelector = createSelector(
    state => state.products,
    products => products
)

const userSelector = createSelector(
    state => state.user,
    user => user
)

const mapStateToProps = createSelector(
    productsSelector,
    userSelector,
    (products, user) => ({
        products,
        user
    })
);

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest,
    onApiRequestMade: requestMade
};

export default connect(mapStateToProps, mapActionsToProps)(App);