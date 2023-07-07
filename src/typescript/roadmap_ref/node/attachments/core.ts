import { TabAttachmentFactory } from '@typescript/roadmap_ref/node/attachments/factory';

export class Attachment<T extends 'tab' | 'tab2'> {
  type: T;
  constructor(type: T, object) {
    this.type = type;
    if (type === 'tab') {
      TabAttachmentFactory([
        {
          type: 'Title',
          titleText: 'My Title',
        },
        {
          type: 'Description',
          descriptionText: 'My Description',
        },
      ]);
    }
  }
}
