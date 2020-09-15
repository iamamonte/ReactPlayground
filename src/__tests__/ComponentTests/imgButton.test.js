import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ImgButton from '../../components/practice/ImgButton'

test('button works', async () => {
  const { getByText, findByAltText } = render(<ImgButton />)

  let img = await findByAltText("dog");
  expect(img).toHaveAttribute("hidden")

  // Click button
  fireEvent.click(getByText('Click To See a Random Dog'))

  // Check if image appeared with one of the possible sources
  expect(img).not.toHaveAttribute("hidden");
  let src = img.src;
  let found = false;
  let dogImgs = [
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100",
    "https://images.pexels.com/photos/57627/pexels-photo-57627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100",
    "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100",
    "https://images.pexels.com/photos/1289555/pexels-photo-1289555.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300"
  ];
  for (let i = 0; i < dogImgs.length; i++) {
    if(src === dogImgs[i]) {
      found = true;
    }
  }
  expect(found).toBeTruthy();
})