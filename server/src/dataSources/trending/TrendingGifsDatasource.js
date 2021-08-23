import { RESTDataSource } from "apollo-datasource-rest";
import TrendingGifsService from "./TrendingGifsService";

class TrendingGifsDatasource extends RESTDataSource {
  constructor() {
    super();
    Object.assign(this, TrendingGifsService({}));
  }
}

export default TrendingGifsDatasource;
