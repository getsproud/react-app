import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Box, Breadcrumbs, Button, Container, Grid, Typography } from '@material-ui/core'
import { TrainingListTable } from '../../components/training'
import useSettings from '../../hooks/useSettings'
import ChevronRightIcon from '../../icons/ChevronRight'
import PlusIcon from '../../icons/Plus'
import gtm from '../../lib/gtm'

const TrainingList = () => {
  const { settings } = useSettings()
  const { t } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    gtm.push({ event: 'page_view' })
  }, [])

  return (
    <>
      <Helmet>
        <title>{ t('DEVELOPMENT') } | sproud.</title>
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
            container
            justifyContent="space-between"
            spacing={3}
          >
            <Grid item>
               <Typography
                color="textPrimary"
                variant="h5"
              >
                { t('LIST_OF_TRAININGS') }
              </Typography>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator={<ChevronRightIcon fontSize="small" />}
                sx={{ mt: 1 }}
              >
                <Typography
                  color="textSecondary"
                  variant="subtitle2"
                >
                  { t('DEVELOPMENT') }
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item>
              <Box sx={{ m: -1 }}>
                <Button
                  color="primary"
                  startIcon={<PlusIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="contained"
                  onClick={() => navigate('/training/create')}
                >
                  { t('NEW_TRAINING') }
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <TrainingListTable />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default TrainingList
