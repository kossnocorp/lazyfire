import type firebase from "firebase/app";

const defaultAppName = "[DEFAULT]";

const configs: Record<string, Object> = {};

export function configureApp(appId: string, config: Object): void;

export function configureApp(config: Object): void;

export function configureApp(
  appNameOrConfig: string | Object,
  maybeConfig?: Object
): void {
  const { appName, config } =
    typeof appNameOrConfig === "string"
      ? {
          appName: appNameOrConfig,
          config: maybeConfig!,
        }
      : {
          appName: defaultAppName,
          config: appNameOrConfig,
        };

  configs[appName] = config;
}

let apps: Record<string, firebase.app.App> = {};

export async function ensureApp(appName: string = defaultAppName) {
  const { default: firebase } = await import("firebase/app");

  if (!apps[appName]) {
    const app = firebase.initializeApp(configs[appName], appName);
    apps[appName] = app;
  }

  return { app: apps[appName], firebase };
}
