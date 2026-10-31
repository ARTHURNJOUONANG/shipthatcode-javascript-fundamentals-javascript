function makeRequire(modules) {
  const cache = new Map();

  function requireModule(name) {
    if (cache.has(name)) {
      return cache.get(name);
    }

    const exports = {};
    cache.set(name, exports);
    modules[name](requireModule, exports);
    return exports;
  }

  return requireModule;
}

const modules = {
  config(requireModule, exports) {
    console.log('evaluating config');
    exports.debug = true;
    exports.level = 'info';
  },
  logger(requireModule, exports) {
    console.log('evaluating logger');
    const config = requireModule('config');
    exports.level = config.level;
    exports.log = () => {};
  },
  alpha(requireModule, exports) {
    console.log('evaluating alpha');
    const beta = requireModule('beta');
    exports.name = 'alpha';
    exports.betaKeys = Object.keys(beta).join(',');
  },
  beta(requireModule, exports) {
    console.log('evaluating beta');
    const alpha = requireModule('alpha');
    console.log(`beta sees ${Object.keys(alpha).length} keys of alpha`);
    exports.name = 'beta';
  },
};

const names = require('fs').readFileSync(0, 'utf-8').trim().split(/\r?\n/);
const requireModule = makeRequire(modules);

for (const name of names) {
  const exports = requireModule(name);
  console.log(`${name} -> ${Object.keys(exports).join(',')}`);
}
