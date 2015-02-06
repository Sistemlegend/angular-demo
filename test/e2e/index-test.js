describe('WebApp', function () {

    describe('index page', function () {

        browser.get('http://localhost:9000');

        it('should show three products', function () {
            expect(element.all(by.repeater('product in store.products')).count()).toEqual(3);
        });

        it('should show ruby name and price', function () {
            var ruby = element.all(by.repeater('product in store.products')).first();
            expect(ruby.all(by.css('h3')).first().getText()).toBe('Ruby');
            expect(ruby.all(by.css('h4')).first().getText()).toBe('$102.95');
        });

        it('should show ruby description', function() {
            var ruby = element.all(by.repeater('product in store.products')).first();
            var whiteframe = ruby.all(by.css('[ng-show="tab === 1"]')).first();
            expect(whiteframe.isDisplayed()).toBeTruthy();
            expect(whiteframe.all(by.css('p')).first().getText()).toBe('The reddest ruby in the World!');
        });

        it('should show ruby specifications', function () {
            var ruby = element.all(by.repeater('product in store.products')).first();
            var specButton = ruby.all(by.css('[ng-click="tab = 2"]')).first();
            specButton.click();
            var whiteframe = ruby.all(by.css('[ng-show="tab === 2"]')).first();
            expect(whiteframe.isDisplayed()).toBeTruthy();
            expect(whiteframe.all(by.css('p')).first().getText()).toBe('None yet');
        });

    });
});