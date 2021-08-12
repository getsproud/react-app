import Chart from 'react-apexcharts'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Skeleton
} from '@material-ui/core'
import { alpha, useTheme } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import ArrowRightIcon from '../../../icons/ArrowRight'
import ChevronUpIcon from '../../../icons/ChevronUp'
import useBudget from '../../../hooks/useBudget'

const OverviewBudget = (props) => {
  const theme = useTheme()
  const { budget } = useBudget() 
  const { t } = useTranslation()

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    colors: ['#27c6db'],
    labels: [''],
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: {
            show: false
          }
        },
        hollow: {
          size: '60%'
        },
        track: {
          background: theme.palette.background.default
        }
      }
    },
    theme: {
      mode: theme.palette.mode
    }
  }

  return (
    <Card {...props}>
      <CardContent
        sx={{
          alignItems: 'center',
          display: 'flex'
        }}
      >
        { budget ? (
          <Chart
            height="160"
            options={chartOptions}
            series={[budget.remaining / (budget.budget/100) ]}
            type="radialBar"
            width="160"
          />
        ) : (
          <Box style={{
            width: '160px',
            height: '140px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Skeleton 
              variant="circular"
              width={100}
              height={100} /> 
          </Box>
        )}
        <Box
          sx={{
            display: 'flex',
            flex: 1
          }}
        >
          <div>
            <Typography
              color="primary"
              variant="h4"
            >
              { budget ? budget.remaining : <Skeleton variant="text" /> }
            </Typography>
            <Typography
              color="textPrimary"
              sx={{ mt: 1 }}
              variant="subtitle2"
            >
              { t('REMAINING_BUDGET') }
            </Typography>
          </div>
          <Box sx={{ flexGrow: 1 }} />
          <Avatar
            sx={{
              backgroundColor: alpha(theme.palette.success.main, 0.08),
              color: 'success.main'
            }}
            variant="rounded"
          >
            <ChevronUpIcon fontSize="small" />
          </Avatar>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          variant="text"
        >
          See all activity
        </Button>
      </CardActions>
    </Card>
  )
}

export default OverviewBudget
