import React from 'react';

function InstructorItem({ item }) {
  const { hoTen, tenLoaiNguoiDung, soDt, email, students, courses, urlImage } =
    item;

  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="team-item mb-5">
        <div className="team-img">
          <img src={urlImage} alt="" className="img-fluid" />
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
                  lineBreak: 'anywhere',
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
}

export default React.memo(InstructorItem);
