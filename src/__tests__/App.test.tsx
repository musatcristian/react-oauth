import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { App } from '../app';
import { getAccountDetails, getPostDetails } from '../utils';
import { AccountDetails, PostDetails } from '../types';
import { PLACEHOLDER_ACCOUNT, PLACEHOLDER_POST, SEARCH_HANDLE, SEARCH_POST } from '../constants';

const mock_account: AccountDetails = {
  biography: 'biography',
  last_retrieved: new Date(),
  full_name: 'Full Name',
  followers: 2,
  recent_post: {
    shortcode: 'shortcode',
    url: 'url',
    likes: 5,
    comments: 3,
  },
};

const mock_post: PostDetails = {
  alt: 'alt definition',
  caption: 'caption',
  dimensions: {
    height: 1000,
    width: 1020,
  },
  display_url: 'url',
};

jest.mock('../utils/getAccountDetails.util.ts');
jest.mock('../utils/getPostDetails.util.ts');

const mockGetAccount = getAccountDetails as jest.MockedFunction<typeof getAccountDetails>;
const mockGetPost = getPostDetails as jest.MockedFunction<typeof getPostDetails>;

describe('<App />', () => {
  it('renders App component', () => {
    const { queryByText } = render(<App />);

    const main = queryByText('App version 0.1.0');

    expect(main).toBeDefined();
  });

  it('searches for account details', () => {
    mockGetAccount.mockResolvedValueOnce(mock_account);
    const { queryByText, queryByPlaceholderText } = render(<App />);

    const input = queryByPlaceholderText(PLACEHOLDER_ACCOUNT);
    const button = queryByText(SEARCH_HANDLE);

    expect(button).toBeDefined();
    expect(input).toBeDefined();

    if (button && input) {
      fireEvent.change(input, { target: { value: 'handle' } });
      fireEvent.click(button);

      expect(mockGetAccount).toHaveBeenCalledTimes(1);
      expect(mockGetAccount).toHaveBeenCalledWith('handle', false);
    }
  });

  it('searches for post details', () => {
    mockGetPost.mockResolvedValueOnce(mock_post);
    const { queryByText, queryByPlaceholderText } = render(<App />);

    const input = queryByPlaceholderText(PLACEHOLDER_POST);
    const button = queryByText(SEARCH_POST);

    expect(button).toBeDefined();
    expect(input).toBeDefined();

    if (button && input) {
      fireEvent.change(input, { target: { value: 'shortcode' } });
      fireEvent.click(button);

      expect(mockGetPost).toHaveBeenCalledTimes(1);
      expect(mockGetPost).toHaveBeenCalledWith('shortcode');
    }
  });
});
