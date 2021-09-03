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

// Fetch/Async Get Method //
    /*
    const fetchFunc = () =>{

        let city = 'karachi'
        
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=de03dda5c930e12ab1bf5e3f97d561ed&units=metric`

        let a = fetch(url).then((data)=>{
            console.log(data)
            // console.log(data.json())
            return (data.json())
        }).then((dt)=>{
            console.log(dt)
        })

        console.log(a)
    }
    */

    // async function myFunc() {
    //     return 5
    // }
   
    // myFunc().then((data)=>{
    //     console.log(data)
    // }).catch((err)=>{
    //     console.log(err)
    // })
    
    //above, below func ma farq itna ha ky, aik resolve hwa wa promise return kr rhy,
    // or aik ma poora promise jo ky baaad ma resolve hoga, or usky liye aik extra .then lagega. 

    // const myFunc = async () => {
    //     return new Promise((res,rej)=>{
    //         res(5)
    //     })
    // }
    
    // myFunc().then((da)=>{
    //     console.log(da)
    // })









    // new eg

        const newEg = async () => {
            return 5
        }

        const driver = async () => {
            let x = await newEg();
            console.log(x)
        }

        driver()

    // new eg



   
// Fetch/Async Get Method //
