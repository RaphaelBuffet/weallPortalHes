import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import '../../styles/accordion.scss'


const Accordion = (props) => {
    const title = props.title
    const children = props.children
    const [clicked, setClicked] = useState(false)

    const toggle = () => {
        if (clicked === true) {
            return setClicked(false)
        }
        setClicked(true)
    }
    return (
        <IconContext.Provider value={{ color: '#454545', size: '25px' }}>
            <div className="AccordionSection">
                
                    <div className="Wrap" onClick={() => {
                        toggle()
                    }}>
                        <h2>{title}</h2>
                        <span>
                            {clicked ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                        </span>
                    </div>
                    {clicked ? (
                        <div className="DropDown">
                            {children}
                        </div>
                    ) : null}


                </div>
            
        </IconContext.Provider>
    )
}
export const AccordionSecondary = (props) => {
    const title = props.title
    const children = props.children
    const [clicked, setClicked] = useState(false)

    const toggle = () => {
        if (clicked === true) {
            return setClicked(false)
        }
        setClicked(true)
    }
    return (
        <IconContext.Provider value={{ color: '#454545', size: '25px' }}>
            <div className="AccordionSection">
                
                    <div className="Wrap-secondary" onClick={() => {
                        toggle()
                    }}>
                        <h2>{title}</h2>
                        <span>
                            {clicked ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                        </span>
                    </div>
                    {clicked ? (
                        <div className="DropDown">
                            {children}
                        </div>
                    ) : null}


                </div>
            
        </IconContext.Provider>
    )
}

export default Accordion