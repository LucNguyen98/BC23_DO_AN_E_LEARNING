import React, { useEffect, useState } from 'react';
import { Button } from '..';
import './ScrollTopTop.scss';
function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const onScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div>
      {showTopBtn && (
        <Button
          onClick={onScrollToTop}
          customClass={'fixed-btm-top'}
          icon={<i className="fa fa-angle-up"></i>}
        />
      )}
    </div>
  );
}

export default React.memo(ScrollToTop);
