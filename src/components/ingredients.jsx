import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Ingredients(props){
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Hazem Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}