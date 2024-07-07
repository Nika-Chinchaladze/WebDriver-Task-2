const BaseComponent = require("../common/base.component");

class OptionalPasteComponent extends BaseComponent {
    constructor() {
        super(".post-form__left");
    }

    get postFormName() {
        return this.rootElement.$("input#postform-name");
    }

    get syntaxHighlighting() {
        return this.rootElement.$("span#select2-postform-format-container");
    }

    get chooseSyntaxHighlighting() {
        return $('//li[text()="Bash"]');
    }

    get pasteExpiration() {
        return this.rootElement.$("span#select2-postform-expiration-container");
    }

    get choosePasteExpiration() {
        return $('//li[text()="10 Minutes"]');
    }
}

module.exports = OptionalPasteComponent;
