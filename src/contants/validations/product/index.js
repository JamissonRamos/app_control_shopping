import * as yup from "yup";

export const Product = yup.object().shape({
    
    productName: yup
        .string()
        .required('Campo Produto é obrigatório'),
    datePurchase: yup
        .date()
        .transform((value, originalValue) => {
            // Se o campo for uma string vazia, transforma em null para não gerar erro de cast
            return originalValue === '' ? null : value;
        })
        .min(new Date(1900, 0, 1), 'A data deve ser posterior a 01/01/1900')
        .required('Campo Data Compra é obrigatório'),
    quantityPurchase: yup
        .string()
        .required('Campo QTD Produto é obrigatório')
        .matches(/^[A-Za-z0-9.]+$/, 'A quantidade deve conter apenas letras, números e o caractere ponto (.), sem outros caracteres especiais')
        .test('not-zero', 'A quantidade não pode ser igual a 0', (value) => {
            const sanitizedValue = value.replace(/^0+/, ''); // Remove zeros à esquerda
            return sanitizedValue !== '' && sanitizedValue !== '0'; // Verifica se o valor não é vazio e não é "0"
        })
        .test('only-numbers-or-mixed', 'A quantidade deve conter apenas números, letras, ou uma combinação de ambos', (value) => {
            const onlyNumbers = /^[0-9.]+$/;
            const containsNumbersAndLetters = /^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z0-9.]+$/;
            return onlyNumbers.test(value) || containsNumbersAndLetters.test(value);
        })
        ,


    valuePurchase: yup
        .string()
        // Deve fica antes do teste, o teste vai cuida quando o valor for R$ 0,00 
        .required('Campo Valor Compra é obrigatório')
        .test('not-zero', 'O valor deve ser diferente de R$ 0,00', (value) => {
            if (!value) return false; // Verifica se o valor está vazio
            const unformattedValue = value.replace(/[^\d,]/g, '').replace(',', '.'); // Remove formatação para comparação numérica
            return parseFloat(unformattedValue) !== 0; // Verifica se o valor é diferente de zero
        }),
});