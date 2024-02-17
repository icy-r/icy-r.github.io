import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { inject } from '@vercel/analytics';
import analytic from './firebase';

inject();

import { logEvent } from "firebase/analytics";

router.afterEach((to) => {
    // console.log('Before logEvent');
    try {
        logEvent(analytic, 'page_view', {
            page_path: to.path,
            page_location: window.location.href,
            page_title: to.name,
        });
        // console.log('logEvent called successfully');
    } catch (error) {
        console.log('Error calling logEvent:', error);
    }
    // console.log('After logEvent');
});

const app = createApp(App);
app.use(router);
app.mount("#app");