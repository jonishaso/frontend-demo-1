import { render, waitForElement } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import React from 'react'

import ViewPictures from './ViewPictures'

test('Typing in the input triggers a fetch', async () => {
  const { getByRole, getByTestId } = render(<ViewPictures />)

  const getSpy = jest.spyOn(axios, 'get')
  const searchBox = getByRole('input')
  userEvent.type(searchBox, 'cat')

  await waitForElement(() => getByTestId('picture-list'))

  expect(getSpy).toBeCalled()
})
