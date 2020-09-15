/**
 * @author Adil Merribi.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PopOverTrigger from "../../components/practice/PopOverButton";

describe("PopOverTrigger test", () => {
    describe("Component", () => {
        it("no input arguments", () => {
            const div = document.createElement('div');
            ReactDOM.render(<PopOverTrigger/>, div);
          });
        it("testing text", () => {
            const {getByText} = render(
                <PopOverTrigger text='test text'>
                  <div>test child</div>
                </PopOverTrigger>)
              expect(getByText('test text')).toBeInTheDocument();
        });
    });
});