import { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box } from '@material-ui/core';

const LoadingScreen = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%'
      }}
    />
  );
};

export default LoadingScreen;
