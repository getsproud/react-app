import React, { useEffect, useState }  from 'react'
import ogs from 'open-graph-scraper-lite'

import './training-icon.scss'

export default function TrainingIcon({ image, url, className }) {
  const [fetched, setImage] = useState('')

  const getTrainingIcon = async url => {
    const urlRefined = url.indexOf('http') === -1 ? 'http://' + url : url

    const site = encodeURIComponent(urlRefined)
    // const appId = '03535576-0d55-40c3-8984-4d642cc51cce'
    // const acceptLang = 'auto'
    let data = null

    try {
      data = await ogs({url})

      setImage(data ? data.result.ogImage.url : null)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getTrainingIcon(url)
  })

  return (
    <img crossOrigin='Anonymous' className={className} src={image ? image : fetched} alt=""/>
  )
}
