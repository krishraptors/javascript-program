const accountId = 144553
let accountEmail = "kmk@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "KMK@hc.com"
accountPassword = "212121121"
accountCity = "Bengaluru"

console.log(accountId);


/*
prefer not to use var
because of issue in block scope-{} and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



