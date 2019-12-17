'use strict';

const mock = require('egg-mock');

describe('test/lodash.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/lodash-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, lodash')
      .expect(200);
  });
});
