document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('fractionCalculatorForm');
    const resultElement = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const operation = document.getElementById('operation').value;
        const numerator1 = parseInt(document.getElementById('numerator1').value);
        const denominator1 = parseInt(document.getElementById('denominator1').value);
        const numerator2 = parseInt(document.getElementById('numerator2').value);
        const denominator2 = parseInt(document.getElementById('denominator2').value);

        if (isNaN(numerator1) || isNaN(denominator1) || isNaN(numerator2) || isNaN(denominator2)) {
            alert('Prosím, zadejte platná čísla pro všechna pole.');
            return;
        }
        

        let resultNumerator, resultDenominator;

        switch (operation) {
            case 'add':
                resultNumerator = numerator1 * denominator2 + numerator2 * denominator1;
                resultDenominator = denominator1 * denominator2;
                break;
            case 'subtract':
                resultNumerator = numerator1 * denominator2 - numerator2 * denominator1;
                resultDenominator = denominator1 * denominator2;
                break;
            case 'multiply':
                resultNumerator = numerator1 * numerator2;
                resultDenominator = denominator1 * denominator2;
                break;
            case 'divide':
                resultNumerator = numerator1 * denominator2;
                resultDenominator = denominator1 * numerator2;
                break;
            default:
                alert('Neplatná operace byla vybrána.');
                return;
        }

        if (denominator2 == denominator1){
            if (operation == 'add'){
                resultNumerator = numerator1 + numerator2;
                resultDenominator = denominator1;
            }
            else if (operation == 'subtract'){
                resultNumerator = numerator1 - numerator2;
                resultDenominator = denominator1;
            }
            else if (operation == 'divide'){
                resultNumerator = numerator1 ;
                resultDenominator = numerator2;
            }  
        }
        
        const resultParagraph = document.createElement('p');
        resultParagraph.textContent = `Výsledek: ${resultNumerator} / ${resultDenominator}`;
        resultElement.appendChild(resultParagraph);
    });
});
