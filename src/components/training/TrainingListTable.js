import { useState, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { format } from 'date-fns'
import { debounce } from 'lodash'
import numeral from 'numeral'
import 'numeral/locales/de' 
import PropTypes from 'prop-types'
import {
  Box,
  Card,
  Chip,
  IconButton,
  Checkbox,
  InputAdornment,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  Tooltip,
  TableRow,
  TextField,
  Skeleton,
  FormControlLabel,
  Switch
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'
import useAuth from '../../hooks/useAuth'
import useTraining from '../../hooks/useTraining'
import useDepartment from '../../hooks/useDepartment'
import ArrowRightIcon from '../../icons/ArrowRight'
import PencilAltIcon from '../../icons/PencilAlt'
import SearchIcon from '../../icons/Search'
import Scrollbar from '../Scrollbar'

const TrainingListTable = (props) => {
  const { trainings, ...other } = props
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(12)
  const [query, setQuery] = useState('')
  const [list, setList] = useState([])
  const [isRemote, setIsRemote] = useState(false)
  const { t } = useTranslation()
  const { user } = useAuth()
  const { fetchTrainings } = useTraining()
  const { departments, fetchDepartments } = useDepartment()

  const departmentOptions = departments.docs.map((d) => ({
    label: d.name,
    value: d._id
  }))

  departmentOptions.splice(0, 0, {
    label: t('ALL'),
    value: 'all'
  })

  const sortOptions = [{
    label: t('SORT_BY_DATE_ASC'),
    value: '-createdAt'
  },
  {
    label: t('SORT_BY_DATE_DESC'),
    value: 'createdAt'
  },
  {
    label: t('SORT_BY_PRICE_ASC'),
    value: '-prices.price'
  },
  {
    label: t('SORT_BY_PRICE_DESC'),
    value: 'prices.price'
  }]

  const [sort, setSort] = useState(sortOptions[0].value)
  const [department, setDepartment] = useState(departmentOptions[0].value)

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }
  
  const handleSortChange = (event) => {
    setSort(event.target.value)
  }

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value)
  }
  
  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }
  
  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10))
  }

   const handleIsRemoteChange = (event) => {
    setIsRemote(event.target.checked)
  }
  
  const applyChanges = (query, limit, page, sort, isRemote, department) => {
    const mongoQuery = {}

    if (isRemote) mongoQuery.remote = isRemote
    if (department !== 'all') mongoQuery.departments = department

    fetchTrainings(query, limit, page, sort, mongoQuery)
  }

  useEffect(() => {
    fetchDepartments()
  }, [])

  useEffect(() => {
    if (query.length > 2 || query === '') debounce(applyChanges, 2000)(query, limit, page, sort, isRemote)
  }, [query])
  
  useEffect(() => {
    applyChanges(query, limit, page, sort, isRemote, department)
  }, [limit, page, sort, isRemote, department])

  useEffect(() =>  {
    trainings.docs.forEach((d, i) => {
      trainings.docs[i].departments.forEach((dep, j) => {
        const found = departments.docs.filter(obj => {
          return obj._id === dep || obj._id === dep._id
        })[0]

        trainings.docs[i].departments[j] = found
      })
    })

    setList(trainings.docs)
  }, [trainings.docs, departments.docs])

  numeral.locale(i18n.language.replace(/-\w+/, ''))

  return (
    <Card {...other}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          m: -1,
          p: 2
        }}
      >
        <Box
          sx={{
            m: 1,
            maxWidth: '100%',
            width: 500
          }}
        >
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              )
            }}
            onChange={handleQueryChange}
            value={query}
            placeholder={ t('SEARCH_PLACEHOLDER') }
            variant="outlined"
          />
        </Box>
        <Box
          sx={{
            m: 1,
            maxWidth: '100%',
            width: 240
          }}
        >
          <TextField
            fullWidth
            label={ t('SORT_BY') }
            name="sort"
            onChange={handleSortChange}
            select
            SelectProps={{ native: true }}
            value={sort}
            variant="outlined"
          >
            {sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
        <Box
          sx={{
            m: 1,
            maxWidth: '100%',
            width: 240
          }}
        >
          <TextField
            fullWidth
            label={ t('DEPARTMENT') }
            name="department"
            onChange={handleDepartmentChange}
            select
            SelectProps={{ native: true }}
            value={department}
            variant="outlined"
          >
            {departmentOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
        <Box sx={{ m: 2 }}>
          <FormControlLabel
            control={(
              <Switch
                checked={isRemote}
                color="primary"
                name="inStock"
                onChange={handleIsRemoteChange}
              />
            )}
            label={ t('REMOTE_ONLY') }
          />
        </Box>
      </Box>
      <Scrollbar>
        <Box sx={{ minWidth: 1200 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  { t('NAME') }
                </TableCell>
                <TableCell>
                  { t('LOCATION') }
                </TableCell>
                <TableCell>
                  { t('REMOTE') }
                </TableCell>
                <TableCell>
                  { t('DATE') }
                </TableCell>
                <TableCell>
                  { t('DEPARTMENT') }
                </TableCell>
                <TableCell>
                  { t('PRICE') }
                </TableCell>
                <TableCell align="right">
                 { t('ACTIONS') }
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((training) => {
                return (
                  <TableRow
                    hover
                    key={ training._id }
                  >
                    <TableCell>
                      <Link
                        color="textPrimary"
                        component={RouterLink}
                        to="#"
                        underline="none"
                        variant="subtitle2"
                      >
                        <strong>{ training.title }</strong>
                      </Link>
                    </TableCell>
                    <TableCell>
                      { training.city } { training.country ? ', ' + training.country : null }
                    </TableCell>
                    <TableCell>
                      <Checkbox checked={ training.remote } />
                    </TableCell>
                    <TableCell>
                      { format(new Date(training.fromDate), t('DATE_WO_YEAR')) } - { format(new Date(training.toDate), t('DATE_FULL')) }
                    </TableCell>
                    <TableCell>
                      { training.departments.slice(0, 2).map((dep) => (
                        <Chip style={{ marginRight: '6px' }} 
                          key={ dep._id }
                          label={ dep && dep.name ? dep.name.toUpperCase() : 
                          <Skeleton variant="text" 
                            width={100} 
                            height={16} /> 
                          }
                        />
                      ))}

                      { (training.departments.length > 2) ? (
                        <Tooltip title={training.departments.map(d => d.name || t('UNKNOWN')).join(', ')}>
                          <Chip label="..."/>
                        </Tooltip>) : null
                      }
                    </TableCell>
                    <TableCell>
                     { t('FROM_PRICE') } { numeral(training.prices.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))[0].price)
                        .format(`0,0.00`) } { training.prices[0].currency }
                    </TableCell>
                    <TableCell align="right">
                      { training.author === user._id ? (
                        <IconButton
                          component={RouterLink}
                          to="#"
                        >
                          <PencilAltIcon fontSize="small" />
                        </IconButton>
                      )  : null }
                      <IconButton
                        component={RouterLink}
                        to={`/training/${ training._id }`}
                      >
                        <ArrowRightIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={trainings.totalDocs}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[6, 12, 24]}
      />
    </Card>
  )
}

TrainingListTable.propTypes = {
  trainings: PropTypes.object.isRequired
}

export default TrainingListTable
