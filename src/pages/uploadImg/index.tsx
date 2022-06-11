import React, { useState, useEffect } from 'react';
import { Button, message, Upload } from 'antd'
import { connect } from 'dva'
import styles from './index.less'
import axios from 'axios'

function App(props: any) {
    let [count, setCount] = useState(1)
    let [fileList, setFileList] = useState([])
    let [msg, setMsg] = useState('ahaa')
    useEffect(function () {
        axios.get('/api/getCatImgData').then(r => {
            setFileList(r.data.data)
        })

    })
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
                axios.get('/api/getCatImgData').then(r => {
                    setFileList(r.data.data)
                })
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
            type: 'uploadImg/getName',
            payload: {
                name: '13'
            }
        })
        props.dispatch({
            type: 'uploadImg/setState',
            payload: {
                id: 'lhc'
            }
        })
    }

    const { qq = 'wade' } = props.uploadImg

    function changeMsg(e: any) {
        setMsg(msg = e.target.value)
    }
    function clear(): void {
        setMsg('')
    }
    const rawHtml = {
        __html: '<div>12345</div>'
    }
    return (
        <div className={styles.normal}>
            {qq}
            <p dangerouslySetInnerHTML={rawHtml}></p>
            <Button type='primary' onClick={foc}>{count}</Button>
            <Upload {...uploadProps}>
                <Button type='primary'>Click to Upload</Button>
            </Upload>

            <div>
                <Child title={<h1>title</h1>} msg={msg} clear={clear} changeMsg={changeMsg}>
                </Child>
            </div>


            <div>
                <h1>图片列表</h1>
                {fileList.map((e: any, i) => {
                    return (
                        <img width={100} src={e.url} alt={e.name}></img>
                    )
                })}
            </div>
        </div>
    )
}

function Child(props: any) {
    const { msg, changeMsg, clear } = props
    return (
        <div>
            <input type="text" value={msg} onChange={changeMsg} />
            <span onClick={clear}>clear</span>
            {props.title}
        </div>
    )
}
// const mapStateToProps = ({ uploadImg }: any) => {
//     return { ...uploadImg };
// };
// export default connect(function({uploadImg}:any){
//     return {...uploadImg}
// })(App)

export default connect((uploadImg, global) => { return { ...uploadImg, ...global } })(App)