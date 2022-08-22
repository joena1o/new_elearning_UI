import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "ba0c7397a38640cca781bc8dbcd73063";
const token  = "007eJxTYHD5dO85984K0aTwXWsucj+YPuXCUxXVJ17fha/NL1Lu2N+lwJCUaJBsbmxpnmhsYWZikJycaG5hmJRskZKUnGJubGBmPDeIOVlmCUuykr4oMyMDBIL4LAy5iZl5DAwAyY4gRw==";
// const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
