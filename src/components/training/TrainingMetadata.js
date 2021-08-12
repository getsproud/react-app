import PropTypes from 'prop-types'
import { format } from 'date-fns'
import numeral from 'numeral'
import {
  Card,
  CardContent,
  Link,
  List,
  ListItem,
  Typography
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const TrainingMetadata = (props) => {
  const { location, fromDate, toDate, price, website, spots, currency, ...other } = props
  const { t } = useTranslation()
  const preventDefault = (event) => event.preventDefault()

  return (
    <Card {...other}>
      <CardContent>
        <List>
          <ListItem
            disableGutters
            divider
            sx={{
              justifyContent: 'space-between',
              padding: 2
            }}
          >
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              { t('LOCATION') }
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              { location }
            </Typography>
          </ListItem>
          <ListItem
            disableGutters
            divider
            sx={{
              justifyContent: 'space-between',
              padding: 2
            }}
          >
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              { t('DATE') }
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              { format(new Date(fromDate), 'dd.MM') } - { format(new Date(toDate), 'dd.MM.yyyy') }
            </Typography>
          </ListItem>
          <ListItem
            disableGutters
            divider
            sx={{
              justifyContent: 'space-between',
              padding: 2
            }}
          >
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              { t('PRICE') }
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              { t('FROM_PRICE') } { price  } { currency }
            </Typography>
          </ListItem>
          <ListItem
            disableGutters
            divider={spots && spots > 0}
            sx={{
              justifyContent: 'space-between',
              padding: 2
            }}
          >
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              { t('WEBSITE') }
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              <Link 
                href={ website } 
                onClick={ preventDefault }
                target="_blank"
                rel="noopener"> 
                { t('GO_TO_WEBSITE') }
              </Link>
            </Typography>
          </ListItem>
          { spots && spots > 0 ? (
            <ListItem
              disableGutters
              sx={{
                justifyContent: 'space-between',
                padding: 2
              }}
            >
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                { t('SPOTS') }
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                { t('MAX_SPOTS', { spots }) }
              </Typography>
            </ListItem>
          ) : null }
        </List>
      </CardContent>
    </Card>
  )
}

TrainingMetadata.propTypes = {
  location: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  spots: PropTypes.number
}

export default TrainingMetadata