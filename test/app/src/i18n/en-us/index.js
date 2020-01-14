// This is just an example,
// so you can safely delete all default props below

export default {
  settings: {
    language: 'Language',
    darkMode: 'Dark mode'
  },
  auth: {
    administrator: {
      title: 'Administrator',
      home: 'Home'
    },
    superuser: {
      title: 'Superuser',
      users: {
        title: 'Users',
        edit: 'Edit',
        verify: {
          label: 'Verify',
          message: 'Are you sure you want to verify {user}?'
        },
        fields: {
          name: 'Name',
          email: 'Email',
          verified: 'Verified'
        }
      }
    }
  },
  failed: 'Action failed',
  success: 'Action was successful'
}
