document.addEventListener("DOMContentLoaded", () => {
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");

    // Função para aplicar máscara
    function mascara(o, f) {
        setTimeout(() => {
            let v = f(o.value);
            o.value = v;
        }, 1);
    }

    // Funções de formatação
    function cpfMask(v) {
        v = v.replace(/\D/g, "");             // Remove tudo que não é número
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d)/, "$1.$2");
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return v;
    }

    function telefoneMask(v) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d{5})(\d)/, "$1-$2");
        return v;
    }

    function cepMask(v) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d{5})(\d)/, "$1-$2");
        return v;
    }

    // Eventos
    cpf.addEventListener("input", () => mascara(cpf, cpfMask));
    telefone.addEventListener("input", () => mascara(telefone, telefoneMask));
    cep.addEventListener("input", () => mascara(cep, cepMask));
});
