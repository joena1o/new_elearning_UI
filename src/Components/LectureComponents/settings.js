import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "ba0c7397a38640cca781bc8dbcd73063";
const token  = "007eJxTYBBatcS089bFBVfWZV8XVJ9X95PhYPf8p05WUpc26/9oe22rwJCUaJBsbmxpnmhsYWZikJycaG5hmJRskZKUnGJubGBmvHQTS7IqC1uyV4I/AyMUgvgsDLmJmXkMDAC7VB/t";
// const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
