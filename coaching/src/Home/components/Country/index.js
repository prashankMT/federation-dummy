
import React from 'react'
import { graphql } from "relay-runtime"
import { createFragmentContainer } from "react-relay";


function Country({ country }) {
    return <div>{country.name}</div>
}

export default createFragmentContainer(Country, {
    country: graphql`
        fragment Country_country on Country {
            code
            name
        }
    `
})
