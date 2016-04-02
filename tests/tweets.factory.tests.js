
'use strict';

describe('TweetsFactory', function () {

    // You need to load modules that you want to test,
    // it loads only the "ng" module by default.
    beforeEach(module('tweets'));

    var $httpBackend;
    var TweetsFactory;

    it('Should be capable of returning data through the get protocol', function () {

        // // Wrap the parameter in underscores
        beforeEach(inject(function (_$httpBackend_, _TweetsFactory_) {
            $httpBackend = _$httpBackend_;
            TweetsFactory = _TweetsFactory_;
        }));

        var returnValue = '{"returnedValue":"1"}';

        $httpBackend.expectGET('/tweets/user_timeline/dreamerkumar').respond(returnValue);

        TweetsFactory.get({ action: 'user_timeline', user: 'dreamerkumar' }, function (response) {
            expect(JSON.stringify(response)).toEqual(returnValue);
        });

        $httpBackend.flush();
    });
});