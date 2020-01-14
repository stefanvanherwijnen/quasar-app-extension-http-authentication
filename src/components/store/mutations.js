export function setUser (state, data) {
  if (data) {
    state.user = state.userData(data)
  } else {
    state.user = null
  }
}

export function addLoginCallback (state, data) {
  state.loginCallbacks.push(data)
}

export function setUserData (state, data) {
  state.userData = data
}
