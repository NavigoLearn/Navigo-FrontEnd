// file containing different injectors for some properties of the node

import { IColorSchemaOptions } from '@type/roadmap/node/colors';
import { colorSchemas } from '@typescript/roadmap_ref/node/core/factories/params/params';
import { NodeClass } from '@typescript/roadmap_ref/node/core/core';

export function injectNodeColorScheme(
  node: NodeClass,
  selector: IColorSchemaOptions = 'default'
) {
  node.properties.color = colorSchemas[selector];
}

export function injectClassicFlags(node: NodeClass) {
  node.flags.chunkFlag = true;
  node.flags.connFlag = true;
  node.flags.connectionPivotFlag = true;
}
