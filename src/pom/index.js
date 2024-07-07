const BasePage = require("./pages/base.page");
const NewPasteComponent = require("../pom/components/paste/new-paste.component");
const OptionalPasteComponent = require("../pom/components/paste/optional-paste.component");
const SubmitComponent = require("../pom/components/submit/submit.component");

/**
 * 
 * @param name {'base' | 'new' | 'optional' | 'submit'} 
 * @returns 
 */

function page(name) {
    const items = {
        base: new BasePage(),
        new: new NewPasteComponent(),
        optional: new OptionalPasteComponent(),
        submit: new SubmitComponent(),
    };
    return items[name.toLowerCase()];
}

module.exports = { page };
