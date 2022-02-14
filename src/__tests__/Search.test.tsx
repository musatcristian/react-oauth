import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Search } from '../components';
import { PLACEHOLDER_ACCOUNT, PLACEHOLDER_POST, SEARCH_HANDLE, SEARCH_POST } from '../constants';

const get_account = jest.fn();
const get_post = jest.fn();

describe('<Search />', () => {
  it('renders Search component', () => {
    const { queryByPlaceholderText } = render(<Search onAccountSearch={get_account} onPostSearch={get_post} />);

    const accountInput = queryByPlaceholderText(PLACEHOLDER_ACCOUNT);
    const postInput = queryByPlaceholderText(PLACEHOLDER_POST);

    expect(accountInput).toBeDefined();
    expect(postInput).toBeDefined();
  });

  it('searches for account details', () => {
    const { queryByText, queryByPlaceholderText } = render(
      <Search onAccountSearch={get_account} onPostSearch={get_post} />
    );

    const input = queryByPlaceholderText(PLACEHOLDER_ACCOUNT);
    const button = queryByText(SEARCH_HANDLE);

    expect(button).toBeDefined();
    expect(input).toBeDefined();

    if (button && input) {
      fireEvent.change(input, { target: { value: 'handle' } });
      fireEvent.click(button);

      expect(get_account).toHaveBeenCalledTimes(1);
      expect(get_account).toHaveBeenCalledWith('handle', false);
    }
  });

  it('searches for post details', async () => {
    const { queryByText, queryByPlaceholderText } = render(
      <Search onAccountSearch={get_account} onPostSearch={get_post} />
    );

    const input = queryByPlaceholderText(PLACEHOLDER_POST);
    const button = queryByText(SEARCH_POST);

    expect(input).toBeDefined();
    expect(button).toBeDefined();

    if (button && input) {
      fireEvent.change(input, { target: { value: 'shortcode' } });
      fireEvent.click(button);

      expect(get_post).toHaveBeenCalledTimes(1);
      expect(get_post).toHaveBeenCalledWith('shortcode');
    }
  });
});
