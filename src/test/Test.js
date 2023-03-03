
exports.assert = function(pName, pAwaitedValue, pValue){
    let result = pAwaitedValue===pValue;
    let message = 'incorrect';
    let color = '41';
    if(result){
        message = 'correct';
        color = '42';
    }
    console.log('Test.js : '+pName+ ' \x1b['+color+'m%s\x1b[0m', message);

    if(!result){
        console.log('  Valeur attendue : '+pAwaitedValue);
        console.log('  Valeur proposée : '+pValue);
    }
};