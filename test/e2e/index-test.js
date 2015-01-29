describe('WebApp', function () {

    describe('index page', function () {

        browser.get('http://localhost:9000');

        it('should show the page', function () {
            expect(element.all(by.css('h2')).
                first().getText()).toBe("Gem Store");
        });

        it('should show the page', function () {
            expect(element.all(by.css('p')).
                first().getText()).toBe("Did you know that 2 + 2 = 4 ?");
        });
    });
});