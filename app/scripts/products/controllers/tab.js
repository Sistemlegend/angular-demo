module.exports = function () {
    var tab = 1;

    this.selectTab = function (value) {
        tab = value;
    };

    this.isSelected = function (value) {
        return tab == value;
    };
};
