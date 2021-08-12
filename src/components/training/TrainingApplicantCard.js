import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Link
} from '@material-ui/core'

const TrainingApplicantCard = (props) => {
  const { avatar, name, ...other } = props

  return (
    <Card {...other}>
      <CardContent sx={{ pt: 0 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
            mt: '-50px'
          }}
        >
          <Avatar
            alt="Applicant"
            component={RouterLink}
            src={avatar}
            sx={{
              border: '3px solid #FFFFFF',
              height: 100,
              width: 100
            }}
            to="#"
          />
        </Box>
        <Link
          align="center"
          color="textPrimary"
          component={RouterLink}
          display="block"
          to="#"
          underline="none"
          variant="h6"
        >
          {name}
        </Link>
      </CardContent>
    </Card>
  )
}

TrainingApplicantCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default TrainingApplicantCard
