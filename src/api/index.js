import axios from 'axios'

const processPhotoResponse = response => {
  const { photos } = response
  return Object.prototype.hasOwnProperty.call(photos, 'photo')
    ? {
        imagesDetails: Array.from(photos.photo).map(obj => ({
          url: `https://farm${obj.farm}.staticflickr.com/${obj.server}/${obj.id}_${obj.secret}_z.jpg`,
          owner: obj.owner
        })),
        currentPage: photos.page,
        totalPages: photos.pages
      }
    : {
        imagesDetails: [],
        currentPage: 1,
        totalPage: 1
      }
}

export const searchFlickrImages = async (
  keywords,
  imgPerPage,
  nextPage = 1
) => {
  const response = await axios.get(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.API_KEY}&text=${keywords}+&per_page=${imgPerPage}&page=${nextPage}&format=json&nojsoncallback=1`
  )
  return processPhotoResponse(response.data)
}
