import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import * as Yup from 'yup'
import { Formik, FieldArray } from 'formik'
import { Helmet } from 'react-helmet-async'
import { Link as RouterLink } from 'react-router-dom'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import deLocale from 'date-fns/locale/de'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import {
  Autocomplete,
  Box,
  Button,
  Breadcrumbs,
  Link,
  Container,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Switch,
  IconButton,
  CircularProgress,
  FormHelperText,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import MobileDatePicker from '@material-ui/lab/MobileDatePicker'
import MinusIcon from '../../icons/Minus'
import ChevronRightIcon from '../../icons/ChevronRight'
import { useTranslation } from 'react-i18next'
import useSettings from '../../hooks/useSettings'
import useDepartment from '../../hooks/useDepartment'
import useTraining from '../../hooks/useTraining'
import QuillEditor from '../../components/QuillEditor'
import { countries } from '../../country-list-de.json'
import useCategory from '../../hooks/useCategory'

const TrainingCreateForm = (props) => {
  const [tag, setTag] = useState()
  const [open, setOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState(false)
  const [openDepartments, setOpenDepartments] = useState(false)
  const [optionsDepartments, setDepartments] = useState([])
  const [optionsCategories, setCategories] = useState([])

  const navigate = useNavigate()
  const { t } = useTranslation()
  const { settings } = useSettings()
  const { fetchDepartments, departments } = useDepartment()
  const { fetchCategories, categories } = useCategory()
  const { createNewTraining, created } = useTraining()

  const loadingDepartments = openDepartments && optionsDepartments.length === 0
  const loadingCategories = openCategory && optionsCategories.length === 0

  useEffect(() => {
    if (!loadingDepartments) {
      return undefined
    }

    if (optionsDepartments.length !== 0) {
      return undefined
    }

    (async () => {
      await fetchDepartments()
    })()
  }, [loadingDepartments])

  useEffect(() => {
    if (!loadingCategories) {
      return undefined
    }

    if (optionsCategories.length !== 0) {
      return undefined
    }

    (async () => {
      await fetchCategories()
    })()
  }, [loadingCategories])

  useEffect(() => {
    setDepartments(departments.docs)
  }, [departments])

  useEffect(() => {
    setCategories(categories.docs)
  }, [categories])

  return (
    <LocalizationProvider 
      dateAdapter={AdapterDateFns} 
      locale={deLocale}
    >
      <Helmet>
        <title>{ t('DEVELOPMENT') } | sproud.</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8
        }}
      >
        <Formik
          initialValues={{
            categories: [],
            departments: [],
            description: '',
            prices: [{price: '', ticket: '', currency: ''}],
            remote: false,
            certificate: false,
            title: '',
            fromDate: new Date(),
            toDate: new Date(),
            location: '',
            street: '',
            zip: '',
            city: '',
            website: '',
            submit: null
          }}
          validationSchema={Yup
            .object()
            .shape({
              category: Yup.array(),
              departments: Yup.array(),
              description: Yup.string().max(5000),
              prices: Yup.array(),
              remote: Yup.bool().required(),
              certificate: Yup.bool().required(),
              title: Yup.string().max(255).required(),
              fromDate: Yup.date().required(),
              toDate: Yup.date().required(),
              location: Yup.string().max(255).required(),
              street: Yup.string().max(255).required(),
              zip: Yup.string().max(255).required(),
              city: Yup.string().max(255).required(),
              website: Yup.string().max(255)
            })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            console.log('SUBMITTING', values)

            setSubmitting(true)
            try {
              // NOTE: Make API request
              console.log(values)
              createNewTraining(values)
              setStatus({ success: true })
              setSubmitting(false)
              toast.success('Product created!')

            } catch (err) {
              console.error(err)
              toast.error('Something went wrong!')
              setStatus({ success: false })
              setErrors({ submit: err.message })
              setSubmitting(false)
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            resetForm,
            setFieldValue,
            setFieldTouched,
            touched,
            values
          }) => (
            <Container maxWidth={settings.compact ? 'xl' : false}>
              <form
                onSubmit={handleSubmit}
                {...props}
              >
                <Grid
                  container
                  justifyContent="space-between"
                  spacing={3}
                >
                  <Grid item>
                    <Typography
                      color="textPrimary"
                      variant="h5"
                    >
                      { t('CREATE_NEW_TRAINING') }
                    </Typography>
                    <Breadcrumbs
                      aria-label="breadcrumb"
                      separator={<ChevronRightIcon fontSize="small" />}
                      sx={{ mt: 1 }}
                    >
                      <Link
                        color="textPrimary"
                        component={RouterLink}
                        to="/training"
                        variant="subtitle2"
                      >
                        { t('DEVELOPMENT') }
                      </Link>
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                      >
                        { t('CREATE_NEW_TRAINING') }
                      </Typography>
                    </Breadcrumbs>
                  </Grid>
                  <Grid item>
                    <Button
                      sx={{ mr: 2 }}
                      color="primary"
                      disabled={isSubmitting}
                      onClick={() => {
                        resetForm()
                        navigate('/training')
                      }}
                      variant="outlined"
                    >
                        { t('CANCEL') }
                    </Button>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                    >
                        { t('CREATE_TRAINING') }
                    </Button>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 3 }}>
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      lg={8}
                      md={8}
                      xs={12}
                    >
                      <Card>
                        <CardContent>
                          <TextField
                            error={Boolean(touched.title && errors.title)}
                            fullWidth
                            helperText={touched.title && errors.title}
                            label={ t('TITLE_LABEL') }
                            name="title"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.title}
                            variant="outlined"
                          />
                          <Box
                            sx={{
                              alignItems: 'center',
                              display: 'flex',
                              mt: 2
                            }}
                          >
                            <TextField
                              error={Boolean(touched.website && errors.website)}
                              fullWidth
                              helperText={touched.website && errors.website}
                              label={ t('WEBSITE_LABEL') }
                              name="website"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.website}
                              variant="outlined"
                            />
                          </Box>
                        
                            <Autocomplete
                              sx={{ mt: 2 }}
                              open={openCategory}
                              onOpen={() => {
                                setOpenCategory(true)
                              }}
                              onClose={() => {
                                setOpenCategory(false)
                              }}
                              multiple
                              name="categories"
                              onChange={(event, value) => setFieldValue('categories', value) }
                              getOptionLabel={(option) => option.label}
                              options={optionsCategories}
                              loading={loadingCategories}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label={ t('CATEGORIES') }
                                  variant="outlined"
                                  fullWidth 
                                  InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                      <>
                                        {loadingCategories ? (<CircularProgress 
                                          color="inherit" 
                                          size={20} />) : null}
                                        {params.InputProps.endAdornment}
                                      </>
                                    ),
                                  }}
                                />
                              )}
                            />

                          {Boolean(touched.categories && errors.categories) && (
                            <Box sx={{ mt: 2 }}>
                              <FormHelperText error>
                                {errors.categories}
                              </FormHelperText>
                            </Box>
                          )}
                          <Typography
                            color="textSecondary"
                            sx={{
                              mb: 2,
                              mt: 3
                            }}
                            variant="subtitle2"
                          >
                            { t('DESCRIPTION') }
                          </Typography>
                          <QuillEditor
                            onChange={(value) => setFieldValue('description', value)}
                            placeholder={ t('DESCRIPTION_PLACEHOLDER') }
                            sx={{ height: 400 }}
                            value={values.description}
                          />
                          {(touched.description && errors.description) && (
                            <Box sx={{ mt: 2 }}>
                              <FormHelperText error>
                                {errors.description}
                              </FormHelperText>
                            </Box>
                          )}
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              mt: 2
                            }}
                          >
                            <Box sx={{ mr: 3, flex: 1}}>
                              <MobileDatePicker
                                label={ t('FROM_DATE') }
                                onAccept={() => setFieldTouched('fromDate')}
                                onChange={(date) => setFieldValue('fromDate', date)}
                                onClose={() => setFieldTouched('fromDate')}
                                renderInput={(inputProps) => (
                                  <TextField
                                    fullWidth
                                    variant="outlined"
                                    {...inputProps}
                                  />
                                )}
                                value={values.fromDate}
                              />
                              { Boolean(touched.fromDate && errors.fromDate) && (
                                <Box sx={{ mt: 2 }}>
                                  <FormHelperText error>
                                    {errors.fromDate}
                                  </FormHelperText>
                                </Box>
                              ) }
                            </Box>
                            <Box sx={{ flex: 1}}>
                              <MobileDatePicker
                                label={ t('TO_DATE') }
                                onAccept={() => setFieldTouched('toDate')}
                                onChange={(date) => setFieldValue('toDate', date)}
                                onClose={() => setFieldTouched('toDate')}
                                renderInput={(inputProps) => (
                                  <TextField
                                    fullWidth
                                    variant="outlined"
                                    {...inputProps}
                                  />
                                )}
                                value={values.toDate}
                              />
                            </Box>
                            { Boolean(touched.toDate && errors.toDate) && (
                                <Box sx={{ mt: 2 }}>
                                  <FormHelperText error>
                                    {errors.toDate}
                                  </FormHelperText>
                                </Box>
                              ) } 
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              mt: 2
                            }}
                          >
                            <Box sx={{ mr: 3, flex: 1}}>
                              <TextField
                                error={Boolean(touched.location && errors.location)}
                                fullWidth
                                helperText={touched.location && errors.location}
                                label={ t('LOCATION_LABEL') }
                                name="location"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.location}
                                variant="outlined"
                              />
                            </Box>
                            <Box sx={{ flex: 1}}>
                              <TextField
                                error={Boolean(touched.street && errors.street)}
                                fullWidth
                                helperText={touched.street && errors.street}
                                label={ t('STREET_LABEL') }
                                name="street"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.street}
                                variant="outlined"
                              />
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              mt: 2
                            }}
                          >
                            <Box sx={{ mr: 3, flex: 1}}>
                              <TextField
                                error={Boolean(touched.zip && errors.zip)}
                                fullWidth
                                helperText={touched.zip && errors.zip}
                                label={ t('ZIP_LABEL') }
                                name="zip"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.zip}
                                variant="outlined"
                              />
                            </Box>
                            <Box sx={{ flex: 2}}>
                              <TextField
                                error={Boolean(touched.city && errors.city)}
                                fullWidth
                                helperText={touched.city && errors.city}
                                label={ t('CITY_LABEL') }
                                name="city"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.city}
                                variant="outlined"
                              />
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              mt: 2
                            }}
                          >
                            <Autocomplete
                              error={Boolean(touched.country && errors.country)}
                              value={values.country}
                              onChange={(event, value) => setFieldValue('country', value) }
                              options={countries}
                              name="country"
                              getOptionLabel={(option) => option}
                              style={{ width: '100%' }}
                              renderInput={(params) => <TextField {...params} 
                                fullWidth 
                                label={ t('COUNTRY_LABEL') } 
                                variant="outlined" 
                                inputProps={{
                                  ...params.inputProps,
                                  autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                              />}
                            />
                          </Box>
                        </CardContent>
                      </Card>
                      <Box sx={{ mt: 3 }}>
                        <Card>
                          <CardHeader title={ t('TICKETS') } />
                          <CardContent>
                          <FieldArray
                            name="prices"
                            render={arrayHelpers => (
                              <Grid
                                container
                                spacing={3}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                              >
                                { values.prices.map((price, i) => (
                                  <Grid 
                                    item 
                                    container
                                    spacing={3}
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    key={i}
                                    xs={12}
                                  >
                                    <Grid
                                      item
                                      xs={7}
                                    >
                                      <TextField
                                        error={Boolean(touched.prices && errors.prices)}
                                        fullWidth
                                        label={ t('TICKET') }
                                        name={`prices[${i}].ticket`}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="text"
                                        value={values.prices[i].ticket}
                                        variant="outlined"
                                      />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={4}
                                    >
                                      <TextField
                                        error={Boolean(touched.prices && errors.prices)}
                                        fullWidth
                                        label={ t('PRICE_PER_PERSON') }
                                        name={`prices[${i}].price`}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        type="number"
                                        value={values.prices[i].price}
                                        variant="outlined"
                                      />
                                    </Grid>
                                    <Grid
                                      item
                                      xs={1}
                                    >
                                      <IconButton
                                        disabled={values.prices.length === 1}
                                        sx={{ ml: 2 }}
                                        onClick={() => arrayHelpers.remove(i)}
                                      >
                                        <MinusIcon fontSize="small" />
                                      </IconButton>
                                    </Grid>
                                  </Grid>
                                )) }
                                <Grid
                                  item
                                  xs={12}
                                >
                                  <Box sx={{ mt: 2 }}>
                                    <Button
                                      variant="outlined"
                                      color="primary"
                                      onClick={() => arrayHelpers.push({price: '', ticket: ''})}
                                    >
                                      { t('ADD_TICKET_OPTION') }
                                    </Button>
                                  </Box>
                                </Grid>
                              </Grid>
                            )} />
                          </CardContent>
                        </Card>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      lg={4}
                      md={6}
                      xs={12}
                    >
                      <Card>
                        <CardHeader title={ t('INFORMATION') } />
                        <CardContent>
                          <Autocomplete
                            open={openDepartments}
                            onOpen={() => {
                              setOpenDepartments(true)
                            }}
                            onClose={() => {
                              setOpenDepartments(false)
                            }}
                            onChange={(event, value) => setFieldValue('departments', value) }
                            multiple
                            name="departments"
                            getOptionLabel={(option) => option.name}
                            options={optionsDepartments}
                            loading={loadingDepartments}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label={ t('DEPARTMENTS') }
                                variant="outlined"
                                InputProps={{
                                  ...params.InputProps,
                                  endAdornment: (
                                    <>
                                      {loadingDepartments ? (<CircularProgress 
                                        color="inherit" 
                                        size={20} />) : null}
                                      {params.InputProps.endAdornment}
                                    </>
                                  ),
                                }}
                              />
                            )}
                          />
                          <Box sx={{ mt: 2 }}>
                            <TextField
                              error={Boolean(touched.spots && errors.spots)}
                              fullWidth
                              helperText={touched.spots && errors.spots}
                              label={ t('SPOTS_LABEL') }
                              name="spots"
                              type="number"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.spots}
                              variant="outlined"
                            />
                          </Box>
                          <Box sx={{ mt: 2 }}>
                            <FormControlLabel
                              control={<Switch 
                                checked={values.remote} 
                                onChange={handleChange} 
                                name="remote" />}
                              label={ t('TRAINING_IS_REMOTE') }
                            />
                          </Box>
                          <Box sx={{ mt: 2 }}>
                            <FormControlLabel
                              control={<Switch  
                                checked={values.certificate} 
                                onChange={handleChange} 
                                name="certificate" />}
                              label={ t('TRAINING_HAS_CERTIFICATION') }
                            />
                          </Box>
                        </CardContent>
                      </Card>
                      {errors.submit && (
                        <Box sx={{ mt: 3 }}>
                          <FormHelperText error>
                            {errors.submit}
                          </FormHelperText>
                        </Box>
                      )}
                    </Grid>
                  </Grid> 
                </Box>
              </form>    
            </Container>
          )}  
        </Formik>
      </Box>
    </LocalizationProvider>
  )
}

export default TrainingCreateForm
