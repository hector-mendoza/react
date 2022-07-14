import React, { Component } from 'react';
import data from "../helpers/data.json";

function ListItem(props) {
    return (
        <li>
            <a href={props.el.web} target="_blank" rel="noreferrer">
                {props.el.name}
            </a>
        </li>
    )
}

export default class ElemenetsRender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            estaciones: [
                'primavera',
                'verano',
                'otoño',
                'invierno'
            ],
        }
    }

    render() {
        return (
            <>
                <h2>Elements Rendering</h2>
                <h4>Estaciones del Año:</h4>
                <ol>
                    {
                        this.state.estaciones.map(
                            (st, index) => (
                                <li key={index}>
                                    {st}
                                </li>
                            )
                        )
                    }
                </ol>
                <h4>Front-End JS Frameworks</h4>
                <ul>
                    {
                        data.frameworks.map((el) => (
                            <ListItem key={el.id} el={el} />
                        ))
                    }
                </ul>
            </>
        )
    }
}