import React from 'react';
import {fireEvent, render, getByTitle} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FadeText from '../../components/practice/FadeText'



test('button works', async () => {
  const { getByText, container} = render(<FadeText />)

  let fadeParent = container.querySelector("#fade-parent"); 
  expect(fadeParent.className.indexOf("show")).toBeGreaterThanOrEqual(0);
  // Click button
  fireEvent.click(getByText('Toggle text'))
  
  
  expect(fadeParent.className.indexOf("show")).toEqual(-1);

})