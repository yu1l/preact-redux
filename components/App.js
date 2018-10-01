import Child from './Child'
import { Component } from 'preact'

const style = {
    textAlign: "center",
    lineHeight: "32px",
    borderRadius: 4,
    border: "none",
    padding: "0 16px",
    color: "#fff",
    background: "#639"
};

export default class App extends Component {
    constructor() {
        super()
        console.log("App - constructor()")
        this.setState({
            foo: "bar",
            uuid: "fjaiuroq20934029"
        })
        this.handle = this.handle.bind(this)
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
			</div>
		);
	}
}