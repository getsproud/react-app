import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Card, CardContent, Container, Divider, Link, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
// import AuthBanner from '../../components/authentication/AuthBanner';
import {
  Login as LoginForm
} from '../../components/authentication/login';
import Logo from '../../components/Logo';
import gtm from '../../lib/gtm';

const Login = () => {
  const { t } = useTranslation();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <Helmet>
        <title>Login | sproud.</title>
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
          sx={{ py: '80px' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 8
            }}
          >
            <RouterLink to="/">
              <Logo
                sx={{
                  width: 200
                }}
              />
            </RouterLink>
          </Box>
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
                    { t('LOGIN') }
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Log in on the internal platform
                  </Typography>
                </div>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  mt: 3
                }}
              >
                <LoginForm />
              </Box>
              <Divider sx={{ my: 3 }} />
              <Link
                color="textSecondary"
                component={RouterLink}
                to="/authentication/register"
                variant="body2"
              >
                Create new account
              </Link>
              <Link
                color="textSecondary"
                component={RouterLink}
                sx={{ mt: 1 }}
                to="/authentication/password-recovery"
                variant="body2"
              >
                Forgot password
              </Link>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default Login;
