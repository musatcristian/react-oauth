export interface AccountDetails {
  biography: string;
  last_retrieved: Date;
  full_name: string;
  followers: number;
  recent_post: {
    shortcode: string;
    url: string;
    likes: number;
    comments: number;
  };
}

export interface PostDetails {
  display_url: string;
  dimensions: {
    height: number;
    width: number;
  };
  alt: string;
  caption: string;
}
