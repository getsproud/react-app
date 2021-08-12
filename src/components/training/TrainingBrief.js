import PropTypes from 'prop-types'
import Markdown from 'react-markdown/with-html'
import { Box, Card, CardContent, Chip, Grid, Typography } from '@material-ui/core'
import { experimentalStyled, makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const MarkdownWrapper = experimentalStyled('div')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
  '& p': {
    marginBottom: theme.spacing(2)
  }
}))

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}))

const TrainingBrief = (props) => {
  const { description, tags, title, ...other } = props
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Card {...other}>
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <Typography
              color="textSecondary"
              variant="overline"
            >
              { t('TITLE') }
            </Typography>
            <Typography
              color="textPrimary"
              variant="subtitle2"
            >
              { title }
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography
                color="textSecondary"
                variant="overline"
              >
                Tags
              </Typography>
              <Box sx={{ mt: 1 }}>
                {tags.map((tag) => (
                  <Chip
                    className={classes.chip}
                    key={tag._id}
                    label={tag.label}
                    variant="outlined"
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Typography
            color="textSecondary"
            sx={{ mb: 2 }}
            variant="overline"
          >
            { t('DESCRIPTION') }
          </Typography>
          <MarkdownWrapper>
            <Markdown source={description} />
          </MarkdownWrapper>
        </Box>
      </CardContent>
    </Card>
  )
}

TrainingBrief.propTypes = {
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired
}

export default TrainingBrief
