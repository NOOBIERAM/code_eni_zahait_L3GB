require('dotenv').config();

const code_digit = (max_digit) => {
    const first_digit = Math.floor(Math.random() * max_digit);
    const second_digit = Math.floor(Math.random() * max_digit);
    const third_digit = Math.floor(Math.random() * max_digit);
    const fourth_digit = Math.floor(Math.random() * max_digit);
    return {
        f_digit: first_digit,
        s_digit: second_digit,
        t_digit: third_digit,
        fo_digit: fourth_digit
    }
};

module.exports = {
    generate_digit : function() {
        const max_digit = process.env.max_digit;
        const DGT = code_digit(max_digit);
        if (DGT.f_digit !== DGT.s_digit && DGT.s_digit !== DGT.t_digit && DGT.t_digit !== DGT.fo_digit) {
            return `${DGT.f_digit}${DGT.s_digit}${DGT.t_digit}${DGT.fo_digit}`
        }else{
            const max_digit = 21;
            const DGT = code_digit(max_digit);
            return `${DGT.f_digit}${DGT.s_digit}${DGT.t_digit}${DGT.fo_digit}`
        }
    }
}