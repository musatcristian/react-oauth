import React from 'react';
import { render } from '@testing-library/react';

import { App } from '../app';

describe('<App />', () => {
  it('renders App component', () => {
    const { queryByText } = render(<App />);

    const main = queryByText('App version 0.1.0');

    expect(main).toBeDefined();
  });
});
