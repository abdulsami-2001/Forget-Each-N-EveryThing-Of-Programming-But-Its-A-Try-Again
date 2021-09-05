import React,{Component,Fragment} from 'react'
// import CBasedComp from './Class-Func Comp 14/ClassBased.component'
// import FuncBased from './Class-Func Comp 14/FuncBased.component'

class App extends React.Component{
    render(){
        return(
            <React.Fragment> {/* use this insted of <>, casue R.Fragment is supported in all brwsers */}
                {/* <h1>Again ReactJS Practice, It A Version 2</h1>
                <h2>React Fragment Practice</h2> */}


                {/* <CBasedComp textString="Class Based Component" /> */}
                {/* <FuncBased textString="Function/Functional Based Component "/> */}


            </React.Fragment >
        )
    }
}

export default App