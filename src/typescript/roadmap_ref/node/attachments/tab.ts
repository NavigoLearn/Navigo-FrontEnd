import {
  ITabComponentProperties,
  ITabComponentPropertiesSelector,
  ITabComponentType,
} from '@type/roadmap/node/tab';

export class TabComponent<T extends ITabComponentType> {
  componentType: T;
  componentProperties: ITabComponentProperties<T>;

  constructor(type: T, properties: ITabComponentPropertiesSelector[T]) {
    this.componentType = type;
    this.componentProperties = { type, ...properties };
  }
}

export class TabAttachment {
  components: TabComponent<ITabComponentType>[];
  constructor() {
    const titleComponent = new TabComponent('Title', { titleText: 'My Title' });
    const descriptionComponent = new TabComponent('Description', {
      descriptionText: 'My Description',
    });
    this.components.push(titleComponent, descriptionComponent);
  }
}
