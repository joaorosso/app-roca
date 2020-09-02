export const environment = {
  production: true,
  apiUrl: 'https://roca-api.herokuapp.com',

  allowedDomains: [ /roca-api.herokuapp.com/ ],
  disallowedRoutes: [/\/oauth\/token/]
};
