import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
  root: {
    margin: '20px auto'
  }
})

const PageButtons = ({
  disabled,
  currentPage,
  totalPages,
  onNextClick,
  onPreviousClick
}) => {
  const classes = useStyles()

  return (
    <Grid
      className={classes.root}
      container
      alignItems="center"
      justify="center"
    >
      <Grid item>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            disabled={disabled || currentPage == 1}
            onClick={onPreviousClick}
          >
            {'<<'}
          </Button>
          <Button
            disabled={disabled || currentPage == totalPages}
            onClick={onNextClick}
          >
            {'>>'}
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default PageButtons
