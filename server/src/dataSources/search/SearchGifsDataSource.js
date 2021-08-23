import { RESTDataSource } from "apollo-datasource-rest";
import SearchGifsService from "./SearchGifsService";

class SearchGifsDataSource extends RESTDataSource {
  constructor() {
    super();
    Object.assign(this, SearchGifsService({}));
  }
}

export default SearchGifsDataSource;
