var sinon = require('sinon');
var expect = require('chai').expect;
var cfg = require('./../../../src/config')

var myEnv = {
    env: {
        PORT: 50,
        NODE_ENV: 'test',
        IP: '127.0.0.0'
    }
};

describe("Config", function() {
    "use strict";


    it('should request the environment setting', function() {
        var settings = cfg(myEnv).expressSettings;
        expect(settings).to.have.property('port').and.to.equal(50);
    })
});
