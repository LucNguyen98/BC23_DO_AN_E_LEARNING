import React from 'react';

function InstructorItem({ item, studentCount, courseCount }) {
  const { hoTen, tenLoaiNguoiDung, soDt, email } = item;

  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="team-item mb-5">
        <div className="team-img">
          <img
            src={`https://i.pravatar.cc?u=${hoTen}`}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="team-content">
          <div className="team-info">
            <h4>{hoTen}</h4>
            <p>{tenLoaiNguoiDung}</p>
          </div>
          <div className="course-meta">
            <span className="duration text-truncate">
              <i className="fa fa-envelope"></i>
              <a
                href={`mailto:${email}`}
                title={email}
                style={{
                  textDecoration: 'underline',
                  color: '#015ABD',
                }}
              >
                {email}
              </a>
            </span>
            <span className="duration">
              <i className="fa fa-phone"></i>
              <a
                href={`tel:${soDt}`}
                style={{
                  textDecoration: 'underline',
                  color: '#015ABD',
                }}
              >
                {soDt}
              </a>
            </span>
            <span className="duration">
              <i className="fa fa-user-alt"></i>
              {studentCount} Học viên
            </span>
            <span className="lessons">
              <i className="far fa-play-circle me-2" />
              {courseCount} khoá học
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(InstructorItem);
