import { Plugin } from '@tachybase/server';

export class PluginSampleHelloServer extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {}

  async install() {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default PluginSampleHelloServer;
