import {
  DescriptionComponent,
  TitleComponent,
} from '@typescript/roadmap_ref/node/components/text/core';

export function factoryComponentTitle(titleString: string): TitleComponent {
  return new TitleComponent(0, 0, 100, 35, titleString);
}

export function factoryComponentDescription(
  descriptionString: string
): DescriptionComponent {
  return new DescriptionComponent(0, 0, 100, 100, descriptionString);
}
