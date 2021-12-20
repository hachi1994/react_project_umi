import React from "react";
type StateType = {
    msg: string
}
interface Error {
    state: StateType
}
function Child() {
    return (
        <div>child</div>
    )
}
class Error extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            msg: 'loading'
        }
    }
    componentDidCatch() {
        this.setState({
            msg: 'error'
        })
    }
    render() {
        let { msg } = this.state
        return (
            <div>{msg}</div>
        )
    }
}
export default Child
export const E = Error