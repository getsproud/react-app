import PropTypes from 'prop-types'
import { Box, Card, CardContent, Grid, Rating, Typography } from '@material-ui/core'

const TrainingReviewsSummary = (props) => {
  const { rating, reviewsCount, ...other } = props

  return (
    <Card {...other}>
      <CardContent>
        <Grid
          alignItems="center"
          container
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              Overall Reviews
            </Typography>
          </Grid>
          <Grid item>
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Rating 
                readOnly
                value={rating} />
              <Typography
                color="textPrimary"
                sx={{ ml: 2 }}
                variant="subtitle2"
              >
                {rating.toFixed(1)}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {reviewsCount}
              {' '}
              reviews in total
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

TrainingReviewsSummary.propTypes = {
  rating: PropTypes.number.isRequired,
  reviewsCount: PropTypes.number.isRequired
}

export default TrainingReviewsSummary
