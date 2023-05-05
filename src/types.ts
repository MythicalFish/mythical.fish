export type InfoProps = {
  key: string;
  itemList: string[];
  html?: string;
};

export type ProjectProps = {
  title: string;
  tags: string[];
  privateCode: boolean;
  date: string;
  links: [{ label: string; url: string }];
  previews: [{ label: string; description: string; image: string }];
  html?: string;
  key?: number;
};
