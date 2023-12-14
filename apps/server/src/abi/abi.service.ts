import { Injectable } from "@nestjs/common";
import { PrismaService } from '@server/prisma/prisma.service';
import { Abi, Prisma } from "@prisma/client";

@Injectable()
export class AbiService {
  constructor(private prisma: PrismaService) { }

  async abi(abiWhereUniqueInput: Prisma.AbiWhereUniqueInput) {
    return this.prisma.abi.findUnique({
      where: abiWhereUniqueInput
    })
  }

  async abis(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AbiWhereUniqueInput;
    where?: Prisma.AbiWhereInput;
    orderBy?: Prisma.AbiOrderByWithRelationInput
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.abi.findMany({
      skip, take, cursor, where, orderBy
    })
  }

  async createAbi(data: Prisma.AbiCreateInput) {
    return this.prisma.abi.create({
      data
    })
  }

  async updateAbi(params: {
    where: Prisma.AbiWhereUniqueInput;
    data: Prisma.AbiUpdateInput
  }) {
    const { data, where } = params;
    return this.prisma.abi.update({
      data, where
    })
  }

  async deletePost(where: Prisma.AbiWhereUniqueInput) {
    return this.prisma.abi.delete({
      where
    })
  }

}
