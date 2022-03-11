import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';

const app = createApp(App);

Sentry.init({
	app,
	dsn: 'https://dddfd057675b47039f1e47ffb09d9ca3@o1164599.ingest.sentry.io/6253763',
	logErrors: true,
	release: __SENTRY_RELEASE__,
	integrations: [
		new BrowserTracing({
			routingInstrumentation: Sentry.vueRouterInstrumentation(router),
			tracingOrigins: ['localhost', /^\//],
		}),
	],
	// Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
	tracesSampleRate: 1.0,
});

app.use(router);
app.mount('#app');
