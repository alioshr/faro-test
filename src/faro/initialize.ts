/* eslint-disable no-underscore-dangle */
import {
  initializeFaro as coreInit,
  getWebInstrumentations,
  ReactIntegration,
  ReactRouterVersion,
  Faro
} from "@grafana/faro-react";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";
import { Route, useHistory } from "react-router-dom";

export async function initializeFaro(): Promise<Faro> {
  const faro = coreInit({
    // url: process.env.REACT_APP_FARO_URL,
    // apiKey: process.env.REACT_APP_FARO_SECRET,
    instrumentations: [
      ...getWebInstrumentations({
        captureConsole: true
      }),
      new TracingInstrumentation({
        resourceAttributes: {
          "service.name": process.env.REACT_APP_FARO_SERVICE,
          "team.name": process.env.REACT_APP_FARO_TEAM
        }
      }),
      new ReactIntegration({
        router: {
          version: ReactRouterVersion.V5,
          dependencies: {
            history: useHistory,
            Route
          }
        }
      })
    ],
    session: (window as any).__PRELOADED_STATE__?.faro?.session,
    app: {
      name: process.env.REACT_APP_FARO_SERVICE,
      version: process.env.VERSION,
      environment: process.env.ENV
    },
    user: {
      username: "test@gmail.com"
    }
  });

  // faro.api.pushLog(["Faro was initialized"]);
  return faro;
}
