const BaseComponent = require("../common/base.component");

class SubmitComponent extends BaseComponent {
    constructor() {
        super(".bash")
    }

    get enteredCode() {
        return this.rootElement;
    }
}

module.exports = SubmitComponent;
