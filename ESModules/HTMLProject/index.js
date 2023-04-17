import { fn1 , fn2} from './modl.js'

const testfn = () => {

    console.log('I am in test fn')
}

document.getElementById("isAlive").addEventListener('click' , () => fn1() )
document.getElementById("isStrong").addEventListener('click' , () => fn2() )
testfn();
