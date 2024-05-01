const { $ } = require('@wdio/globals') 
const Page = require('./page');

class GoogleSearch extends Page {

    get inputWrapper () {
        return $('#APjFqb');
    }

    async searching(search){
        await this.inputWrapper.click()
        await this.inputWrapper.setValue(search);
        await browser.pause(2000);
        
    }

    open(){
        return super.open('www.google.com')
    }

}

module.exports = new GoogleSearch();
