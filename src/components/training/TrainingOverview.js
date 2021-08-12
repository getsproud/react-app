import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'
import numeral from 'numeral'
import TrainingBrief from './TrainingBrief'
import TrainingMembers from './TrainingMembers'
import TrainingMetadata from './TrainingMetadata'

const TrainingOverview = (props) => {
  const { training, ...other } = props
  const getPrice = () =>  numeral(training.prices.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))[0].price).format(`0,0.00`) 

  return (
    <Grid
      container
      spacing={3}
      {...other}
    >
      <Grid
        item
        lg={8}
        xl={9}
        xs={12}
      >
        <TrainingBrief
          description={training.description}
          tags={training.categories}
          title={training.title}
        />
      </Grid>
      <Grid
        item
        lg={4}
        xl={3}
        xs={12}
      >
        <TrainingMetadata
          location={`${training.location}, ${training.city}`}
          fromDate={training.fromDate}
          toDate={training.toDate}
          price={getPrice()}
          website={training.website}
          currency={training.prices[0].currency}
          spots={training.spots}
        />
        <Box sx={{ mt: 3 }}>
          <TrainingMembers members={training.participants} />
        </Box>
      </Grid>
    </Grid>
  )
}

TrainingOverview.propTypes = {
  training: PropTypes.object.isRequired
}

export default TrainingOverview
