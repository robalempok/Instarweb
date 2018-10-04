import { Environment } from './environment.model';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  // backendEndpoint: 'http://localhost:5000', // 'https://instar-wallet-devel.herokuapp.com',
  backendEndpoint: 'https://instar-wallet-devel.herokuapp.com',
  reCaptchaSiteKey: '6Lf4O20UAAAAAB_EglpaCHEF1SS1IVUpzGKVQebh',
  branchioKey: 'key_test_fny9AsdJWPrzVPvNrmQErfilrsbf3W8N'
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
