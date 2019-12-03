const FAKE_DATA = {
  photos: {
    page: 2,
    pages: 105788,
    perpage: 2,
    total: '211576',
    photo: [
      {
        id: '49160155978',
        owner: '185796826@N07',
        secret: '1dc29b011b',
        server: '65535',
        farm: 66,
        title: 'DSC_0204',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0
      },
      {
        id: '49160639006',
        owner: '185796826@N07',
        secret: '7ea189b573',
        server: '65535',
        farm: 66,
        title: 'DSC_0216',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0
      }
    ]
  },
  stat: 'ok'
}

module.exports = {
  get() {
    return { data: FAKE_DATA }
  }
}
