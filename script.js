function arabic(num) {
    const map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }

    if (num < 1) {
        return "Error"
    } else {
        let result = ""
        for (let key in map) {
            while (num >= map[key]) {
                result += key
                num -= map[key]
            }
        }
        return result;
    }
}
console.log(arabic(1212));
console.log(arabic(3123));
console.log(arabic(4512));
