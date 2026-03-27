function calculateTax(cash){
    const taxRate = 0.10;
    let finalTax = cash * taxRate;
    return finalTax;
}

function convertToUpperCase(str){
    let output = str.toUpperCase();
    return output;
}

function findMaximum(x, y){
    if (x > y){
        return x;
    } else{
        return y;
    }
}

function isPalindrome(text){
    let word = text.toLowerCase();
    let reversed = "";
    
    for (let x = word.length - 1; x >= 0; x--){
        reversed = reversed + word[x];
    }
    
    if (word === reversed){
        return true;
    } else{
        return false;
    }
}

function calculateDiscountedPrice(price, off){
    let savedMoney = price * (off / 100);
    return price - savedMoney; 
}
