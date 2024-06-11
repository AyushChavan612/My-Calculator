let array = [];
let num = 0n; // Use BigInt for large numbers

function Calculate(val) {
    if (val === '=') {
        array.push(num); // Push the last number before evaluation
        GiveFinalAnswer();
        return;
    } else if (val === 'C') {
        document.querySelector('.show-calculations').innerText = '';
        array = [];
        num = 0n; // Reset num as well
        return;
    }

    let text = document.querySelector('.show-calculations').innerText;
    text += val;
    document.querySelector('.show-calculations').innerText = text;

    if (val === '+' || val === '-' || val === '*' || val === '/') {
        array.push(num);
        num = 0n;
        array.push(val);
        console.log(val);
    } else {
        num = num * 10n + BigInt(val); // Accumulate digits as BigInt
        console.log(num);
    }
}

function GiveFinalAnswer() {
    let ans = 0n;
    let sign = '$';
    
    array.forEach((value) => {
        console.log(value);
        if (value === '+') {
            sign = '+';
        } else if (value === '-') {
            sign = '-';
        } else if (value === '*') {
            sign = '*';
        } else if (value === '/') {
            sign = '/';
        } else {
            switch (sign) {
                case '+':
                    ans += BigInt(value);
                    break;
                case '-':
                    ans -= BigInt(value);
                    break;
                case '*':
                    ans *= BigInt(value);
                    break;
                case '/':
                    ans /= BigInt(value);
                    break;
                case '$':
                    ans = BigInt(value);
                    break;
            }
            console.log(ans);
        }
    });

    document.querySelector('.show-calculations').innerText = ans.toString();
    array = [];
    num = 0n; // Reset num for new calculations
}
