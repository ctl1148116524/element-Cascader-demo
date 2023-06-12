/*
 * @Author: chengtianlei
 * @Date: 2021-08-28 18:15:01
 * @LastEditors: chengtianlei
 * @LastEditTime: 2023-02-22 09:32:30
 * @FilePath: \sentry_background_system_v3_vite\src\shims-vue.d.ts
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "md5";
declare module "encryptlong";
declare module "jszip-utils";
declare module "pizzip";
declare module "docxtemplater-image-module-free";
declare module "file-saver";
declare module "@vue-office/docx";
