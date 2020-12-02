import React from "react";
import { graphql } from "relay-runtime";

import { QueryRenderer } from "@mindtickle/relay-core";

import Header from "./components/Header";
import Country from "./components/Country";

function Wrapper({ props }) {
  if (props) {
    return (
      <ul>
        {props.countries.map((country) => (
          <li key={country.code}>
            <Country country={country} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default function Home() {
  return (
    <div>
      <Header />
      <QueryRenderer
        query={graphql`
          query HomeCountriesListQuery {
            countries {
              code
              ...Country_country
            }
          }
        `}
        Component={Wrapper}
        variables={{}}
      />
    </div>
  );
}
