import React from 'react';
import { render } from '@testing-library/react';
import AddFeedForm from './components/AddFeedForm'


test('renders the form correctly', () => {
  const { getByText, getByLabelText } = render(<AddFeedForm />);
  const nameLabel = getByText(/topic:/i);
  const relevanceLabel = getByText(/relevance:/i);
  expect(nameLabel).toBeInTheDocument();
  expect(relevanceLabel).toBeInTheDocument();
  const input = getByLabelText(/relevance:/i);
  expect(input).toHaveAttribute('type', 'number')
});