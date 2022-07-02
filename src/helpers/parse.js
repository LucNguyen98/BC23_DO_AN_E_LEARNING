export const groupCourseByCategory = (state) => {
  const courseList = state.course.courseList || [];
  return courseList.reduce((acc, current) => {
    let danhMucKhoaHoc = current['danhMucKhoaHoc'];
    let item = {
      danhMucKhoaHoc,
      danhSachKhoaHoc: courseList?.filter(
        (item) =>
          item.danhMucKhoaHoc.tenDanhMucKhoaHoc ===
          danhMucKhoaHoc.tenDanhMucKhoaHoc
      ),
    };
    if (
      !acc.find(
        (item) =>
          item.danhMucKhoaHoc.tenDanhMucKhoaHoc ===
          danhMucKhoaHoc.tenDanhMucKhoaHoc
      )
    ) {
      acc.push(item);
    }
    return acc;
  }, []);
};

export const handleResponseApi = (response) => {
  const { data, status, statusText } = response;
  if (status === 200) {
    return {
      data,
      error: null,
    };
  }
  return {
    data: null,
    error: data || statusText,
  };
};

export const mapDataInstructors = (users) => {
  const instructors =
    users?.filter((user) => user.maLoaiNguoiDung === 'GV') || [];
  return instructors?.map((ins) => {
    const students = Math.floor(Math.random(1) * 500);
    const courses = Math.floor(Math.random(1) * 100);
    return {
      ...ins,
      students,
      courses,
      tenLoaiNguoiDung: 'Giảng viên',
      urlImage: `https://i.pravatar.cc?u=${ins?.hoTen}`,
    };
  });
};
