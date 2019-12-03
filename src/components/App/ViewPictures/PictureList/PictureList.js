import Grid from '@material-ui/core/Grid'
import React from 'react'

import PictureItem from './PictureItem'

const PictureList = ({ imgLinks }) => (
  <Grid
    container={true}
    data-testid="picture-list"
    spacing={4}
    alignItems="flex-start"
    justify="center"
  >
    {imgLinks.map((imgDetail, index) => {
      return (
        <PictureItem
          key={index}
          imgSource={imgDetail.url}
          owner={imgDetail.owner}
        />
      )
    })}
  </Grid>
)

export default PictureList
