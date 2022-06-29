import React from 'react';
import { useSelector } from 'react-redux';
import { Loading } from 'src/components';
import { loadingSelector } from 'src/redux/selectors/authSelector';

export default function withLoader(Component) {
  // eslint-disable-next-line react/display-name
  return () => {
    const loading = useSelector(loadingSelector);
    return (
      <div>
        <Component />
        <Loading loading={loading} />
      </div>
    );
  };
}
