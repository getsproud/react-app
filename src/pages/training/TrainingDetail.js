import { useCallback, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Box, Button, Container, Divider, Grid, Tab, Tabs, Typography, Rating } from '@material-ui/core'
import { ConfirmationNumber, School } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import {
  TrainingParticpants,
  TrainingBookingModal,
  TrainingOverview,
  TrainingReviews
} from '../../components/training/'
import useSettings from '../../hooks/useSettings'
import useAuth from '../../hooks/useAuth'
import CheckIcon from '../../icons/Check'
import ShareIcon from '../../icons/Share'
import { useGetTrainingByIdQuery } from '../../services/training'
import { useGetFeedbacksForTrainingQuery } from '../../services/feedback'

import gtm from '../../lib/gtm'


const TrainingDetails = () => {
  const { settings } = useSettings()
  const [currentTab, setCurrentTab] = useState('overview')
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const { t } = useTranslation()
  const { training: id } = useParams()
  const { user } = useAuth()
  const { data: training, isLoading: trainingLoading, error: trainingError } = useGetTrainingByIdQuery(id)
  const { data: feedbacks, isLoading: feedbackLoading, error: feedbackError } = useGetFeedbacksForTrainingQuery({ id })

  const tabs = [
    { label: t('OVERVIEW'), value: 'overview' },
    { label: t('REVIEWS'), value: 'reviews' },
    { label: t('PARTICIPANTS'), value: 'participants' }
  ]

  useEffect(() => {
    gtm.push({ event: 'page_view' })
  }, [])

  const handleApplyModalOpen = () => {
    setIsBookingModalOpen(true)
  }

  const handleApplyModalClose = () => {
    setIsBookingModalOpen(false)
  }

  const handleTabsChange = (event, value) => {
    setCurrentTab(value)
  }

  const isParticipating = () => {
    let participating = false
    training.participants.forEach(p => {
      if (participating !== true) {
        participating = user._id === p.participant._id
      }
    })
    return participating
  }

  const rating = !feedbackLoading && feedbacks && feedbacks.docs ? feedbacks.docs.reduce((acc, review) => acc + review.rating, 0) / feedbacks.docs.length : 0

  if (trainingLoading) {
    return null
  }

  return (
    <>
      <Helmet>
        <title>{ training.title || t('DEVELOPMENT') } | sproud.</title>
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
                { training.title }
              </Typography>
              <Box
                sx={{
                  alignItems: 'center',
                  color: 'text.secondary',
                  display: 'flex',
                  flexWrap: 'wrap',
                  mb: -2,
                  mx: -2
                }}
              >
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    m: 2
                  }}
                >
                  <Rating 
                    readOnly
                    value={rating} />
                </Box>
                { training.certificate ? (
                  <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    m: 2
                  }}
                >
                  <School fontSize="small" />
                  <Typography
                    color="inherit"
                    sx={{ ml: 1 }}
                    variant="subtitle2"
                  >
                   { t('WITH_CERTIFICATION') }
                  </Typography>
                </Box>
                ) : null}
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    m: 2
                  }}
                >
                  { isParticipating() ? (
                    <>
                      <CheckIcon fontSize="small" />
                      <Typography
                        color="inherit"
                        sx={{ ml: 1 }}
                        variant="subtitle2"
                      >
                      { t('YOU_WILL_PARTICIPATE') }
                      </Typography>
                    </>
                  ) : null }
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ m: -1 }}>
                <Button
                  color="primary"
                  startIcon={<ShareIcon fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="text"
                >
                  { t('SHARE') }
                </Button>
                <Button
                  color="primary"
                  onClick={handleApplyModalOpen}
                  startIcon={<ConfirmationNumber fontSize="small" />}
                  sx={{ m: 1 }}
                  variant="contained"
                  disabled={isParticipating()}
                >
                  { t('BOOK_NOW') }
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              textColor="primary"
              value={currentTab}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box sx={{ mt: 3 }}>
            {currentTab === 'overview'
            && <TrainingOverview training={training} />}
            {currentTab === 'reviews'
            && <TrainingReviews reviews={feedbacks ? feedbacks.docs : [] } isLoading={feedbackLoading} />}
            {currentTab === 'participants'
            && <TrainingParticpants participants={training.participants} isLoading={trainingLoading} />}
          </Box>
        </Container>
      </Box>
      <TrainingBookingModal
        training={training}
        onApply={handleApplyModalClose}
        onClose={handleApplyModalClose}
        open={isBookingModalOpen}
      />
    </>
  )
}

export default TrainingDetails
