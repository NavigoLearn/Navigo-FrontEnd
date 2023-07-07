import { NodeClass } from '@typescript/roadmap_ref/node/core/core';
import {
  DescriptionComponent,
  TitleComponent,
} from '@typescript/roadmap_ref/node/components/text';

export function injectNewTitle(
  node: NodeClass,
  id: string,
  title: TitleComponent
) {
  const index = node.components.findIndex((component) => component.id === id);
  if (index === -1) throw new Error('Component not found');
  if (node.components[index].type !== 'Title')
    throw new Error('Component is not a title');
  node.components[index].component = title;
}

export function injectNewDescription(
  node: NodeClass,
  id: string,
  description: DescriptionComponent
) {
  const index = node.components.findIndex((component) => component.id === id);
  if (index === -1) throw new Error('Component not found');
  if (node.components[index].type !== 'Description')
    throw new Error('Component is not a description');
  node.components[index].component = description;
}
