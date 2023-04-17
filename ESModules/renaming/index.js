import { fn1  as ff , fn2 as ff2 } from './modl1.js'

const testfn = () => {
    ff()
    ff2()
    console.log('I am in test fn')
}

testfn()