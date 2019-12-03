import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import ClearIcon from '@material-ui/icons/Clear'
import SearchIcon from '@material-ui/icons/Search'
import React, { useEffect, useState } from 'react'

import './style.css'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexFlow: 'column wrap',
    width: '90%',
    margin: '20px auto',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  iconButton: {
    border: 'none'
  },
  formControl: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  }
}))

const SearchBox = ({ handleSearchClick }) => {
  const classes = useStyles()
  const [keyWords, setKeyWords] = useState('')
  const [imgPerPage, setImgPerPage] = useState(2)

  const cleanKeyWord = () => setKeyWords('')

  const handleKeyWordsChange = event => {
    setKeyWords(event.target.value)
  }

  const handleImgsPerPageChange = event => {
    setImgPerPage(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!!keyWords.trim()) {
      handleSearchClick(keyWords, imgPerPage)
    } else {
      alert('keyword could not be empty')
    }
  }

  useEffect(() => {
    if (keyWords.trim() === '') return
    handleSearchClick(keyWords, imgPerPage)
  }, [keyWords, imgPerPage])

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.container}
      noValidate
      autoComplete="off"
    >
      <div className="search">
        <input
          autoFocus
          className="search-box"
          tabIndex="1"
          role="input"
          type="text"
          value={keyWords}
          onChange={handleKeyWordsChange}
        ></input>
        <Button
          className={classes.iconButton}
          onClick={keyWords === '' ? handleSubmit : cleanKeyWord}
          tabIndex="2"
          variant="outlined"
        >
          {(() =>
            keyWords === '' ? (
              <SearchIcon />
            ) : (
              <ClearIcon style={{ color: 'red' }} />
            ))()}
        </Button>
      </div>
      <FormControl component="div" required className={classes.formControl}>
        <RadioGroup
          aria-label=""
          name="imgPerPage"
          value={imgPerPage}
          defaultValue={2}
          onChange={handleImgsPerPageChange}
          row
        >
          <FormControlLabel
            tabIndex="3"
            checked={imgPerPage == 2}
            value={2}
            control={<Radio />}
            label="2"
          />
          <FormControlLabel
            tabIndex="4"
            checked={imgPerPage == 10}
            value={10}
            control={<Radio />}
            label="10"
          />
          <FormControlLabel
            tabIndex="5"
            checked={imgPerPage == 30}
            value={30}
            control={<Radio />}
            label="30"
          />
        </RadioGroup>
      </FormControl>
    </form>
  )
}

export default SearchBox
