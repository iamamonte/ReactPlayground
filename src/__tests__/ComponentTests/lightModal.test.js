/**
 * @author Shayan A.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LightModal from "../../components/practice/lightModal";

describe("lightModal tests", () => {
  describe("Component", () => {
    it("no argument setup", () => {
      const div = document.createElement('div');
      ReactDOM.render(<LightModal/>, div);
    });
    it("testing title added", () => {
      const {getByText} = render(<LightModal show={true} title='my test title'/>)
      expect(getByText('my test title')).toBeInTheDocument();
    });
    it("testing title, text, child", () => {
      const {getByText} = render(
        <LightModal show={true}
                    title='my test title'
                    text='my test text'>
          <div>my test child</div>
        </LightModal>)
      expect(getByText('my test title')).toBeInTheDocument();
      expect(getByText('my test text')).toBeInTheDocument();
      expect(getByText('my test child')).toBeInTheDocument();
    });
  });
});