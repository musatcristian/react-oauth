export interface ISearchProps {
  onAccountSearch: (handle: string, force: boolean) => void;
  onPostSearch: (shortcode: string) => void;
}
