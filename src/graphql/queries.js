import { gql } from "@apollo/client";

export const GET_ALL_TRANDING_GIPHY = gql`
  query tradingGiphy {
    tradingGiphy {
      id
      images {
        original {
          url
        }
      }
    }
  }
`;

export const SEARCH_BY_GIPHY = gql`
  query searchGiphy($val: String) {
    searchGiphy(val: $val) {
      id
      url
      source
      title
      images {
        original {
          url
          width
          height
        }
      }
    }
  }
`;
