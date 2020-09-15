import React from 'react'; 
import {render, fireEvent, waitFor, screen} from '@testing-library/react'; 
import JokeModal from '../../components/practice/JokeModal';
import '@testing-library/jest-dom/extend-expect'

describe('Joke Modal is properly functioning', ()=> {
    test("title and body", ()=> {
        const {getByText} = render(<JokeModal value={true} />); 
        expect(getByText("Answer:")).toBeInTheDocument();
        expect(getByText("BOOOOOOOOOLEAN")).toBeInTheDocument(); 
    })
})
