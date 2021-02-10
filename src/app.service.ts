import { Injectable } from "./deps.ts";

@Injectable({ global: false })
export class AppService {
  getHealthStatus() {
    return { status: "ok" };
  }
}
