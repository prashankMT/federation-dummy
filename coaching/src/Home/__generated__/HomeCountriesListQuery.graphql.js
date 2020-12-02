/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Country_country$ref = any;
export type HomeCountriesListQueryVariables = {||};
export type HomeCountriesListQueryResponse = {|
  +countries: $ReadOnlyArray<{|
    +code: string,
    +$fragmentRefs: Country_country$ref,
  |}>
|};
export type HomeCountriesListQuery = {|
  variables: HomeCountriesListQueryVariables,
  response: HomeCountriesListQueryResponse,
|};
*/


/*
query HomeCountriesListQuery {
  countries {
    code
    ...Country_country
  }
}

fragment Country_country on Country {
  code
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "code",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeCountriesListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "countries",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Country_country"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeCountriesListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "countries",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "df0e06565940089d9aa44c147d03c1cc",
    "id": null,
    "metadata": {},
    "name": "HomeCountriesListQuery",
    "operationKind": "query",
    "text": "query HomeCountriesListQuery {\n  countries {\n    code\n    ...Country_country\n  }\n}\n\nfragment Country_country on Country {\n  code\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '585f0b7d89f3e100ccb6d8dc018f7c59';

module.exports = node;
