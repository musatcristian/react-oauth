export interface IPostDetails {
  display_url: string;
  dimensions: {
    height: number;
    width: number;
  };
  alt: string;
  caption: string;
}

export interface IPostDetailsProps {
  details: IPostDetails | null;
}
