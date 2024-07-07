const { expect, browser } = require('@wdio/globals');

const { page } = require("../pom/index");

describe("Test PasteBin page", () => {
    beforeEach(async () => {
        await page("base").open();
    });

    it("Create 'New Paste' with the following attributes.", async () => {
        // Arrange
        const code = `
        git config --global user.name  "New Sheriff in Town"
        git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
        git push origin master --force
        `;
        const nameTitle = "how to gain dominance among developers";

        // Act
        await page("new").postFormText.setValue(code);
        await page("optional").syntaxHighlighting.click();
        await page("optional").chooseSyntaxHighlighting.click();
        await page("optional").pasteExpiration.click();
        await page("optional").choosePasteExpiration.click();
        await page("optional").postFormName.setValue(nameTitle);

        // Assert
        const postFormText = await page("new").postFormText.getValue();
        const syntaxList = await page("optional").syntaxHighlighting.getValue();
        const expirationList = await page("optional").pasteExpiration.getValue();
        const postFormName = await page("optional").postFormName.getValue();

        expect(postFormText).toContain(code);
        expect(syntaxList).toHaveText("Bash");
        expect(expirationList).toHaveText("10 Minutes");
        expect(postFormName).toHaveText(nameTitle);

        await browser.pause(10000);

    });
});
