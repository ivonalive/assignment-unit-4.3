console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

``
// does it need declaration
let basket = [];

function addItem(item) {
    basket.push(item);
    // if no return function might show undefined
    return true;
}
console.log('added bread', addItem('bread'));
console.log(basket);
console.log('added milk', addItem('milk'));
console.log('updated basket', basket);

function listItems(){
    for(let items of basket){
     console.log('individual item', items)
    }
}
listItems();

function empty() {
    basket.length = 0;
}
empty();
console.log(basket);

// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
