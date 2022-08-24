import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "ba0c7397a38640cca781bc8dbcd73063";
const token  = "007eJxTYHC+/iLwSBy7saP5xzmaP7Zwube6bbeM2vo0Y1XQs1nSYl8UGJISDZLNjS3NE40tzEwMkpMTzS0Mk5ItUpKSU8yNDcyM3fjZko8lsCfHrallZGSAQBCfhSE3MTOPgQEAQ5cf0A==";
// const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
