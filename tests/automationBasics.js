var react = {}
module.exports = {
    beforeEach: browser => {
        react = browser.page.reactApp()
        react
            .navigate()
    },
    after: browser => {
        react
            
    },
    'Evens and Odds': browser => {
        react
            .waitForElementPresent('@evenOdds')
            .setValue('@evenOdds', '246')
            .click('@split')
            .expect.element('@evenResults').text.to.contain('246')
    },
    'Null Test': browser => {
        react
            .setValue('@evenOdds', 'blank')
            .click('@split')
            .expect.element('@oddResults').text.to.contain('null')
    },
    'Filter Objects': browser => {
        react
            .setValue('@objFiltInput', 'name')
            .click('@objFiltBtn')
            .expect.element('@objFiltResults').text.to.contain('Jimmy Joe', 'Jeremy Schrader')
    },
    'Filter Strings': browser => {
        react
            .setValue('@filtStrngInput', 'Jennifer')
            .click('@filtButton')
            .expect.element('@filterStringResults').text.to.contain('Jennifer')
    },
    'Filter Strings 2': browser => {
        react
            .setValue('@filtStrngInput', 'Melody')
            .click('@filtButton')
            .expect.element('@filterStringResults').text.to.contain('Melody')
    },
    'Palindrome': browser => {
        react
            .setValue('@palinInput', 'racecar')
            .click('@palinButton')
            .expect.element('@palinResults').text.to.equal('Palindrome: true')
    },
    'Palindrome 2': browser => {
        react
            .setValue('@palinInput', 'what the dunk')
            .click('@palinButton')
            .expect.element('@palinResults').text.to.equal('Palindrome: false')
    },
    'Sum': browser => {
        react
            .setValue('@sumLine1', '42')
            .setValue('@sumLine2', '21')
            .click('@sumButton')
            .expect.element('@sumResults').text.to.contain('63')
    },
    'Sum 2': browser => {
        react
            .setValue('@sumLine1', '42')
            .setValue('@sumLine2', '-21')
            .click('@sumButton')
            .expect.element('@sumResults').text.to.contain('21')
    }
}