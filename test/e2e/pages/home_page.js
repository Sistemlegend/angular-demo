var HomePage = function HomePage() {
    this.get = function () {
        browser.get('/');
    };

    this.productList = function () {
        return element.all(by.repeater('product in store.products'))
    };

    this.title = function (productTab) {
        return productTab.all(by.css('h3')).first().getText();
    };

    this.price = function (productTab) {
        return productTab.all(by.css('h4')).first().getText();
    };

    this.descriptionWhiteFrame = function (productTab) {
        return productTab.all(by.css('[ng-show="panelCtrl.isSelected(1)"]')).first();
    };

    this.specWhiteFrame = function (productTab) {
        return productTab.all(by.css('[ng-show="panelCtrl.isSelected(2)"]')).first();
    };

    this.additionalInfo = function (whiteFrame) {
        return whiteFrame.all(by.css('p')).first().getText();
    };

    this.specButton = function (productTab) {
        return productTab.all(by.css('[ng-click="panelCtrl.selectTab(2)"]')).first();
    };

    this.reviewButton = function (productTab) {
        return productTab.all(by.css('[ng-click="panelCtrl.selectTab(3)"]')).first();
    };

    this.getReviews = function(productTab) {
        var reviewTab = productTab.all(by.css('[ng-show="panelCtrl.isSelected(3)"]')).first();
        return reviewTab.all(by.repeater('review in product.reviews'));
    };

};

module.exports = HomePage;