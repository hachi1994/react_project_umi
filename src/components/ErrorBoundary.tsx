import React, { PureComponent } from "react";
type propsType =  {
    childCom?:any
}
class ErrorBoundary extends PureComponent<propsType> {
    constructor(props:any){
        super(props)
        this.state = {
            error:false
        }
    }
    componentDidCatch = (error:any)=> {
        console.error(error,'错误！')
        this.setState({
            errror:true
        })
    }
    render(): React.ReactNode {
        // const {error} = this.state
        const {childCom} = this.props
        if(false){
            return  <div>错误！</div>
        }else {
            return childCom
        }
        
    }
}
export default ErrorBoundary