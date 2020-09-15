import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { Intern } from '../../model/Intern'
import InternInfoDisplay from '../../components/practice/InternInfoDisplay'
import '@testing-library/jest-dom/extend-expect'; //this helps with intellisense, but is already imported at a higher level

describe("Intern ViewModel tests", () => {
    describe("Component", () => {
        let team = "NoTerm", description = "Description", name = "NoName", imgUrl = "https://www.google.com";
        let intern = new Intern(name, description, team, imgUrl, new Date("1/1/21"));
        it("should handle missing onclick argument", () => {
            const div = document.createElement('div');
            ReactDOM.render(<InternInfoDisplay intern={intern} />, div);
        });
        it("should handle missing intern argument", () => {
            const div = document.createElement('div');
            ReactDOM.render(<InternInfoDisplay  />, div);

        });

        it("Should give proper message when no intern is passed", () =>{
            
            const { getByText } = render(<InternInfoDisplay />);
            expect(getByText('No intern data was passed in.')).toBeInTheDocument();

        });
    });


});