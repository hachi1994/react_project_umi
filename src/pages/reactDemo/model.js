import axios from "axios";
export default {
  namespace: 'reactDemo',
  state: {
    title:'reactDemo'
  },
  effects: {
    *getName(payload, { call, put }) {
      let res = yield axios.get('/api/getName')
      yield put({ type: 'setState', payload: { id: res.data.msg } })
    }
  },
  reducers: {
    'setState'(state, payload) {
        let o = {
            state,
            ...payload
        }
      return o;
    },
  },
};