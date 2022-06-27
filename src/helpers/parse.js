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
