export interface IAccountDetails {
  biography: string;
  last_retrieved: Date;
  full_name: string;
  followers: number;
  recent_post: {
    shortcode: string;
    display_url: string;
    likes: number;
    comments: number;
    type: 'image' | 'video' | 'carousel';
  };
}

export interface IAccountDetailsProps {
  details: IAccountDetails | null;
}
