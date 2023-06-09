/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";
import "vue-global-api";

import mqttVueHook from "mqtt-vue-hook";

const urlMqtt = "ws://localhost:10884/mqtt";
const optionsMqtt = {
  clean: false,
  keepalive: 60,
  clientId: `mqtt_client_${Math.random()
    .toString(16)
    .substring(2, 10)}`,
  connectTimeout: 4000
};

export function registerPlugins(app) {
  loadFonts();
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(mqttVueHook, urlMqtt, optionsMqtt);
}
