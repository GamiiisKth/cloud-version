//TODO import a instance from backend api to set the incoming value (or a express service instance which it's talk with backend api)

class SearchService {
  searchConsultant(tag) {
    return tag;
  }
}

const searchService = new SearchService();

export default searchService;
