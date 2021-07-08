import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from 'react-i18next';

import BusinessIcon from '@material-ui/icons/Business';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import FastFoodIcon from '@material-ui/icons/Fastfood';
import CalendarIcon from '@material-ui/icons/Event';
import VerifiedIcon from '@material-ui/icons/Verified';
import SchoolIcon from '@material-ui/icons/School';
import CreditCardIcon from '../../icons/CreditCard';
import ChartSquareBarIcon from '../../icons/ChartSquareBar';
import Logo from '../Logo';
import NavSection from '../NavSection';
import Scrollbar from '../Scrollbar';

const DashboardSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const { t } = useTranslation();

  const sections = [
    {
      title: null,
      items: [
        {
          title: t('DASHBOARD'),
          path: '/',
          icon: <ChartSquareBarIcon fontSize="small" />
        },
        {
          title: t('PERSONAL_GOALS'),
          path: '/personal-goals',
          icon: <VerifiedIcon fontSize="small" />
        },
        {
          title: t('BUDGET'),
          path: '/budget',
          icon: <CreditCardIcon fontSize="small" />
        }
      ]
    },
    {
      title: t('DEVELOPMENT'),
      items: [
        {
          title: t('DEVELOPMENT'),
          path: '/training',
          icon: <SchoolIcon fontSize="small" />
        },
        {
          title: t('BROWNBAG_SESSIONS'),
          path: '/brownbag-sessions',
          icon: <FastFoodIcon fontSize="small" />
        },
        {
          title: t('CALENDAR'),
          icon: <CalendarIcon fontSize="small" />,
          path: '/calendar'
        }
      ]
    },
    {
      title: t('FINANCE'),
      items: [
        {
          title: t('SPENDINGS'),
          path: '/finance/spendings',
          icon: <AccountBalanceIcon fontSize="small" />
        }
      ]
    },
    {
      title: t('HR'),
      items: [
        {
          title: t('USERS'),
          path: '/hr/users',
          icon: <PeopleIcon fontSize="small" />
        }
      ]
    },
    {
      title: t('ADMIN'),
      items: [
        {
          title: t('SETTINGS'),
          path: '/admin/settings',
          icon: <SettingsIcon fontSize="small" />
        },
        {
          title: t('COMPANY'),
          path: '/admin/company',
          icon: <BusinessIcon fontSize="small" />
        }
      ]
    }
  ];

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box
          sx={{
            display: {
              lg: 'none',
              xs: 'flex'
            },
            justifyContent: 'center',
            p: 2
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                height: 40,
                width: 40
              }}
            />
          </RouterLink>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3
                }
              }}
              {...section}
            />
          ))}
        </Box>
      </Scrollbar>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 64px) !important',
            top: '64px !Important',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={openMobile}
      PaperProps={{
        sx: {
          backgroundColor: 'background.paper',
          width: 280
        }
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default DashboardSidebar;
