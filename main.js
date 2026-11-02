const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

const sources = {
  config: (module, require) => {
    console.log('evaluating config');
    module.exports = { debug: true, level: 3 };
  },
  logger: (module, require) => {
    console.log('evaluating logger');
    const config = require('config');
    module.exports = { level: config.level, log: (msg) => console.log('[log] ' + msg) };
  },
  alpha: (module, require) => {
    console.log('evaluating alpha');
    const beta = require('beta');
    module.exports = { name: 'alpha', betaKeys: Object.keys(beta).length };
  },
  beta: (module, require) => {
    console.log('evaluating beta');
    const alpha = require('alpha');
    console.log('beta sees ' + Object.keys(alpha).length + ' keys of alpha');
    module.exports = { name: 'beta' };
  },
};

function makeRequire(sources) {
  const cache = new Map();

  function req(name) {
    if (cache.has(name)) {
      return cache.get(name).exports;
    }
    if (!Object.prototype.hasOwnProperty.call(sources, name)) {
      return undefined;
    }

    const module = { exports: {} };
    cache.set(name, module);
    sources[name](module, req);
    return module.exports;
  }

  return req;
}

const load = makeRequire(sources);
for (const name of lines) {
  const exported = load(name);
  if (exported === undefined) {
    console.log(name + ' -> missing');
  } else {
    console.log(name + ' -> ' + Object.keys(exported).join(','));
  }
}
