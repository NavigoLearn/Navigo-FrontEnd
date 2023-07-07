import { IColorSchemaFields } from '@type/roadmap/node/colors';
import { selectNodeColorScheme } from '@typescript/roadmap_ref/node/core/factories/injectors/services';
import {
  defaultColorSchemaOption,
  defaultNodeHeight,
  defaultNodeOpacity,
  defaultNodeWidth,
} from '@typescript/roadmap_ref/node/core/factories/params/default-params';
import { IAttachmentObject } from '@type/roadmap/node/attachments';
import { IComponentsObject } from '@type/roadmap/node/components';

export class NodeClass {
  components: ({
    id: string;
  } & IComponentsObject)[] = []; // title, description, button and anything inside the node
  properties: Properties = new Properties(); // properties of the node itself
  nestedNodesIds: string[] = []; // reference to other NodeClasses from the roadmap
  attachments: {
    id: string;
    attachment: IAttachmentObject;
  }[] = []; // special components that are much more customizable and special, meant for any kind of interraction
  actions: Actions; // the actions that are set on the node
  availableActions: {}; // the actions that can be set on the node
  draggingBehavior: DraggingBehavior; // the dragging behavior of the node
  flags: Flags; // flags to indificate different behaviors of the node
  data: any; // data related to parents, connection stuff in general
  constructor() {}
}

// Represents the Component class
export class ComponentNode {
  x: number;
  y: number;
  width: number;
  height: number;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
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
  connectionPivotFlag: boolean = false;
  markAsDoneBehaviorFlag: boolean = false;

  constructor() {}
}

// Represents the Button class
