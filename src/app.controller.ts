import { AppService } from "./app.service.ts";
import { Controller, Get } from "./deps.ts";

@Controller("")
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()
  getHealthStatus() {
    return this.appService.getHealthStatus();
  }
}
