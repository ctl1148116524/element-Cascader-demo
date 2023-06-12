/*
 * @Author: chengtianlei
 * @Date: 2022-04-22 19:29:10
 * @LastEditors: chengtianlei
 * @LastEditTime: 2023-06-12 18:40:58
 * @FilePath: \demo\src\main.ts
 */
import { createApp, Directive } from "vue";
import App from "./App.vue";
// 已使用按需加载
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 导入公共样式
import "./element.scss";

const app: any = createApp(App);
app.use(ElementPlus);
app.mount("#app");
