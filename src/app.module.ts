import { AppController } from "./app.controller.ts";
import { AppService } from "./app.service.ts";
import { MvModule } from "./deps.ts";

@MvModule({
  imports: [],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
