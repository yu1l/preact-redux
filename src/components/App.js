import Child from './Child'
import { Component } from 'preact'
import { bindActionCreators } from 'redux'
import { connect } from 'preact-redux'
import { updateUser } from '../actions/user-action'

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
                <input onChange={this.onUpdateUser} placeholder="Enter Username" />
                <div onClick={this.onUpdateUser}>UPDATE</div>
                {this.props.user}
            </div>
		);
	}
}

const mapStateToProps = (state, props) => {
    return {
        products: state.products,
        user: state.user,
        userPropsPlus: `${state.user} - in ${props.mainTitle}`
    }
};

const mapActionsToProps = (dispatch, props) => {
    console.log(props)
    return bindActionCreators({
        onUpdateUser: updateUser
    }, dispatch)
};
const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    console.log(propsFromState, propsFromDispatch, ownProps)
    return {

    }
}
export default connect(mapStateToProps, mapActionsToProps, mergeProps)(App);