import React from 'react'
import Accordion from '../../../../components/Accordion/Accordion'
import './form.css'
export default class Formation extends React.Component {
    render() {
        return (
            <div className='accordion'>
                <Accordion title="Formations 1">
                    <p>hello</p>
                </Accordion>
                <Accordion title="Formations 2">
                    <p>hello</p>
                </Accordion>
                <div>
                    <button className='btn-full'>ajouter une fomation</button>
                </div>
            </div>
        );
    }
}