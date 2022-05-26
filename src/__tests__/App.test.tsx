import React from 'react';
import { findByText, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { App } from '../App';
import { getAccountDetails, getPostDetails, showGithubUser } from '../utils';
import { GithubUser, IAccountDetails, IPostDetails } from '../types';
import { HEADING, LOGIN, LOGIN_GITHUB, PLACEHOLDER_ACCOUNT, PLACEHOLDER_POST, SEARCH_HANDLE, SEARCH_POST } from '../constants';

const mock_account: IAccountDetails = {
  biography: 'biography',
  last_retrieved: new Date(),
  full_name: 'Full Name',
  followers: 2,
  recent_post: {
    shortcode: 'shortcode',
    display_url: 'url',
    likes: 5,
    comments: 3,
    type: 'image',
  },
};

const mock_post: IPostDetails = {
  alt: 'alt definition',
  caption: 'caption',
  dimensions: {
    height: 1000,
    width: 1020,
  },
  display_url: 'url',
};

const mock_user: GithubUser = {
  avatar_url: '',
  bio: 'bio',
  blog: 'asdasd',
  company: 'ggdgsd',
  created_at: 'yesterday',
  email: '@email',
  events_url: 'events',
  followers: 2,
  followers_url: 'gdgdgd',
  following: 2,
  following_url: 'dhdhshds',
  gists_url: 'gist',
  gravatar_id: '123123123',
  hireable: false,
  html_url: 'tatata.url.com',
  id: 1,
  location: 'bababa',
  login: 'login',
  name: 'Cristian Musat',
  node_id: 'hsdhdshhsd',
  organizations_url: 'jdjdjd',
  public_gists: 0,
  public_repos: 5,
  received_events_url: 'hdhdhdhd',
  repos_url: 'repos',
  site_admin: true,
  starred_url: 'jsjsjsjs',
  subscriptions_url: 'asubs',
  twitter_username: 'twitter',
  type: 'user',
  updated_at: 'today',
  url: 'jajjasjajs',
}

jest.mock('../utils/getAccountDetails.util.ts');
jest.mock('../utils/getPostDetails.util.ts');
jest.mock('../utils/github.util.ts');

const mockGetAccount = getAccountDetails as jest.MockedFunction<typeof getAccountDetails>;
const mockGetPost = getPostDetails as jest.MockedFunction<typeof getPostDetails>;
const mockGithubUser = showGithubUser as jest.MockedFunction<typeof showGithubUser>;

describe('<App />', () => {
  it('renders App component', () => {
    const {queryByText} = render(<App />);

    const main = queryByText(HEADING);

    expect(main).toBeVisible();
  });

  it('should show login modal', () => {
    const { getByText } = render(<App />);
    const button = getByText(LOGIN);

    expect(button).toBeVisible();

    fireEvent.click(button);
    const modal = getByText(LOGIN_GITHUB);
    expect(modal).toBeVisible();
  });

  it('should show user name', async () => {
    mockGithubUser.mockResolvedValueOnce(mock_user);
    const { getByText } = render(<App />);
    const showUser = getByText('Show User');
    expect(showUser).toBeVisible();
    fireEvent.click(showUser);

    expect(mockGithubUser).toHaveBeenCalledTimes(1);
    expect(mockGithubUser).toHaveBeenCalledWith();

    await waitFor(() => {
      const user = getByText('Hi ' + mock_user.name);
      expect(user).toBeVisible();
      expect(showUser).not.toBeVisible();
    });
  });

  test('App snapshot', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
