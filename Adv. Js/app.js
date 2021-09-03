// Var, let, const //


    // var a = 10;
    // console.log(a)
    // let a = 20;
    // console.log(a)
    
    
    /*
    function myLet(){
        let a = 10;
        if(true){
             a = 20;
            console.log(a)// 20
        }
        console.log(a) //20
    }
    myLet()
    */

    /*
    function myLet(){
        let a = 10;
        if(true){
            let a = 20;
            console.log(a) //20
        }
        console.log(a) // 10
    }
    myLet()
   */

    // for (let i = 0; i < 5; i++) {
    //     console.log(i)
    // }

    // console.log(i) // not in the scope, but accessable in var scenario


// Var, let, const //



// Variables Hoisting //
    /*
        a = 50;
        console.log(a)
        var a; // works, but if let a; then it can't
    */
    /*
        var i = "hello";
        console.log(i)
        function myFunc(){ 
            // var i; due to hoisting
            console.log(i) // undefined
            var i = 3
            console.log(i) // 3
        }

        myFunc();
    */
// Variables Hoisting //


// Arrow Function //


// myFunc()
// const myFunc = () => console.log("Hello")

// const myFunc = a =>  a*5;
// console.log(myFunc(6))


// const myFunc = a =>  {return a*5};
// console.log(myFunc(8))

// const myFunc = (a,...b) =>  b[1];
// console.log(myFunc(10,5,6,9,6,6))


// Arrow Function //


// SetTimeOut , ClearTimeOut //
        /*
    let timeOutId = setTimeout(() => {
        document.getElementById("para").textContent += " Consistency"
    }, 3000);

    const clrTimeOutFunc = () => {
        console.log("Clicked")
        clearTimeout(timeOutId)
    }
    
    document.getElementById("btn").addEventListener("click",clrTimeOutFunc )
        */
// SetTimeOut , ClearTimeOut //


/*
// setInterval , clearInterval //
    let intervalId;
    const call = () => {
        intervalId = setInterval(() => {
            document.getElementById("para").textContent += " Consistency"
        }, 1000);
    }
        
    call()
    let count = 0;
    console.log(count)

    const clrIntervalFunc = (count) => {
        if(count%2==0){
            console.log(`Even Clicked ${count}`)
            clearInterval(intervalId)
        }else{
            console.log(`Odd Clicked ${count}`)
            clearInterval(intervalId)
            call()
        }
    }
    
    document.getElementById("btn").addEventListener("click",()=>clrIntervalFunc(++count, console.log(count)) )
        */
// setInterval , clearInterval //