export function user (state) {
  return state.user
}

export function loggedIn (state) {
  return state.user !== null
}

export const check = state => roles => {
  const user = state.user
  if (user) {
    var userRoles = user.roles
    if (typeof userRoles === 'object') {
      userRoles = Object.values(userRoles)
    }
    if (Array.isArray(roles) && roles.length) {
      for (const role of roles) {
        if (!userRoles.includes(role)) {
          return false
        }
      }
    } else if (roles) {
      if (!userRoles.includes(roles)) {
        return false
      }
    }
    return true
  }
  return false
}
