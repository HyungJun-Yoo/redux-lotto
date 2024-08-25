const initialState = {
  count: 0,
  lotto: [],
}

function reducer(state = initialState, action) {
  if (action.type === 'INCREMENT') {
    return { ...state, count: state.count + 1 }
  } else if (action.type === 'DECREMENT') {
    return { ...state, count: state.count - 1 }
  } else if (action.type === 'LOTTO') {
    return { ...state, lotto: action.payload }
  } else {
    return { ...state }
  }
}

export default reducer
