describe('PanelController', function () {

    var panelController;

    beforeEach(module('store'));
    beforeEach(module('templates'));

    beforeEach(inject(function ($compile, $rootScope) {
        $rootScope.product = {};
        var element = $compile('<product-panels product=product></product-panels>')($rootScope);
        $rootScope.$digest();
        panelController = element.controller('productPanels');
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