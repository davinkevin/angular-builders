/**
 * Created by Evgeny Barabanov on 01/07/2018.
 */

import {BrowserBuilderSchema} from '@angular-devkit/build-angular';

export interface CustomWebpackBrowserBuildSchema extends BrowserBuilderSchema {
  webpackConfigPath?: string;
  mergeStrategy: { [key: string] : 'append' | 'prepend' | 'replace' }
}
