describe('PanelController', function () {

    var panelController;

    beforeEach(module('products'));

    beforeEach(inject(function ($controller) {
        panelController = $controller('PanelController');
    }));

    it('Should be defined', function () {
        expect(panelController).toBeDefined();
    });

    it('Should select tab 1 on startup', function() {
        expect(panelController.isSelected(1)).toBeTruthy();
    });

    it('Should select tab 2', function() {
        panelController.selectTab(2);
        expect(panelController.isSelected(2)).toBeTruthy();
    });

});