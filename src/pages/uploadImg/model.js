import axios from "axios";
export default {
  //namespace: 'uploadImg',
  state: {
    name: 1,
    age: 20
  },
  effects: {
    *getName(payload, { call, put }) {
      let res = yield axios.get('/api/getName')
      yield put({ type: 'setState', payload: { id: res.data.msg } })
    }
  },
  reducers: {
    'setState'(state, { payload: { id } }) {
      let qq = id
      let o = {
        ...state,
        qq
      };

      return o
    },
  },
};