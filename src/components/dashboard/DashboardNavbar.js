import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AppBar, Box, IconButton, Toolbar, Button } from '@material-ui/core'
import { experimentalStyled } from '@material-ui/core/styles'
import MenuIcon from '../../icons/Menu'
import AccountPopover from './AccountPopover'
import ContentSearch from './ContentSearch'
import LanguagePopover from './LanguagePopover'
import Logo from '../Logo'
import NotificationsPopover from './NotificationsPopover'
import { showTranslations } from 'translation-check'

import useAuth from '../../hooks/useAuth';
import i18n from '../../i18n'

const DashboardNavbarRoot = experimentalStyled(AppBar)(({ theme }) => ({
  ...(theme.palette.mode === 'light' && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
    color: theme.palette.primary.contrastText
  }),
  ...(theme.palette.mode === 'dark' && {
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: 'none'
  }),
  zIndex: theme.zIndex.drawer + 100
}))

const DashboardNavbar = (props) => {
  const { onSidebarMobileOpen, ...other } = props
  const { user } = useAuth();

  console.log(user)

  return (
    <DashboardNavbarRoot {...other}>
      <Toolbar sx={{ minHeight: 64 }}>
        <IconButton
          color="inherit"
          onClick={onSidebarMobileOpen}
          sx={{
            display: {
              lg: 'none'
            }
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
        <RouterLink to="/">
          <Logo
            sx={{
              display: {
                lg: 'inline',
                xs: 'none'
              },
              height: 40,
              width: 80
            }}
          />
        </RouterLink>
        <Box
          sx={{
            flexGrow: 1,
            ml: 2
          }}
        />
        <Button onClick={() => showTranslations(i18n)}>
          Translation UI
        </Button>
        <LanguagePopover />
        <Box sx={{ ml: 1 }}>
          <ContentSearch />
        </Box>
        <Box sx={{ ml: 1 }}>
          <NotificationsPopover />
        </Box>
        <Box sx={{ ml: 2 }}>
          <AccountPopover />
        </Box>
      </Toolbar>
    </DashboardNavbarRoot>
  )
}

DashboardNavbar.propTypes = {
  onSidebarMobileOpen: PropTypes.func
}

export default DashboardNavbar
