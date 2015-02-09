describe('PanelController', function () {

    var panelController;

    beforeEach(module('store'));

    beforeEach(inject(function ($controller) {
        panelController = $controller('PanelController');
    }));


    it('Should be defined', function () {
        expect(panelController).toBeDefined();
    });

});