import { NodeClass } from '@typescript/roadmap_ref/node/core/core';
import {
  DescriptionComponent,
  TitleComponent,
} from '@typescript/roadmap_ref/node/components/text';

export function injectNewTitle(
  node: NodeClass,
  titleId: string,
  newTitle: TitleComponent
) {
  const index = node.components.findIndex(
    (component) => component.id === titleId
  );
  if (index === -1) throw new Error('Component not found');
  if (node.components[index].type !== 'Title')
    throw new Error('Component is not a title');
  node.components[index].component = newTitle;
}

export function injectNewDescription(
  node: NodeClass,
  descriptionId: string,
  newDescription: DescriptionComponent
) {
  const index = node.components.findIndex(
    (component) => component.id === descriptionId
  );
  if (index === -1) throw new Error('Component not found');
  if (node.components[index].type !== 'Description')
    throw new Error('Component is not a description');
  node.components[index].component = newDescription;
}
