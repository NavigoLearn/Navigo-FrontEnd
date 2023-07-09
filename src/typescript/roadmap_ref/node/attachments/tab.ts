import { ITabComponentProperties } from '@type/roadmap/node/tab';

export class TabComponent {
  componentProperties: ITabComponentProperties;

  constructor(componentProperties: ITabComponentProperties) {
    this.componentProperties = componentProperties;
  }
}

export class TabAttachment {
  components: TabComponent[] = [];
}
