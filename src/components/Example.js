import React from "react"

function Example(props) {
    
    // return (
    //     <div>
    //         {props.name()}
    //     </div>
    // ) 

    //rendering boolean
    // return (
    //     <div>
    //         {props.render(true)}
    //     </div>
    // )

    //rendering a number
    // return (
    //     <div>
    //         {props.render(69)}
    //     </div>
    // )

    //another example
    return (
        <div>
            {props.render(true, 69)}
        </div>
    )


}

export default Example