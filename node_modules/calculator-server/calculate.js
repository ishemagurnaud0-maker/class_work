const calculate = (a, b, operation) => {
    switch (operation){
        case'add':
            return a + b;
        case'subtract':
            return a - b;
        case'multiply':
        return a * b;
        case'divide':
            if(b === 0){
                throw new Error('Division by zero is not allowed');
            }   
            return a / b;
        default:
            throw new Error('Invalid operation');   
 }
}
module.exports = calculate;