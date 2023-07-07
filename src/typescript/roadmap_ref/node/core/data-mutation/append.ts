import { NodeClass } from '@typescript/roadmap_ref/node/core/core';
import { IAttachmentBuilder } from '@type/roadmap/node/attachments';
import { factoryAttachment } from '@typescript/roadmap_ref/node/attachments/factory';
import { v4 as uuidv4 } from 'uuid';

export function appendAttachment(
  node: NodeClass,
  attachment: IAttachmentBuilder
): void {
  const attachmentObject = factoryAttachment(attachment);
  const id = uuidv4();
  node.attachments.push({
    id,
    attachment: attachmentObject,
  });
  //.... other ifs for building other attachments
}

export function appendSubnode(node: NodeClass, id: string) {
  node.nestedNodesIds.push(id);
}

export function appendComponentDescription(
  node: NodeClass,
  description: string,
  x: number,
  y: number,
  width: number,
  height: number
) {
  const id = uuidv4();
  node.components.push({
    id: uuidv4(),
    type: 'Description',
    component: {
      text: description,
      textSize: 50,
      textFont: '',
      textColor: '',
      x,
      y,
      width,
      height,
    },
  });
  return id;
}
export function appendComponentTitle(
  node: NodeClass,
  title: string,
  x: number,
  y: number,
  width: number,
  height: number
) {
  const id = uuidv4();
  node.components.push({
    id: uuidv4(),
    type: 'Title',
    component: {
      text: title,
      textSize: 100,
      textFont: '',
      textColor: '',
      x,
      y,
      width,
      height,
    },
  });
  return id;
}
