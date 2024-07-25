import { iconType } from '..';

export type IHaulerLink = {
  iconType: iconType;
  name: string;
  path: string;
  link: boolean;
};

export type IHaulerLinks = {
  header: string;
  links: IHaulerLink[];
};
