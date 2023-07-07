import { ITabComponentProperties } from '@type/roadmap/node/tab';
import { TabAttachment } from '@typescript/roadmap_ref/node/attachments/tab';

export type IAttachmentOptions = 'Tab';

export type IAttachmentBuilder =
  | ({
      type: 'Tab';
    } & {
      components: ITabComponentProperties[];
    })
  | ({
      type: 'Tabelse';
    } & {
      someotherprop: string;
    });

export type IAttachmentObject =
  | ({
      type: 'Tab';
    } & {
      tabAttachment: TabAttachment;
    })
  | ({
      type: 'Tabelse2';
    } & {
      someotherprop242: string;
    });
