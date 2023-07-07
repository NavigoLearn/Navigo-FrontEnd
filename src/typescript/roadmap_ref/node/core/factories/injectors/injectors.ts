// file containing different injectors for some properties of the node

import { IColorSchemaOptions } from '@type/roadmap/node/colors';
import { colorSchemas } from '@typescript/roadmap_ref/node/core/factories/params/params';

export function selectNodeColorScheme(
  selector: IColorSchemaOptions = 'default'
) {
  const option: IColorSchemaOptions = selector;
  return colorSchemas[option];
}
