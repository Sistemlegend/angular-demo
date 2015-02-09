describe('WebApp', function () {

    describe('index page', function () {

        var HomePage = require("./pages/home_page.js");
        var page = new HomePage();

        beforeEach(function() {
            page.get();
        });

        it('should show three products', function () {
            expect(page.productList().count()).toEqual(3);
        });

        it('should show ruby name and price', function () {
            var ruby = page.productList().first();
            expect(page.title(ruby)).toBe('Ruby');
            expect(page.price(ruby)).toBe('$102.95');
        });

        it('should show ruby additionalInfo', function() {
            var ruby = page.productList().first();
            var whiteFrame = page.descriptionWhiteFrame(ruby);
            expect(whiteFrame.isDisplayed()).toBeTruthy();
            expect(page.additionalInfo(whiteFrame)).toBe('The reddest ruby in the World!');
        });

        it('should show ruby specifications', function () {
            var ruby = page.productList().first();
            var specButton = page.specButton(ruby);
            specButton.click();
            var whiteFrame = page.specWhiteFrame(ruby);
            expect(whiteFrame.isDisplayed()).toBeTruthy();
            expect(page.additionalInfo(whiteFrame)).toBe('None yet');
        });

        it('should show ruby reviews', function() {
            var ruby = page.productList().first();
            var reviewButton = page.reviewButton(ruby);
            reviewButton.click();
            expect(page.getReviews(ruby).count()).toBe(2);
        });

    });
});