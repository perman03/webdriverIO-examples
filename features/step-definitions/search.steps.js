const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const { Key } = require('webdriverio')

const GoogleSearch = require('../pageobjects/googleSearch.page');

const pages = {
    search: GoogleSearch
}

Given('I am on Google Page', async () => {
    await pages['search'].open()
});

When(/^I search (\w+)$/, async (search) => {
    await GoogleSearch.searching(search);
    await browser.keys([Key.Enter])
})
