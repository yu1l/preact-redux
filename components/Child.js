import { Component } from 'preact'

export default class Child extends Component {
    constructor() {
        super()
        console.log("Child - constructor()")
        this.setState({
            name: "",
            uuid: ""
        })
        this.clicked = this.clicked.bind(this)
        this.newName = this.newName.bind(this)
        this.newUUID = this.newUUID.bind(this)
    }

    componentDidMount() {
        console.log("Child - componentDidMount()")
    }

    componentWillMount() {
        this.setState({
            uuid: this.props.uuid
        })
        console.log("Child - componentWillMount()")
    }

    componentDidUpdate() {
        console.log("Child - componentDidUpdate()")
    }

    componentWillReceiveProps() {
        console.log("Child - componentWillReceiveProps() - ")
        console.log(this.props.uuid)
    }

    componentWillUnmount() {
        console.log("Child - componentWillUnmount()")
    }

    clicked() {
        console.log(this.state.name)
    }

    newName(event) {
        this.setState({
            name: event.target.value
        })
        event.target.value = ""
    }

    newUUID(event) {
        this.setState({
            uuid: event.target.value
        })
        this.props.updateParent(this.state.uuid)
    }

    render() {
        return (
            <div>
                <h4>UUID : {this.state.uuid}</h4>
                <p>Name : {this.state.name}</p>
                <input type="text" placeholder="name" onChange={this.newName} />
                <button onClick={this.clicked}>Change</button>
                <hr />
                <input type="text" placeholder="UUID" onChange={this.newUUID} />
                <button onClick={this.clicked}>Update UUID</button>
            </div>
        );
    }
}