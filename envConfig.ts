import {
  ANDROID_ID,
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  CLIENT_ID,
  IOS_ID,
  MEASUREMENT_ID,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
} from "@env";

interface Config {
  ANDROID_ID: string;
  API_KEY: string;
  APP_ID: string;
  AUTH_DOMAIN: string;
  CLIENT_ID: string;
  IOS_ID: string;
  MEASUREMENT_ID: string;
  MESSAGING_SENDER_ID: string;
  PROJECT_ID: string;
  STORAGE_BUCKET: string;
}

const config: Config = {
  ANDROID_ID,
  API_KEY,
  APP_ID,
  AUTH_DOMAIN,
  CLIENT_ID,
  IOS_ID,
  MEASUREMENT_ID,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
  STORAGE_BUCKET,
};

export default config;
