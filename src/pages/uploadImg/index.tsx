import React, { useState } from 'react';
import { Button, message, Upload } from 'antd'
import { connect } from 'dva'
import styles from './index.less'
import axios from 'axios'
function App(props: any) {
    console.log(props.model)
    let [count, setCount] = useState(1)
    const uploadProps = {
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
    async function foc() {
        let res = await axios.get('/api/getJsonData')
        if (res.status === 200) {
            setCount(res.data.name)
        }
        props.dispatch({
            type:'model/getName',
            payload:{
                name:'13'
            }
        })
        props.dispatch({
            type: 'model/setState',
            payload:{
                id:'lhc'
            }
        })
    }
    const { qq = 'wade' } = props.model
    return (
        <div className={styles.normal}>
            {qq}
            <Button type='primary' onClick={foc}>{count}</Button>
            <Upload {...uploadProps}>
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

export default connect((uploadImg) => { return { ...uploadImg } })(App)