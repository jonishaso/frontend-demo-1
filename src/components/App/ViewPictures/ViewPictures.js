import axios from 'axios'
import _ from 'lodash'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import React, { useState } from 'react'

import { searchFlickrImages } from '#api/index'

import PageButtons from './PageButtons'
import PictureList from './PictureList'
import SearchBox from './SearchBox'

const REQUEST_DELAY = 250

const ViewPictures = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [info, setInfo] = useState({
    keywords: '',
    imgPerPage: 2,
    currentPage: 1,
    totalPages: 1
  })
  const [imageLinks, setImageLinks] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSearchClick = _.debounce(async (keywords, imgPerPage) => {
    setIsLoading(true)
    try {
      const response = await searchFlickrImages(keywords, imgPerPage)
      setIsLoading(false)
      setInfo({
        keywords: keywords,
        imgPerPage: imgPerPage,
        currentPage: response.currentPage,
        totalPages: response.totalPages
      })
      setImageLinks(response.imagesDetails)
      if (!!errorMessage) setErrorMessage('')
    } catch (error) {
      setIsLoading(false)
      setErrorMessage(error.message)
    }
  }, REQUEST_DELAY)

  const handlePageChange = async nextPage => {
    setIsLoading(true)

    if (!info.keywords) {
      setIsLoading(false)
      setErrorMessage('keyword could not empty')
    }
    try {
      const response = await searchFlickrImages(
        info.keywords,
        info.imgPerPage,
        nextPage
      )
      setIsLoading(false)
      setInfo({
        keywords: info.keywords,
        imgPerPage: info.imgPerPage,
        currentPage: nextPage,
        totalPages: response.totalPages
      })
      setImageLinks(response.imagesDetails)
      if (!!errorMessage) setErrorMessage('')
    } catch (error) {
      setIsLoading(false)
      setErrorMessage(error.message)
    }
  }

  return (
    <Container maxWidth="md">
      <SearchBox handleSearchClick={handleSearchClick} />
      {errorMessage && <h3>{errorMessage}</h3>}
      {(() => {
        if (!isLoading) {
          if (!imageLinks) return <div />
          if (Array.from(imageLinks).length == 0) return <h3>No Image</h3>
          return <PictureList imgLinks={imageLinks} />
        } else {
          return <CircularProgress />
        }
      })()}
      {(() => {
        if (info.totalPages > 1 && !isLoading) {
          return (
            <PageButtons
              disabled={isLoading}
              currentPage={info.currentPage}
              totalPages={info.totalPages}
              onNextClick={() => handlePageChange(info.currentPage + 1)}
              onPreviousClick={() => handlePageChange(info.currentPage - 1)}
            />
          )
        }
      })()}
    </Container>
  )
}

export default ViewPictures
