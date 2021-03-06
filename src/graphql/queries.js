import { gql } from "@apollo/client";

export const GET_ALL_TRANDING_GIPHY = gql`
  query tradingGiphy {
    tradingGiphy {
      id
      images {
        original {
          url
        }
        originalStill {
          url
          width
        }
      }
    }
  }
`;

export const SEARCH_BY_GIPHY = gql`
  query searchGiphy($val: String, $offSet: String) {
    searchGiphy(val: $val, offSet: $offSet) {
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
        originalStill {
          url
          width
        }
      }
    }
  }
`;
