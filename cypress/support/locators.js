const locators = {
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },
    MENU : {
        SETTINGS : '.dropdown-toggle',
        CONTAS : '[href="/contas"]',
        RESET : '[href="/reset"]'
    },
    CONTAS : {
        NOME : '.form-control',
        BTN_SALVAR: '.btn',
        BTN_ALTERAR_SELECT : "//table//td[contains(., 'Joao barbosa')]/..//i[@class='far fa-edit']"
    },
    MESSAGE :  '.toast-message'

}
export default locators;