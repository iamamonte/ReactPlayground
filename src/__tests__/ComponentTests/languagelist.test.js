import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LanguageList from "../../components/practice/LanguageList";

describe("LanguageList tests", () => {
  describe("Component", () => {
    it("Testing list with no element", () => {
        const div = document.createElement('div');
        ReactDOM.render(<LanguageList languages= {[]} />, div);
      });
    it("Testing list with at least one element", () => {
      const {getByText} = render(
        <LanguageList languages = {[{ name: 'Java', key: '1' },{ name: 'Python', key: '2' }]}>
        </LanguageList>)
      expect(getByText('Java')).toBeInTheDocument();
      expect(getByText('Python')).toBeInTheDocument();
    });
  });
});