import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react';
import renderWithRedux from './renderWithRedux';
import App from './App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    expect(queryByText('5')).toBeInTheDocument();
  });

  test('increment after click', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    expect(queryByText('10')).toBeInTheDocument();

    const buttonAdicionar = queryByText('Clique aqui');
    fireEvent.click(buttonAdicionar);
    expect(queryByText('11')).toBeInTheDocument();
  });
});