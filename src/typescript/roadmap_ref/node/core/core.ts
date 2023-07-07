// Represents the Node class
import { IColorSchemaFields } from '@type/roadmap/node/colors';
import { selectNodeColorScheme } from '@typescript/roadmap_ref/node/core/factories/injectors/services';
import {
  defaultColorSchemaOption,
  defaultNodeHeight,
  defaultNodeOpacity,
  defaultNodeWidth,
} from '@typescript/roadmap_ref/node/core/factories/params/default-params';
import { IAttachmentObject } from '@type/roadmap/node/attachments';

export class NodeClass {
  components: Component[] = [];
  properties: Properties = new Properties();
  nestedNodesIds: string[] = []; // reference to other NodeClasses from the roadmap
  attachments: IAttachmentObject[] = [];
  actions: Actions;
  draggingBehavior: DraggingBehavior;
  flags: Flags;

  constructor() {}
}

// Represents the Component class
class Component {
  x: number;
  y: number;
  width: number;
  height: number;
  constructor() {}
}

// Represents the Properties class
class Properties {
  color: IColorSchemaFields;
  width: number;
  height: number;
  opacity: number;

  constructor() {
    this.color = selectNodeColorScheme(defaultColorSchemaOption);
    this.width = defaultNodeWidth;
    this.height = defaultNodeHeight;
    this.opacity = defaultNodeOpacity;
  }
}

// Represents the Attachment class
function getAttachment(type: string) {
  // returns the type of attachment
}
// Represents the Actions class
class Actions {
  onClick: Function = () => {};
  onHover: Function = () => {};

  constructor() {}
}

// Represents the DraggingBehavior class
class DraggingBehavior {
  limitation: string;

  constructor() {}
}

// Represents the Flags class
class Flags {
  connFlag: boolean = false;
  nestedFlag: boolean = false;
  chunkFlag: boolean = false;
  connectionPivot: boolean = false;
  markAsDoneBehavior: boolean = false;

  constructor() {}
}

// Represents the Button class
