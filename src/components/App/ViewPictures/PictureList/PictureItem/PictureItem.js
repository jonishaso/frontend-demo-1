import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const useStyles = makeStyles({
  root: { marginBottom: '30px', marginTop: '30px' },
  card: {
    maxWidth: 600,
    minWidth: 300
  },
  media: {
    height: 370
  },
  textContent: {
    height: 40,
    overflowY: 'scroll'
  }
})

const PictureItem = ({ imgSource, owner }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} item xs={12} sm={6}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.textContent}>
            <Typography gutterBottom variant="h5" component="h4">
              {`Author: ${owner}`}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            image={imgSource}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default PictureItem
