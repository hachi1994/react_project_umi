import React, { useState } from 'react';
import { Button, message, Upload } from 'antd'
import { connect } from 'dva'
import styles from './index.less' 
const props = {
    name: 'file',
    action: '/api/uploadImg',
    // headers: {
    //     authorization: 'authorization-text',
    // },
    onChange(info: any) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
function App(props: any) {
    console.log(props, 441)
    function foc(){
        props.dispatch({
            type:'model/setState'
        })
    }
    let [count, setCount] = useState(1)
    const {qq='wade'} = props.model
    return (
        <div className={styles.normal}>
            {qq}
            <Button type='primary' onClick={foc}>{count}</Button>
            <Upload {...props}>
                <Button type='primary'>Click to Upload</Button>
            </Upload>
        </div>
    )
}
// const mapStateToProps = ({ uploadImg }: any) => {
//     return { ...uploadImg };
// };
// export default connect(function({uploadImg}:any){
//     return {...uploadImg}
// })(App)

export default connect((uploadImg) => {return {...uploadImg}})(App)