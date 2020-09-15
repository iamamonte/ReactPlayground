import React from 'react'
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions';

function Counter(props) {
  let _count =   useSelector(props => props.counter);
  const dispatch = useDispatch();
  return (
      <Container>
        <h1>Counter {_count}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </Container>
    );

  }

export default Counter;