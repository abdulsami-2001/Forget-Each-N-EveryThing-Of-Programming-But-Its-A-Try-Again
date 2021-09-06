import React, { Fragment } from 'react'

const Childrens = (props) => {
    return (
        <Fragment>
            <h2>Hello React</h2>            
            <h2>Children Derivation: {props.children(500)}</h2>
        </Fragment>
    )
}

export default Childrens
