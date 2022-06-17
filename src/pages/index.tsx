import React, { useState } from 'react';
import styles from './index.css'
import { Button, message,Upload } from 'antd'
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
function App() {
  let [count, setCount] = useState(1)
  haha<string>('a')
  return (
    <div className={styles.normal}>
      <Button type='primary' onClick={() => setCount(() => count++)}>{count}</Button>
      <Upload {...props}>
        <Button type='primary'>Click to Upload</Button>
      </Upload>
    </div>
  )
}
export default App
