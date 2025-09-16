/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Gold` | `/Gold`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Silver` | `/Silver`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Gold` | `/Gold`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Silver` | `/Silver`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Gold${`?${string}` | `#${string}` | ''}` | `/Gold${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Silver${`?${string}` | `#${string}` | ''}` | `/Silver${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Gold` | `/Gold`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Silver` | `/Silver`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; };
    }
  }
}
