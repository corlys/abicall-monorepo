import { INestApplication, Injectable } from "@nestjs/common";
import { z } from "zod";
import { TrpcService } from "@server/trpc/trpc.service";
import { UserService } from "@server/user/user.service";
import { AbiService } from "@server/abi/abi.service";
import * as trpcExpress from "@trpc/server/adapters/express";

@Injectable()
export class TrpcRouter {
  constructor(
    private readonly trpc: TrpcService,
    private readonly userService: UserService,
    private readonly abiService: AbiService
  ) { }

  appRouter = this.trpc.router({
    hello: this.trpc.procedure.input(
      z.object({
        name: z.string().optional()
      })
    )
      .query(({ input }) => {
        const { name } = input;
        return {
          greeting: `Hello ${name ? name : "Bilbo"}`
        }
      }),
    createAbi: this.trpc.procedure.input(
      z.object({
        abiContent: z.string(),
        address: z.string()
      })
    ).mutation(async ({ input }) => {
      const { abiContent, address } = input;
      let user = await this.userService.user({ address });
      if (!user) {
        user = await this.userService.createUser({
          address
        });
      }
      const abi = this.abiService.createAbi({
        content: abiContent,
        author: {
          connect: {
            address
          }
        }
      })
      return abi;
    })
  });

  async applyMiddleware(app: INestApplication) {
    app.use("/trpc", trpcExpress.createExpressMiddleware({
      router: this.appRouter
    }))
  }
}

export type AppRouter = TrpcRouter["appRouter"]
