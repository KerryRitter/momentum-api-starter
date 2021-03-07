import { Application } from "https://deno.land/x/oak/application.ts";
import { Router } from "https://deno.land/x/oak/router.ts";
import { platformOak } from "./deps.ts";
import { AppModule } from "./app.module.ts";

const app = new Application();
const router = new Router();

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log([
    `Listening on `,
    secure ? "https://" : "http://",
    hostname ?? "localhost",
    `:${port}`,
  ].join(""));
});

const platform = await platformOak(app, router).bootstrapModule(AppModule);

const port = parseInt(Deno.env.get("PORT") ?? "3000");
await platform.listen({ port });
