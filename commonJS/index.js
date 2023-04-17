({ modl1function , modl1function2 } = require('./modl1.js'))


const testfunction = () => {
    modl1function()
    modl1function2()
    console.log("I am in main file")
}

testfunction();