//getName();
//console.log(x)
//console.log(getName);
var x=7;
function getName(){
    console.log("Hello world");
}
console.log(getName);
getName();
console.log(x)


//if use arrow function it behave like a varabile not like function in excutaion phase

// undefined meanes memory was allocated but no valuse if not defined means memory is not allocated


/*[Running] node "c:\LEARNING\javascript practice\day1\variables.js"
Hello world
c:\LEARNING\javascript practice\day1\variables.js:6
console.log(c)
            ^

ReferenceError: c is not defined
    at Object.<anonymous> (c:\LEARNING\javascript practice\day1\variables.js:6:13)
    at Module._compile (node:internal/modules/cjs/loader:1730:14)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.16.0

[Done] exited with code=1 in 0.375 seconds

[Running] node "c:\LEARNING\javascript practice\day1\variables.js"
Hello world
7

[Done] exited with code=0 in 0.265 seconds

[Running] node "c:\LEARNING\javascript practice\day1\variables-hositing.js"
Hello world
undefined

[Done] exited with code=0 in 0.282 seconds

[Running] node "c:\LEARNING\javascript practice\day1\variables-hositing.js"
Hello world
undefined

[Done] exited with code=0 in 0.193 seconds

[Running] node "c:\LEARNING\javascript practice\day1\variables-hositing.js"
Hello world
undefined

[Done] exited with code=0 in 0.226 seconds

[Running] node "c:\LEARNING\javascript practice\day1\variables-hositing.js"

[Done] exited with code=0 in 0.213 seconds

[Running] node "c:\LEARNING\javascript practice\day1\variables-hositing.js"
Hello world
undefined

[Done] exited with code=0 in 0.201 seconds

[Running] node "c:\LEARNING\javascript practice\day1\variables-hositing.js"
[Function: getName]

[Done] exited with code=0 in 0.273 seconds

[Running] node "c:\LEARNING\javascript practice\day1\variables-hositing.js"
c:\LEARNING\javascript practice\day1\variables-hositing.js:2
console.log(x)
            ^

ReferenceError: x is not defined
    at Object.<anonymous> (c:\LEARNING\javascript practice\day1\variables-hositing.js:2:13)
    at Module._compile (node:internal/modules/cjs/loader:1730:14)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.16.0

[Done] exited with code=1 in 0.216 seconds

 */