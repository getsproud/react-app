import { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Box, Breadcrumbs, Container, Grid, Link, Typography } from '@material-ui/core'
import { ProjectCreateWizard } from '../../components/dashboard/project'
import useSettings from '../../hooks/useSettings'
import ChevronRightIcon from '../../icons/ChevronRight'
import gtm from '../../lib/gtm'

const ProjectCreate = () => {
  const { settings } = useSettings()
  const { t } = useTranslation()

  useEffect(() => {
    gtm.push({ event: 'page_view' })
  }, [])

  return (
    <>
      <Helmet>
        <title>{ t('NEW_TRAINING') } | sproud.</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid
            alignItems="center"
            container
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography
                color="textPrimary"
                variant="h5"
              >
                Create Wizard &amp Process
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
                sx={{ mt: 1 }}
              >
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to="/training"
                  variant="subtitle2"
                >
                  { t('DEVELOPMENT') }
                </Link>
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  { t('NEW_TRAINING_BREADCRUMB') }
                </Typography>
              </Breadcrumbs>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <ProjectCreateWizard />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default ProjectCreate
