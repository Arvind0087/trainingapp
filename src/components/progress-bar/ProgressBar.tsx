import { useEffect, useMemo } from 'react';
import NProgress from 'nprogress';

import StyledProgressBar from './styles';

const ProgressBar: React.FC = () => {
  useMemo(() => {
    NProgress.configure({
      showSpinner: false,
    });

    NProgress.start();
  }, []);

  useEffect(() => {
    NProgress.done();
  }, []);

  return <StyledProgressBar />;
};

export default ProgressBar;
