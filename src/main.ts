import { AppModule } from "./app.module.ts";
import { platformOak } from "./deps.ts";

const platform = await platformOak().bootstrapModule(AppModule);

await platform.listen({ port: parseInt(Deno.env.get("PORT") ?? "3000") });
