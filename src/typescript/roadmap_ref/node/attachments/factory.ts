import {
  ITabComponentPropertiesSelector,
  ITabComponentPropertiesSelectorParallel,
  ITabComponentType,
} from '@type/roadmap/node/tab';
import { TabComponent } from '@typescript/roadmap_ref/node/attachments/tab';

function TabComponentFactory<T extends ITabComponentType>(
  type: T,
  properties: ITabComponentPropertiesSelector[T]
): TabComponent<T> {
  return new TabComponent(type, properties);
}

export function TabAttachmentFactory<T extends ITabComponentType>(
  components: ITabComponentPropertiesSelectorParallel[]
) {
  const titleComponent = TabComponentFactory('Title', {
    titleText: 'My Title',
  });
  const descriptionComponent = TabComponentFactory('Description', {
    descriptionText: 'My Description',
  });
  return [titleComponent, descriptionComponent];
}
