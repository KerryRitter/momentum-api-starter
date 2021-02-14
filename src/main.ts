import { AppModule } from "./app.module.ts";
import { platformOak } from "./deps.ts";

const platform = await platformOak().bootstrapModule(AppModule);

const port = parseInt(Deno.env.get("PORT") ?? "3000");
console.log(`Starting server at http://localhost:${port}...`);
await platform.listen({ port });
