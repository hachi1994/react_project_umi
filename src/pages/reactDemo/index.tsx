import React, { useState,useEffect } from 'react';
import { Button, message, Upload } from 'antd'
import { connect } from 'dva'
import Child from './child';
function ReactDemo(props:any){
    console.log(props,1234)
    return (
        <>
        <div>ReactDemo</div>
        <Child msg='hello'></Child>
        </>
    )
}

export default connect((model,global) => { return {model,...global } })(ReactDemo)