import { mount, StartClient } from "@solidjs/start/client";

const appNode = document.getElementById("app");

mount(() => <StartClient />, appNode);