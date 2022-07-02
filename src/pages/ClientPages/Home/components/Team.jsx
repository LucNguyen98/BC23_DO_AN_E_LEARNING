import React from 'react';
import { NavLinkComponent } from 'src/components';
import { INSTRUCTORS_PATH } from 'src/constants/pathName';

function Team({ teams = [] }) {
  const renderTeamItem = (team, index) => {
    const { hoTen, tenLoaiNguoiDung, students, courses, urlImage } = team;
    return (
      <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
        <div className="team-item team-item-4 mb-70 mb-xl-0">
          <div className="team-img">
            <img src={urlImage} alt="" className="img-fluid" />
          </div>
          <div className="team-content">
            <div className="team-info">
              <h4>{hoTen}</h4>
              <p>{tenLoaiNguoiDung}</p>
            </div>
            <div className="course-meta">
              <span className="duration">
                <i className="far fa-user-alt" />
                {students} Học viên
              </span>
              <span className="lessons">
                <i className="far fa-play-circle me-2" />
                {courses} khoá học
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row  mb-100">
          <div className="col-lg-8 col-xl-8">
            <div className="section-heading text-center text-lg-start">
              <h2 className="font-lg">Top giảng viên</h2>
              <p>
                Khám phá chương trình hoàn hảo của bạn trong các khóa học của
                chúng tôi.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="text-center text-lg-end">
              <NavLinkComponent
                to={INSTRUCTORS_PATH}
                className="btn btn-main-outline rounded"
              >
                Xem tất cả <i className="fa fa-angle-right" />
              </NavLinkComponent>
            </div>
          </div>
        </div>
        <div className="row">
          {teams?.map((team, index) => renderTeamItem(team, index))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Team);
