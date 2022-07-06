import React from 'react';
import workProcessData from 'src/assets/data/workProcess';
import { createClass } from 'src/utils/utils';

const data = workProcessData;

function WorkProcess() {
  return (
    <section className="work-process section-padding">
      <div className="container">
        <div className="row mb-40 text-center">
          <div className="col-xl-12">
            <div className="section-heading ">
              <h2 className="font-lg">Điểm ưu việt</h2>
              <p>CHỈ CÓ TẠI EDUMEL</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-12 pe-xl-5 col-lg-12">
            <div className="row">
              {data.map((item) => {
                return (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="step-item ">
                      <div
                        className={createClass([
                          'step-number',
                          `bg-${item.id}`,
                        ])}
                      >
                        0{item.id}
                      </div>
                      <div className="step-text">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(WorkProcess);
