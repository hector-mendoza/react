import React, { Component } from 'react';

function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>
                {props.name}
            </figcaption>
        </figure>
    )
}

export default class AjaxAPIs extends Component {
    state = {
        pokemons: [],
    };

    // when component has loaded into the DOM
    componentDidMount() {
        // poke api URL
        let url = 'https://pokeapi.co/api/v2/pokemon';
        fetch(url).then(
            res => res.json()).then((json) => {
                // console.log(json);
                json.results.forEach((el) => {
                    fetch(el.url).then(
                        res => res.json()
                    ).then((json) => {
                        // console.log(json);
                        let pokemon = {
                            id: json.id,
                            name: json.name,
                            avatar: json.sprites.front_default,
                        };

                        let pokemons = [...this.state.pokemons,
                            pokemon];

                        this.setState({
                            pokemons
                        });
                    })
                })
            })
    }

    render() {
        return (
            <>
                <h2>Async Requests on Class Components</h2>
                {
                    this.state.pokemons.length === 0 ? <h3>Loading...</h3> :
                        this.state.pokemons.map(el =>
                            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                        )
                }
            </>
        )
    }
}