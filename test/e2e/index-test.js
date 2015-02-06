describe('WebApp', function () {

    describe('index page', function () {

        browser.get('http://localhost:9000');

        it('should show the page', function () {
            expect(element.all(by.css('h3')).
                last().getText()).toBe("Emerald");
            expect(element.all(by.css('h4')).
                last().getText()).toBe("$150.50");
        });

        it('should show three products', function () {
            expect(element.all(by.repeater('product in store.products')).count()).toEqual(3);
        });
    });
});