import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import TrainingReviewsSummary from './TrainingReviewsSummary'
import TrainingReviewCard from './TrainingReviewCard'

const TrainingReviews = (props) => {
  const { isLoading, reviews, ...other } = props

  const rating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <div {...other}>
      <TrainingReviewsSummary
        rating={rating || 0}
        reviewsCount={reviews.length}
      />
      {reviews.map((review) => (
        <Box
          key={review._id}
          sx={{ mt: 2 }}
        >
          <TrainingReviewCard
            training={review.training}
            authorAvatar={review.author.identifier}
            authorName={`${review.author.firstname} ${review.author.lastname}`}
            comment={review.feedback}
            value={review.rating}
            createdAt={new Date(review.createdAt).getTime()}
          />
        </Box>
      ))}
    </div>
  )
}

TrainingReviews.propTypes = {
  reviews: PropTypes.array,
  isLoading: PropTypes.bool
}

export default TrainingReviews
