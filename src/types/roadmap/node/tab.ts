export type ITabComponentType =
  | 'Title'
  | 'Description'
  | 'Link'
  | 'BulletList'
  | 'LinkBulletList';

export interface ITabComponentPropertiesSelector {
  Title: TitleProperties;
  Description: DescriptionProperties;
  Link: LinkProperties;
  BulletList: BulletListProperties;
  LinkBulletList: LinkBulletListProperties;
}

export type ITabComponentProperties<T extends ITabComponentType> = {
  type: T;
} & ITabComponentPropertiesSelector[T];

export type ITabComponentPropertiesSelectorParallel =
  | ({
      type: 'Title';
    } & TitleProperties)
  | ({
      type: 'Description';
    } & DescriptionProperties)
  | ({
      type: 'Link';
    } & LinkProperties)
  | ({
      type: 'BulletList';
    } & BulletListProperties)
  | ({
      type: 'LinkBulletList';
    } & LinkBulletListProperties);

interface TitleProperties {
  titleText: string;
}

interface DescriptionProperties {
  descriptionText: string;
}

interface LinkProperties {
  linkURL: string;
}

interface BulletListProperties {
  bulletListItems: string[];
}
interface LinkBulletListProperties {
  linkBulletListItems: LinkBulletListItem[];
}
export interface LinkBulletListItem {
  linkURL: string;
  text: string;
}
