import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Card, CardContent, Container, Divider, Link, Typography } from '@material-ui/core';
// import AuthBanner from '../../components/authentication/AuthBanner';
import { PasswordReset as PasswordResetForm } from '../../components/authentication/password-reset';
import Logo from '../../components/Logo';
import gtm from '../../lib/gtm';

const PasswordReset = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Password Reset | sproud.</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Container
          maxWidth="sm"
          sx={{ py: 10 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <RouterLink to="/">
              <Logo
                sx={{
                  height: 40,
                  width: 200
                }}
              />
            </RouterLink>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 8
            }}
          />
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 4
              }}
            >
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 3
                }}
              >
                <div>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                  >
                    Password Reset
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Reset your account password using your code
                  </Typography>
                </div>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  mt: 3
                }}
              >
                <PasswordResetForm />
              </Box>
              <Divider sx={{ my: 3 }} />
              <Link
                color="textSecondary"
                component={RouterLink}
                to="/authentication/password-recovery"
                variant="body2"
              >
                Did you not receive the code?
              </Link>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default PasswordReset;
