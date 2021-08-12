import { useState } from 'react'
import PropTypes from 'prop-types'
import toast from 'react-hot-toast'
import { NativeSelect, Box, Button, Dialog, Divider, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import useBudget from '../../hooks/useBudget'
import { format } from 'date-fns'
import numeral from 'numeral'

const TrainingApplicationModal = (props) => {
  const { training, onApply, onClose, open, ...other } = props
  const [value, setValue] = useState(null)
  const [price, setPrice] = useState(null)
  const { budget } = useBudget()
  const { t } = useTranslation()

  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
    setPrice(training.prices.find(price => price.title === event.target.value))
  }

  const handleBookSpot = () => {
    toast.success('Request sent!')

    if (onApply) {
      onApply()
    }
  }

  const handleBudgetRequest = () => {
    toast.success('Request sent!')

    if (onApply) {
      onApply()
    }
  }

  return (
    <Dialog
      maxWidth="lg"
      onClose={onClose}
      open={open}
      {...other}
    >
      <Box sx={{ p: 3 }}>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          { t('TRAINING_BOOK_MODAL_TITLE') }
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          { t('TITLE') }
        </Typography>
        <Typography
          color="textPrimary"
          variant="subtitle2"
          gutterBottom
        >
          {training.title }
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          { t('LOCATION_AND_DATE') }
        </Typography>
        <Typography
          color="textPrimary"
          variant="subtitle2"
          gutterBottom
        >
          {training.city }, { format(new Date(training.fromDate), 'dd.MM') } - { format(new Date(training.toDate), 'dd.MM.yyyy') }
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          { t('TICKET') }
        </Typography>
        <Box>
          <NativeSelect 
            value={value}
            onChange={handleChange}
            inputProps={{
              name: 'price'
            }}
          > 
            <option 
              value=""
              selected
              disabled >{ t('CHOOSE_TICKET') }</option>
            { training.prices.map(p => (
              <option 
                key={p.title} 
                value={p.title}>{ p.title }</option>
            ))}
          </NativeSelect>
        </Box>
        <Box
          sx={{
            mt: 6
          }}
          display="flex"
          justifyContent="space-between"
        >
          <Typography
            color="textPrimary"
            variant="subtitle2"
            gutterBottom
          >
            { t('BUDGET_CURRENT') }
          </Typography>
          <Typography
            color="textPrimary"
            variant="subtitle2"
            gutterBottom
          >
            { numeral(budget.remaining).format(`0,0.00`) } { budget.currency || '€' }
          </Typography>
        </Box>
        { price && price.price ? (
          <>
            <Box
              display="flex"
              justifyContent="space-between"
            >
              <Typography
                color="textPrimary"
                variant="subtitle2"
                gutterBottom
              >
                { t('BOOKED_TICKET') }
              </Typography>
              <Typography
                color="textPrimary"
                variant="subtitle2"
                gutterBottom
              >
               - { numeral(price.price).format(`0,0.00`) } { price.currency }
              </Typography>
            </Box>
            <Box sx={{ mt: 2, mb: 2}}>
            <Divider />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
            >
              <Typography
                color="textPrimary"
                variant="subtitle2"
                gutterBottom
              >
                { t('BUDGET_REMAINING') }
              </Typography>
              <Typography
                color={ budget.remaining - price.price > 0 ? 'textPrimary' : 'secondary' }
                variant="subtitle2"
                gutterBottom
              >
                { numeral(budget.remaining - price.price).format(`0,0.00`) } { budget.currency || '€' }
              </Typography>
            </Box>
          </>
        ) : null} 
        <Box
          sx={{
            mt: 3
          }}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            variant="text"
            onClick={onClose}
            sx={{mr: 2}}
          >
           { t('CANCEL') }
          </Button>
          { budget.remaining - price.price > 0 ? (
            <Button
              color="primary"
              onClick={handleBookSpot}
              variant="contained"
              disabled={price === null}
            >
            { t('BOOK_SPOT_NOW') }
            </Button>
          ) : (
            <Button
              color="primary"
              onClick={handleBudgetRequest}
              variant="contained"
            >
            { t('BUDGET_REQUEST') }
            </Button>
          ) }
        </Box>
      </Box>
    </Dialog>
  )
}

TrainingApplicationModal.propTypes = {
  training: PropTypes.object.isRequired,
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
}

export default TrainingApplicationModal
