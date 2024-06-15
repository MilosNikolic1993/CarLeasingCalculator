document.addEventListener('DOMContentLoaded', function () {
    const carType = document.getElementById('carType');
    const carValue = document.getElementById('carValue');
    const carValueRange = document.getElementById('carValueRange');
    const leasePeriod = document.getElementById('leasePeriod');
    const leasePeriodRange = document.getElementById('leasePeriodRange');
    const downPayment = document.getElementById('downPayment');
    const downPaymentRange = document.getElementById('downPaymentRange');
    const leasingCost = document.getElementById('leasingCost');
    const downpaymentDisplay = document.getElementById('downpayment');
    const monthlyInstallment = document.getElementById('monthlyInstallment');
    const interestRate = document.getElementById('interestRate');

    function calculateLeasing() {
        const carValueNum = parseFloat(carValue.value);
        const leasePeriodNum = parseFloat(leasePeriod.value);
        const downPaymentPercent = parseFloat(downPayment.value);
        const downPaymentAmount = (downPaymentPercent / 100) * carValueNum;
        let rate = carType.value === 'new' ? 2.99 : 3.7;

        const principal = carValueNum - downPaymentAmount;
        const monthlyRate = rate / 12 / 100;
        const numPayments = leasePeriodNum;
        const monthlyPayment = principal * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -numPayments)));

        leasingCost.textContent = `€${principal.toFixed(2)}`;
        downpaymentDisplay.textContent = `${downPaymentPercent}%`;
        monthlyInstallment.textContent = `€${monthlyPayment.toFixed(2)}`;
        interestRate.textContent = `${rate.toFixed(2)}%`;
    }

    carValue.addEventListener('input', function () {
        carValueRange.value = carValue.value;
        calculateLeasing();
    });

    carValueRange.addEventListener('input', function () {
        carValue.value = carValueRange.value;
        calculateLeasing();
    });

    leasePeriod.addEventListener('input', function () {
        leasePeriodRange.value = leasePeriod.value;
        calculateLeasing();
    });

    leasePeriodRange.addEventListener('input', function () {
        leasePeriod.value = leasePeriodRange.value;
        calculateLeasing();
    });

    downPayment.addEventListener('input', function () {
        downPaymentRange.value = downPayment.value;
        calculateLeasing();
    });

    downPaymentRange.addEventListener('input', function () {
        downPayment.value = downPaymentRange.value;
        calculateLeasing();
    });

    carType.addEventListener('change', calculateLeasing);

    calculateLeasing();
});