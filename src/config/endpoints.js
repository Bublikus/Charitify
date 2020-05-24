
/**
 *
 * @description API URLs builders.
 */
export default {
    USER: (id) => `apiusers/${id || ':id'}`,
    USERS: () => `apiusers`,
  
    RECENT: (id) => `apirecents/${id || ':id'}`,
    RECENTS: () => `apirecents`,
  
    COMMENT: (id) => `apicomments/${id || ':id'}`,
    COMMENTS: () => `apicomments`,
  
    FUND: (id) => `apifunds/${id || ':id'}`,
    FUNDS: () => `apifunds`,
  
    ORGANIZATION: (id) => `apiorganizations/${id || ':id'}`,
    ORGANIZATIONS: () => `apiorganizations`,
  }
  