function logLoopWithVar() {
    for(var i = 0; i < 5; i++)
    {
        console.log(i);
    }
    console.log('Finally: ' + i);
}

function logLoopWithLet() {
    for(let i = 0; i < 5; i++)
    {
        console.log(i);
    }
    console.log('Finally: ' + i);
}

logLoopWithVar();
logLoopWithLet()