import React,{ Component,Fragment} from 'react'
// import CBasedComp from './Class-Func Comp 14/ClassBased.component'
// import FuncBased from './Class-Func Comp 14/FuncBased.component'


// import Composing from './Composing Comp 15/Composing.component'


// import JSX from './JSX 17/JSX.component'

// import Props from './Props 18/Props.component'

// import PropTypeChecking from './PropTypes 19/PropTypeChecking.component'

// import Children from './Children 20/Childrens.component'

// import StateWOConst from './ClassState 21/StateWOConst.component'
// import StateWConst from './ClassState 21/StateWConst.component'

// import ClassEventWOArrow from './EventHandling 22/ClassEventWOArrow.component'
// import ClassEventWArrow from './EventHandling 22/ClassEventWArrow.component'


// import FuncEvent from './EventHandling 22/FuncEvent.component'



// import SetStateNOFunc from './SetState 23/SetStateNOFunc.component'
// import SetStateFunc from './SetState 23/SetStateFunc.component'


// import CDM from './CDidMount 27/CDM.component'

// import GDSFP from './getDerivedStateFromProps 28/GDSFP.component'


// import UseState from './useState 32/UseState.component'

class App extends Component{
    
    render(){
        // const funcForChildren = (a) => {
            //     return a
            // }
            
            
            return(
                <Fragment> 
                {/* use this insted of <>, casue R.Fragment is supported in all brwsers */}
                {/* <h1>Again ReactJS Practice, It A Version 2</h1>
                <h2>React Fragment Practice</h2> */}


                {/* <CBasedComp textString="Class Based Component" /> */}
                {/* <FuncBased textString="Function/Functional Based Component "/> */}

                {/* <Composing name="Sam"/>
                <Composing name="Man"/>
                <Composing name=" "/>
                <Composing /> */}

                {/* <JSX>Hellllooo</JSX> */}
                
                
                {/* <Props name="Sam"/> */}

                {/* <PropTypeChecking name="Sam" sum={10+20}/> */}
                
                {/* <Children>{funcForChildren}</Children> */}

                
                {/* <StateWOConst rollNo={512} /> */}
                {/* <StateWConst rollNo={601} /> */}
                
                {/* <ClassEventWOArrow/> */}
                {/* <ClassEventWArrow/> */}
                
                {/* <FuncEvent name="Sam"/> */}


                {/* <SetStateNOFunc rollNo={3}/> */}
                {/* <SetStateFunc rollNo={3}/> */}
                

                {/* <CDM/> */}



                {/* <GDSFP/> */}


                {/* <UseState/> */} 

            </Fragment >
        )
    }
}

export default App