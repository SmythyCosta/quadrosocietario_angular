/*
 * APP Config.
 * 
 * Este é o arquivo de configuracoes globais da aplicacao.
 * Obs: qualquer mudanca vai impactar por toda a aplicacao.
 * 
 */

export const appConfig = {

    /*
    |--------------------------------------------------------------------------
    | Api Viacep
    |--------------------------------------------------------------------------
    | URL da api do servicos de CEP
    */
    api_viacep: 'https://viacep.com.br/ws',
    
    /*
    |--------------------------------------------------------------------------
    | Erros Backend
    |--------------------------------------------------------------------------
    | Exibe os erros do backend.
    | Eceptions
    */
    exibir_erros_Backend: 1,

    /*
    |--------------------------------------------------------------------------
    | Mengens de operação
    |--------------------------------------------------------------------------
    | Mengans seram mostradas para informar o
    | status da operações.
    */
    mensagem_sucesso: 'Operação realizada com sucesso',
    mensagem_erro: 'Falha ao realizada esta Operação',
    mensagem_erro_sisAdmin: 'Erro, consulte o administrador do sistema.',

    /*
    |--------------------------------------------------------------------------
    | Load
    |--------------------------------------------------------------------------
    | tempo milisegundo do load.
    */
    loading_time: 0,
    
};