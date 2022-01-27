export default {
    //namespace: 'uploadImg',
    state: {
        name:1,
        age:40,
        ahaha:'441'
    },

    reducers: {
      'setState'(state, { payload: id }) {
        let qq = 'lhc'
        let o = {
          ...state,
          qq
        };

        return o
      },
    },
  };