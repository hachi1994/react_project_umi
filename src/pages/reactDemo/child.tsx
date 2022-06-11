import React from "react"
import { connect } from 'dva'
type PropsType = {
    msg:string
}
class Child extends React.Component <PropsType> {
    constructor(props:any){
        super(props)
        this.state = {
            age:50
        }
    }
    render(): React.ReactNode {
        console.log(this,'nmsl')
        return (
            <div>1</div>
        )
    }
    
}
export default connect((reactDemo)=>{return {...reactDemo}})(Child)