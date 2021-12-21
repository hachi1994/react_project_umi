import React from "react";
import {context} from './context'
type StateType = {
    msg: string
}
type PropsType = {
    age?:string
}
interface Error {
    state: StateType,
}
function Child(props: any) {
    return (
        <div>child</div>
    )
}
class Error extends React.Component<PropsType,{}> {
    constructor(props: any) {
        super(props)
        this.state = {
            msg: 'loading'
        }
    }
    static contextType = context.c1
    componentDidCatch() {
        this.setState({
            msg: 'error'
        })
    }
    render() {
        let { msg } = this.state
        console.log(this.context,4141)
        return (
            <div>{msg}</div>
        )
    }
}
export default Child
export const E = Error