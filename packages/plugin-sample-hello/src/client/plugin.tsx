import { Plugin } from '@tachybase/client';

class PluginSampleHelloClient extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    alert('---')
  }
}

export default PluginSampleHelloClient;
