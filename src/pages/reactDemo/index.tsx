import React, { useState,useEffect } from 'react';
import { Button, message, Upload } from 'antd'
import { connect } from 'dva'

function ReactDemo(props:any){
    console.log(props,1234)
    return (
        <div>ReactDemo</div>
    )
}

export default connect((model,global) => { return {model,...global } })(ReactDemo)