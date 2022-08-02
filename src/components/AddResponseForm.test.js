import React from 'react';
import { render } from '@testing-library/react';
import AddResponseForm from './components/AddResponseForm'


test('renders the form correctly', () => {
  const { getByText, getByLabelText } = render(<AddResponseForm />);
  const nameLabel = getByText(/answer:/i);
  const accuracyLabel = getByText(/accuracy:/i);
  expect(nameLabel).toBeInTheDocument();
  expect(accuracyLabel).toBeInTheDocument();
  const input = getByLabelText(/accuracy:/i);
  expect(input).toHaveAttribute('type', 'number')
});