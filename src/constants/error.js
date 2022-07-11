export const VALIDATION_MESSAGE = {
  required: 'Không được để trống',
  leastCharacter: 'Ít nhất 8 kí tự',
  email: 'Email không hợp lệ',
  phone: 'Số điện thoại không hợp lệ',
  password: 'Mật khẩu phải ít nhất 8 kí tự',
  rePassword: 'Mật khẩu không trùng khớp',
};

export const SUBMIT_ERROR = {
  icon: 'error',
  title: 'Có lỗi xảy ra',
  showClass: {
    popup: 'animate__animated animate__fadeInDown',
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp',
  },
};

export const WARNING_REMOVE = {
  title: 'Bạn có muốn xoá tài khoản này?',
  text: 'Tài khoản này sẽ bị xoá vĩnh viễn!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Xoá',
  cancelButtonText: 'Huỷ',
};

export const WARNING_COURSE_REMOVE = {
  title: 'Bạn có muốn xoá khóa học này?',
  text: 'Khóa học này sẽ bị xoá vĩnh viễn!',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Xoá',
  cancelButtonText: 'Huỷ',
};

export const WARNING_COURSE_CANCEL = {
  title: 'Bạn có muốn huỷ ghi danh tài khoản này?',
  text: 'Khoá học này sẽ không còn tồn tại trong tài khoản này',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Xoá',
  cancelButtonText: 'Huỷ',
};
