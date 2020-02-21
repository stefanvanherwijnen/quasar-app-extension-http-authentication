export default {
  auth: {
    submit: 'Gửi',
    myAccount: 'Tài khoản',
    navigation: 'Thanh điều hướng',
    fields: {
      email: 'Email',
      username: 'Tên đăng nhập',
      password: 'Mật khẩu',
      repeatPassword: 'Xác thực mật khẩu'
    },
    login: {
      login: 'Đăng nhập',
      passwordForgot: 'Quên mật khẩu?',
      verificationRequired:
        'Vui lòng kiểm tra email và xác thực tài khoản trước.',
      invalidCredentials: 'Email hoặc mật khẩu sai.',
      rememberMe: 'Ghi nhớ',
      registerMessage: 'Bạn chưa có tài khoản?',
      register: 'Đăng ký.'
    },
    register: {
      register: 'Đăng ký',
      invalidData:
        'Máy chủ không thể xử lí yêu cầu. Vui lòng kiểm tra lại thông tin.',
      alreadyRegistered:
        'Email này đã được đăng ký. Vui lòng kiểm tra email để xác thực.',
      accountCreated:
        'Vui lòng kiểm tra email để xác thực. Việc này có thể mất tối đa 10 phút. Hãy kiểm tra thư mục spam nếu bạn không nhận được email.',
      checkEmail: (email) => `Bạn muốn đăng ký với email này ${email}?`,
      error: 'Có gì đó không ổn.'
    },
    verification: {
      success: 'Tài khoản đã xác thực. Bạn có thể đăng nhập ngay.',
      failed: 'Xác thực lỗi hoặc tài khoản đã được xác thực. Hãy thử đăng nhập.'
    },
    logout: {
      confirmation: 'Bạn có chắc muốn đăng xuất?',
      confirm: 'Xác nhận',
      logout: 'Đăng xuất',
      cancel: 'Huỷ'
    },
    password: {
      forgot: {
        header: 'Lấy lại mật khẩu',
        checkEmail: 'Vui lòng kiểm tra email để lấy lại mật khẩu. Nếu không nhận được email, chắc chắn email đã được đăng ký.',
        unknownEmail: 'Email chưa được đăng ký.'
      },
      reset: {
        header: 'Lấy lại mật khẩu',
        success:
          'Mật khẩu đã được thay đổi. Bạn có thể đăng nhập với mật khẩu mới.'
      }
    },
    validations: {
      required: 'Trường này là bắt buộc.',
      passwordLength: (length) => `Mật khẩu phải có ít nhất ${length} kí tự.`,
      passwordMatch: 'Mật khẩu không trùng.',
      email: 'Email không đúng định dạng.',
      username: 'Tên đăng nhập chỉ được chưa các kí tự chữ và số.'
    }
  }
}
