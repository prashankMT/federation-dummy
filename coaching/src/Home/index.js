import React from "react";

import { QueryRenderer, graphql } from 'react-relay';
import { useRelayEnvironment } from 'react-relay/hooks';
import { useAllRelayEnvironments, withQueryRenderer } from 'shell/Relay'

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

const wrapped = withQueryRenderer()(Wrapper);

export default function Home() {
  const environment = useRelayEnvironment()
  console.log(environment)
  return (
    <div>
      <Header />
      <QueryRenderer
        environment={environment}
        query={graphql`
          query HomeCountriesListQuery {
            countries {
              code
              ...Country_country
            }
          }
        `}
        render={wrapped}
        variables={{}}
      />
    </div>
  );
}
