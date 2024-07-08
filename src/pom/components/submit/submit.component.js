const BaseComponent = require("../common/base.component");

class SubmitComponent extends BaseComponent {
    constructor() {
        super(".post-view")
    }
    
    get enteredCode() {
        return this.rootElement.$(".bash ol");
    }

    get bashSyntax() {
        return this.rootElement.$(".left a");
    }
}

module.exports = SubmitComponent;
