const locators = {
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },
    MENU : {
        SETTINGS : '.dropdown-toggle',
        CONTAS : '[href="/contas"]',
        RESET : '[href="/reset"]',
        MOVIMENTACAO : '[data-test=menu-movimentacao]'
    },
    CONTAS : {
        NOME : '.form-control',
        BTN_SALVAR: '.btn',
        BTN_ALTERAR_SELECT : "//table//td[contains(., 'Joao barbosa')]/..//i[@class='far fa-edit']"
    },
    MOVIMENTACAO : {
        DESCRICAO : '[data-test=descricao]',
        VALOR : '[data-test=valor]',
        INTERESSADO : '[data-test=envolvido]',
        BTN_SALVAR:'.btn-primary'

    },
    ESTRATO : {
        LINHAS : '.list-group > li ',
        XP_BUSCA_ELEMENTO : "//span[contains(., 'Desc')]/following-sibling::small[contains(., '127')]"
    },
    MESSAGE :  '.toast-message'

}
export default locators;