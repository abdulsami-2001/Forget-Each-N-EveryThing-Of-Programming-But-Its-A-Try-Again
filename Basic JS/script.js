console.log("Hope, I'll be consistent and will try to enhance my skills time by time, InShaAllah :) ")

// chap 1 //
// alert("AlertBox!")
// chap 1 //


// chap 2 //

// var name1 = "Abdul Sami";
// alert(name1);

// chap 2 //


// chap 3 //

// var eg = 144; // 
// alert(eg + 4)
// alert(typeof(eg));

// chap 3 //

// chap 4 //
    // var $abc = 4+3;
    // console.log($abc)
// chap 4 //


// chap 5 //
    // var $abc = 4+3;
    // var $opq = 15-61;
    // console.log($abc+$opq);
// chap 5 //

// chap 6 //

    // var num  = 15;
    // console.log(num) // 1
    // var newNum = num++;
    // console.log(newNum) // 1
    // console.log(num) // 2
/*
    console.log(num++) // 15
    console.log(--num) // 15
    console.log(--num) // 14
    console.log(++num) // 15
    console.log(num++) // 15
    console.log(--num) // 15
    console.log(num--) // 15
    console.log(num++)// 14
    console.log(num--)// 15
    console.log(++num) // 15
    console.log(--num) // 14
    console.log(--num) // 13
*/
// chap 6 //


// chap 7 //

    // var totalCost = (5*6)+3*(6-5);
    // console.log(totalCost)
// chap 7 //

// chap 8 //
    // console.log(4+20+"6")
    // console.log("6"+4+20)
    // console.log('Hey, '+ 4+20)
// chap 8 //


// chap 9 //
    //  var num = prompt("Enter A Number", "6");
    //  var result = num + 5
    //  console.log(num)
    //  console.log(result)
// chap 9 //

// chap 10 //
    // if("sam"=="Sam"){
    //     console.log("Hey")
    // }else{
    //     console.log("Bey")
    // }
// chap 10 //

// chap 11 //

    // if(50+30 == 80){
    //     console.log("YES, Its a Equal")
    // }else{
    //     console.log("No, Its a not Equal")
    // }

// chap 11 //

// chap 12 //

    // var x = 33;

    // if(x == 1 ){
    //     console.log(1)
    // }else if(x == 2){
    //     console.log(2)
    // }else if(x == 1){
    //     console.log(3)
    // }else{
    //     console.log("Any Number")
    // }

// chap 12 //


// chap 13 //

    // var weight = 302;
    // var time = 5;
    // var age = 18;
    // gender  = "male"
    // if(weight > 300 && time < 6 && age > 17 && gender === "male"){
    //     console.log("chl Mera Bhai !");
    // }else{
    //     console.log("Nikal, pehli fursat ma!")
    // }
/*

    if(15>25 || ("malea"=="male" && 5>4)){ // 15>25 || "male"=="male" && 5>4 -- now // RN maalik
        console.log("now")
    }else{
        console.log("maalik")
    }
*/
// chap 13 //


// chap 14 //
    /*
    var a=10;
    var b=10;
    var c=11;
    var d=12;
    var e=21;
    var f=41;
    var x=14;
    var y=8;
    var result;

    if(a==b){
        if(c==d){
            result = 100
            console.log(result)
        }else if(e==f){
            result = 100
            console.log(result)
        }else{
            result = 50
            console.log(result)
        }
    }else{
        result = 50
        console.log(result)
    }
    */
// chap 14 //


// chap 15 //
/*
    var cities = ["karachi","isl","mul","faislabad","pindi","kashmir"]

    console.log(cities[3])

*/
// chap 15 //


// chap 16 //
    /*
    var cities = ["karachi","isl","mul","faislabad","pindi","kashmir"]
    cities.pop()
    cities.pop()
    console.log(cities)
    cities.pop()
    console.log(cities)
    cities.pop()
    cities.pop()
    console.log(cities)
    cities.push("Mumbai","Chennai","Banglore","Kolkata")
    console.log(cities)
    */


// chap 16 //

// chap 17 //
/*
var cities = ["karachi","isl","mul","faislabad","pindi","kashmir"]
// cities.splice(2,0)
console.log(cities)    
// cities.splice(2,1,"lahore")
cities.splice(2) // e stands for Element no, when single entry means array store values till element no that provided.
console.log(cities)    

*/

// var cities = ["karachi","isl","mul","faislabad","pindi","kashmir"]

// var myCities =  cities.slice(0,4)
// var myCities =  cities.slice(3)
// console.log(myCities)

// chap 17 //


// chap 20 //
/*
    for(var i=5;i>0;i--){
        for(var j=5;j>=i;j--){
            document.write("*")
        }
        document.write("<br>")
    }
*/
// chap 20 //


// chap 21 // 
    // var userInput = prompt("Enter City", "Karachi") // KARACHI
    // console.log(userInput.toUpperCase())
    // var cities = ["islamabad","lahore","multan","pindi","kashmir","faislabad"];
// chap 21 // 

// chap 22 // 
/*
    var cities = ["islamabad","lahore","multan","pindi","kashmir","faislabad"];
    var newArrOfCities =  cities.slice(1,4)
    console.log(cities)
    console.log(newArrOfCities)
    var city = "karachi" // kaRachi;
    var eg = city.slice(2) // rachi
    console.log(eg)
    var letterR = city.slice(2,3).toUpperCase(); //R
    var city2 = city.slice(0,2) //ka
    var city3 = city.slice(3,7) //achi
*/
    // console.log(city2+letterR+city3)
    // var ip = city.length;
    // console.log(ip)

// chap 22// 


// chap 23 //

    // var error = "Mjhy Neend Arhi ha, mjhy sona ha" //detect sona in string
    // for(var i = 0 ;i <error.length ;i++){
    //     if(error.slice(i, i+4) === "sona" ) {
    //         console.log("sona mil gya")
    //     }
    //     else{
    //         console.log("nathi jammou")
    //     }
    // }

    // var city = "karachi, The City Of Light" // kaRachi;

    // var myINdex = city.indexOf("CitY") // -1 for not found, it is case sensitive 
    // console.log(myINdex)
// chap 23 // 

// // chap 24 //

//     var string = "javascript, learning programming";
//     var progrm = string.indexOf('programming')
//     console.log(progrm)
//     var p = string.charAt(21)
//     console.log(p)
// // chap 24 //


// test 

// var someString = "Javascript learning"

// for(var i = 0; i <someString.length; i++) {
//     if(someString.slice(i,i+1) === " " ) {   
//         console.log("koi mil gaya")
        
//     }
//  else{
//      console.log("kk")
//  }
// }

// chap 25 //

    // var someString = "Javascript learning sadasdas dasd65as d6as5d 6sa4d5as4d learning 86as4ds56a 0dsa56d4s0a 6d4s"

    // console.log(someString)

    // var eg =  someString.replace("learning","Earning");
    // var newEGGLo =  someString.replace(/learning/g,"Earning");

    // console.log(newEGGLo)
    // console.log(eg)


// chap 25 //


// chap 26 //

    // var num1 = 10.4; // 11 //10
    // var asliNum = Math.round(num1)
    // console.log(num1)
    // console.log(asliNum)


    // var num1 = 10.01; 
    // var asliNum = Math.ceil(num1)
    // console.log(num1)
    // console.log(asliNum)



// chap 26 //


// // chap 27 //

//     var random = Math.random()
//     // 0.0 sy lekr 0.9
//     var diceGameDecimalNum = random * 7;
//     var diceGame = Math.floor(diceGameDecimalNum)
//     console.log(diceGameDecimalNum)  
//     console.log(diceGame)  

// // chap 27 //


// chap 28 //
    // var userInput = prompt("EnterNum")
    // var plus =  parseInt(userInput) + 10 + 10;
    // // var plus =  parseFloat(userInput) + 10 + 10;
    // console.log(plus)
// chap 28 //


// chap 30//

    // var total = 10.19675;
    // var prettyTotal = total.toFixed(2)
    // console.log(total)
    // console.log(prettyTotal)

// chap 30// 




// chap 31// 

   /* var date = new Date();
    console.log(date)

    console.log(typeof(date))
    date = date.toString();
    console.log(typeof(date))
    console.log(date)

    console.log(date.getDay()) //error cause datatype of date changed because of .toString(), do comnts game to flactuate
*/
// chap 31// 



// chap 32// 
    /*
    var date = new Date();
    var sinceJan = date.getTime()
    var currentSec = date.getSeconds()
    console.log(sinceJan)
    console.log(currentSec)
    */

// chap 32// 

/*

// chap 33// 

    let todayDate = new Date(); // 18 Aug 2021
    let doomsDay = new Date("13 June,2024"); // The Day, github sy return hogi.
    console.log(todayDate.getTime())
    console.log(doomsDay.getTime())

    let diff = doomsDay - todayDate;

    let daysDiff = diff / (1000*60*60*24)
    console.log(`Sam, Look The Number Of Days Left: ${Math.floor(daysDiff)}`);
// chap 33// 
*/

// chap 34// 
    // let todayDate = new Date(); // 18 Aug 2021

    // let setYear = todayDate.setFullYear(2001);
    // console.log(todayDate)
    // console.log(setYear)

    // if (todayDate.getFullYear() == 2001){
    //     console.log("Code 2001 ma chalega")
    // }else{
    //     console.log("Ma nhi jaounga, 2 saal ka kiraya dekar jaounga")
    // }
    
    // Day set nhi hoskta, q kay us tareekh ko kya din ho or ap kuch de rhy ho ajeeb clash hojyega

// chap 34// 




// chap 39// 
/*
    console.log('Grade Calculator');

    let percentage = 33; 
    console.log(Math.floor(percentage/10))

    switch(Math.floor(percentage/10)){
        case 10:
            console.log("Your Grade Is Top");
            break;
        case 9:
            console.log("Your Grade Is A++");
            break;
        case 8:
            console.log("Your Grade Is A+");
            break;
        case 7:
            console.log("Your Grade Is A");
            break;
        case 6:
            console.log("Your Grade Is B");
            break;
        case 5:
            console.log("Your Grade Is C");
            break;
        case 4:
            console.log("Your Grade Is D");
            break;
        case (percentage/10) > 3.2 ? 3: 77:
            console.log("Your Grade Is E");
            break;
        default :
            console.log("You're Fail")
            break;
    }
*/
// chap 39// 

/*
// chap 69// 

    let  planOne = {
        nameOfPlan: "Basic",
        price: 5.99,
        space: 100,
        transfer: 10000,
        pages:10,
    }
    
    console.log(typeof(planOne));
    console.log(planOne);

    planOne.owners = ["Sam","Man","Zain"];
    console.log(planOne)
    
    let indexCatching = planOne.owners[0];
    console.log(indexCatching)

// chap 69// 
*/



// chap 70// 
/*
    let  planOne = {
        nameOfPlan: "Basic",
        price: 5.99,
        space: 100,
        transfer: 10000,
        pages:10,
    }
    
    console.log(typeof(planOne));
    console.log(planOne);

    planOne.owners = ["Sam","Man","Zain"];
    console.log(planOne)
    
    let indexCatching = planOne.owners[0];
    console.log(indexCatching)

    delete planOne.price;
    console.log(planOne)
    console.log(planOne.price) // undefined

    let propertyExist = "price" in planOne
    console.log(propertyExist)
*/
// chap 70// 




// chap 71// 
/*
    let planOne = {
        nameOfPlan: "Basic",
        price: 5,
        space: 100,
        transfer: 10000,
        pages:10,
        dcMonth: [5,7,11],
        calAnnual: function (dc){
            let newPrice = this.price;
            let thisMonth = new Date().getMonth();
            for(i=0;i<this.dcMonth.length;i++){
                if(this.dcMonth[i]==thisMonth){
                    newPrice = this.price * dc;
                    break;
                }
            }
    
            return newPrice*12
            
        },
        // test: this.calAnnual(0.2)
    }
    // console.log(planOne.test)

    console.log(planOne.calAnnual)
    console.log(planOne.calAnnual(0.2))
*/


/*
    let  planOne = {
        nameOfPlan: "Basic",
        price: 5,
        space: 100,
        transfer: 10000,
        pages:10,
        dcMonth: [5,7,11],
    }

    // console.log(planOne.calAnnu(0.8)) //error cause till now func isn't created

    planOne.calAnnu = function (dc){
        let newPrice = planOne.price;
        let thisMonth = new Date().getMonth();
        for(i=0;i<planOne.dcMonth.length;i++){
            if(planOne.dcMonth[i]==thisMonth){
                newPrice = planOne.price * dc;
                break;
            }
        }

        return newPrice*12
        
    }

    console.log(planOne.calAnnu)


*/

// chap 71// 

/*
// chap 72// 

    function Plan(name,price,dcMonth){ // constructor identified by the capatilized name of func, other (not officail) identity is we are not creating variables in it, like we create in a normal func
        this.name = name;
        this.price = price;
        this.dcMonth = dcMonth
    }

    let plan1 = new Plan("Basic", 5,[7,8,9])
    let plan2 = new Plan("Standard", 4,[1,4,6])
    let plan3 = new Plan("Professional", 15,[9,10,11])

    let obj = {
        myName:'love',
        price: 96,
        dcMonth: [2,9,8]
    }
    
    console.log(obj) // diff in clg
    console.log(plan1)
    console.log(plan2)
    console.log(plan3)


// chap 72// 
*/


// chap 73// 
/*
    function Plan(name,price,dcMonth){ 
        this.name = name
        this.price = price
        this.dcMonth = dcMonth
        this.annuMalik = function(dc){
            let newPrice = this.price;
            let thisMonth = new Date().getMonth();
            for(i=0;i<this.dcMonth.length;i++){
                if(this.dcMonth[i]==thisMonth){
                    newPrice = this.price * dc;
                    break;
                }
            }
    
            return newPrice*12
        }
    }

    
    let plan1 = new Plan("Basic", 5,[7,8,9])
    let plan2 = new Plan("Standard", 4,[1,4,6])
    let plan3 = new Plan("Professional", 15,[8,10,11])

    console.log(plan1.annuMalik(0.2))
    console.log(plan2.annuMalik(0.2))
    console.log(plan3.annuMalik(0.2))
    
*/
// chap 73// 

// chap 74// 



// chap 74// 




// chap 75// 



// chap 75// 













