import React,{ Component,Fragment} from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Navbar from './React Routing 57/Components/Navbar.component'
import Home from './React Routing 57/Components/Home.component'
import About from './React Routing 57/Components/About.component'
import Contact from './React Routing 57/Components/Contact.component'
import Error from './React Routing 57/Components/Error.component'
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

// import UseEffect from './useEffect 33/UseEffect.component'

// import CustomHook from './Custom Hook 34/CustomHook.component'

// import CR from './Conditional Renderining 35/CR.component'

// import List from './List 36/List.component'

// import Key from './Key 37/Key.component'

// import InlineCSS from './Inline Css 38/InlineCSS.component'

// import XCSS from './ExternalCSS 39/XCSS.component'
// import Test from './ExternalCSS 39/Test'


// import CSSModule from './Css Module 40/CSSModule.component'

// import ImgNAss from './Assets 41/ImgNAss.component'

// import Input from './Control Component 44/Input.component'

// import TextArea from './Control Component 44/TextArea.component'

// import MultipleInputs from './Control Component 44/MultipleInputs.component'


// import HandlingForm from './Control Component 44/HandlingForm.component'


// import REF from './Uncontrolled Component 48/REF.component'


// import CallbackRef from './Uncontrolled Component 48/CallbackRef.component'



















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

                {/* <UseEffect/> */}


                {/* <CustomHook/> */}

                {/* <CR isRegister={true} /> */}

                {/* <List/> */}

                {/* <Key/> */}

                {/* <InlineCSS/> */}

                {/* <XCSS/> */}
                {/* <Test/>  */}



                {/* <CSSModule/> */}


                {/* <ImgNAss/> */}

                {/* <Input/> */}

                {/* <TextArea/> */}

                {/* <MultipleInputs/> */}

                {/* <HandlingForm/> */}

                {/* <REF/> */}


                {/* <CallbackRef/> */}











                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        {/* <Route path="/" render={()=><Home name="pass props" component={Contact} /> } /> */}
                        <Route exact path="/" render={()=><Home /> } />
                        <Route exact path="/about" render={()=><About /> } />
                        <Route exact path="/contact" render={()=><Contact /> } />
                        <Route component={Error} />
                    </Switch>
                </BrowserRouter>
                
















































            </Fragment >
        )
    }
}

export default App