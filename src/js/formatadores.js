// Formatador de Telefone
function formatarTelefone(valor) {
    valor = valor.replace(/\D/g, '');
    if (valor.length <= 10) {
        valor = valor.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
        valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return valor;
}

// Formatador de CPF
function formatarCPF(valor) {
    valor = valor.replace(/\D/g, '');
    valor = valor.substring(0, 11);
    valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return valor;
}

// Formatador de CNPJ
function formatarCNPJ(valor) {
    valor = valor.replace(/\D/g, '');
    valor = valor.substring(0, 14);
    valor = valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    return valor;
}

// Formatador genérico de CPF/CNPJ
function formatarCPFCNPJ(valor) {
    valor = valor.replace(/\D/g, '');
    if (valor.length <= 11) {
        return formatarCPF(valor);
    } else {
        return formatarCNPJ(valor);
    }
}

// Função para adicionar listeners aos campos
function inicializarFormatadores() {
    const campoTelefone = document.querySelector("#numeroDoCelularPagador");
    const campoCPFPagador = document.querySelector("#cpfCnpjPagador");
    const campoCNPJBeneficiario = document.querySelector("#cpfCnpjBeneficiario");

    if (campoTelefone) {
        campoTelefone.addEventListener('input', function() {
            this.value = formatarTelefone(this.value);
        });
    }

    if (campoCPFPagador) {
        campoCPFPagador.addEventListener('input', function() {
            this.value = formatarCPFCNPJ(this.value);
        });
    }

    if (campoCNPJBeneficiario) {
        campoCNPJBeneficiario.addEventListener('input', function() {
            this.value = formatarCPFCNPJ(this.value);
        });
    }
}

// Inicializar quando o documento estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarFormatadores);
} else {
    inicializarFormatadores();
}
