import React from "react";
import {connect} from 'dva'
let Rc:React.FC<{name:string}> = (props:{name:string}) => {
    const {name} = props;
    return (
        <div>{name}</div>
    )
}
function MC<P>(Elem:React.ReactNode) {
    return 
}
function CatInfo(){
    return (
        <>
        <div>2</div>
        <Rc name='hello'></Rc>
        </>
    )
}
export default connect(()=>{})(CatInfo);