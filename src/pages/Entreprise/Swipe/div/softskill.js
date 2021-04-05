import React from 'react'
import { data } from './data'
export default class competences extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            softskillData: data.softskill
        }
    }
    render() {
        return (
            <div className='line-3'>
                    <div className='columnLeft'>
                        <label>{this.displaySoftskill(this.state.softskillData[0])}</label>
                    </div>
                    <div className='columnCenter'>
                        <label>{this.displaySoftskill(this.state.softskillData[1])}</label>
                    </div>
                    <div className='columnRight'>
                        <label>{this.displaySoftskill(this.state.softskillData[2])}</label>
                    </div>
                </div>
        )
    }
    displaySoftskill(value) {
        switch (value) {
            case 0:
                return 'softskill 1';
            case 1:
                return 'softskill 2';
            case 2:
                return 'softskill 3';
            case 3:
                return 'softskill 4';
        }
    }
}