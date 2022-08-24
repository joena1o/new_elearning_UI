import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "ba0c7397a38640cca781bc8dbcd73063";
const token  = "007eJxTYHjosuJ/94253pwndvVI8Lv7ijtPuue8qua8aNrhlW03e44qMCQlGiSbG1uaJxpbmJkYJCcnmlsYJiVbpCQlp5gbG5gZ6yWwJa/dyJ6cx+bPyMgAgSA+C0NuYmYeAwMAkSEgpQ==";
// const token = null;
export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token};
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
