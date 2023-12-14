import { Module } from "@nestjs/common";
import { TrpcService } from "@server/trpc/trpc.service";
import { TrpcRouter } from "@server/trpc/trpc.router";
import { PrismaService } from "@server/prisma/prisma.service";
import { AbiService } from "@server/abi/abi.service";
import { UserService } from "@server/user/user.service";

@Module({
  imports: [],
  controllers: [],
  providers: [TrpcService, TrpcRouter, PrismaService, AbiService, UserService]
})
export class TrpcModule { }
