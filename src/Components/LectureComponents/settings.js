import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "2fa3d707afcf41d9834f7bc71caaa263";
//const token  = "007eJxTYOAwXSQbp7u/OlnXszjQqPX2/u+57MYtrcpKTz2PTWq5sV6BISnRINnc2NI80djCzMQgOTnR3MIwKdkiJSk5xdzYwMw47ihD8l0xpuSwTWosjAwQCOKzMOQmZuYxMAAAwPsebA==";
const token = null;
export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
