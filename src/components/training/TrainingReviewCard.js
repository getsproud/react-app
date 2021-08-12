import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { formatDistanceToNowStrict } from 'date-fns'
import { Avatar, Box, Card, CardHeader, Link, Rating, Typography } from '@material-ui/core'
import getInitials from '../../utils/getInitials'
import { useTranslation } from 'react-i18next'

const TrainingReviewCard = (props) => {
  const { authorAvatar, authorName, comment, createdAt, value, training, ...other } = props
  const { t } = useTranslation()

  return (
    <Card {...other}>
      <CardHeader
        avatar={(
          <Avatar src={authorAvatar}>
            {getInitials(authorName)}
          </Avatar>
        )}
        disableTypography
        subheader={(
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              mt: 1
            }}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                mr: 1
              }}
            >
              <Rating
                readOnly
                value={value}
              />
              <Typography
                color="textPrimary"
                sx={{ ml: 1 }}
                variant="subtitle2"
              >
                {value}
              </Typography>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              | { t('FOR') }
              {' '}
              <Link
                color="textPrimary"
                variant="subtitle2"
              >
                { training && training.title ? training.title : '???' }
              </Link>
              {' '}
              |
              {' '}
              {formatDistanceToNowStrict(createdAt)}
              {' '}
              ago
            </Typography>
          </Box>
        )}
        title={(
          <Link
            color="textPrimary"
            component={RouterLink}
            to="#"
            variant="subtitle2"
          >
            {authorName}
          </Link>
        )}
      />
      <Box
        sx={{
          pb: 2,
          px: 3
        }}
      >
        <Typography
          color="textSecondary"
          variant="body1"
        >
          {comment}
        </Typography>
      </Box>
    </Card>
  )
}

TrainingReviewCard.propTypes = {
  authorAvatar: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

export default TrainingReviewCard
