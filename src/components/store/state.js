export default {
  user: null,
  loginCallbacks: [],
  userData: (data) => {
    return {
      id: data.id,
      email: data.attributes.email,
      name: data.attributes.name,
      roles: data.attributes.roleNames
    }
  }
}
