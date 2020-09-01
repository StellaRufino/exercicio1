function interativo(){
    document.getElementById("interacao").onclick;
    alert('Você será redirecionado para página oficial de informações sobre o COVID-19 no Brasil.\n Deseja prosseguir com essa requisição?')
    location.href = "https://covid.saude.gov.br/";
}

function infoSP(){
    document.getElementById("infoSP").onclick;
    alert('Deseja ver apenas informações do Estado de São Paulo?');
    location.href = 'https://www.seade.gov.br/coronavirus/';
}

function maisInfo(){
    document.getElementById('maisInfo').onclick;
    alert('O que você precisa saber sobre o COVID-19: Sintomas, Orientações e muito mais!')
    location.href = 'https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/vigilancia_em_saude/doencas_e_agravos/coronavirus/index.php?p=291730';
}