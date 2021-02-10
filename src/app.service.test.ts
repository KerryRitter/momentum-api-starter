import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts";
import { AppService } from "./app.service.ts";

// Simple name and function, compact form, but not configurable
Deno.test("getHealthStatus() returns ok", () => {
  const healthStatus = new AppService().getHealthStatus();

  assertEquals(healthStatus, { status: "ok" });
});
