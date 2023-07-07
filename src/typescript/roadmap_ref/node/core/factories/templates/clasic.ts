import { NodeClass } from '@typescript/roadmap_ref/node/core/core';
import { appendAttachment } from '@typescript/roadmap_ref/node/core/data-mutation/append';
import { injectClassicFlags } from '@typescript/roadmap_ref/node/core/factories/injectors/injectors';

export function classicNodeFactoryBoilerplate(): NodeClass {
  // return boilerplate class for classic nodes and the most common
  const node = new NodeClass();
  // classic nodes has a tab attachment and the default color scheme
  injectClassicFlags(node);

  appendAttachment(node, {
    type: 'Tab',
    components: [
      {
        type: 'Title',
        titleText: 'Boilerplate title',
      },
      {
        type: 'Description',
        descriptionText: 'Boilerplate description',
      },
      {
        type: 'LinkBulletList',
        linkBulletListItems: [
          {
            linkURL: 'https://www.google.com',
            text: 'Google',
          },
          {
            linkURL: 'https://www.google.com',
            text: 'Google2',
          },
        ],
      },
    ],
  });

  return node;
}
