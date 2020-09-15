/**
 * @author Henry C.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from "../../components/practice/navBar";


describe("NavBar test", () => {
    describe("Nav Comp render", () => {
        it("no input arguments", () => {
            const div = document.createElement('div');
            ReactDOM.render(<NavBar/>, div);
          });
            it("No Nav Links argument", () => {
                const div = document.createElement('div');
                ReactDOM.render(<NavBar NavTitles={['Test Nav Title']} />, div);
              });

    });
});

