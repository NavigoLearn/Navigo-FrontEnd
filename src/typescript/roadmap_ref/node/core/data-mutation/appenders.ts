import { NodeClass } from '@typescript/roadmap_ref/node/core/core';
import { IAttachmentBuilder } from '@type/roadmap/node/attachments';
import { factoryAttachment } from '@typescript/roadmap_ref/node/attachments/factory';

export function appenderAttachment(
  node: NodeClass,
  attachment: IAttachmentBuilder
): void {
  const attachmentObject = factoryAttachment(attachment);
  node.attachments.push(attachmentObject);
  //.... other ifs for building other attachments
}
