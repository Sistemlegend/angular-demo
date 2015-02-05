describe('WebApp', function () {

    describe('index page', function () {

        browser.get('http://localhost:9000');

        it('should show the page', function () {
            expect(element.all(by.css('h3')).
                first().getText()).toBe("Azurite");
            expect(element.all(by.css('h4')).
                first().getText()).toBe("$ 2.95");
        });
    });
});