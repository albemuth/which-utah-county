
var target = require('../county-locator');
require('chai').should();

describe('County locator', function() {
    it('should guess the closest county', function () {
        target.locate({
            latitude: 40.745812,
            longitude: -111.874173
        }).name.should.equal('Salt Lake');
    });
    it('should guess the closest county out of a limited list', function () {
        target.locate({
            latitude: 40.721763,
            longitude: -111.541955
        }, ['Uintah', 'Utah', 'Weber']).name.should.equal('Utah');
    });
});
