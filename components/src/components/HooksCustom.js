import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function HooksCustom() {
    const url = 'https://pokeapi.co/api/v2/pokemon';

    // as the HOOK returns an Object, we need to create an object to access their data
    let { data, isPending, error } = useFetch(url);
    return (
        <>
            <h2>Custom Hooks</h2>
            <small>
                Custom Hooks need to start with <em>"use"</em> ➡️ "useFetch", followed by a Uppercase letter.
            </small>
            <pre style={{ whiteSpace: "pre-wrap" }}>
                <code>
                    {
                        JSON.stringify(data)
                    }
                </code>
            </pre>
            <h3>
                {
                    JSON.stringify(isPending)
                }
            </h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>
                <code>
                    {
                        JSON.stringify(error)
                    }
                </code>
            </pre>
        </>
    )
}