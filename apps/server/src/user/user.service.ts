import { Injectable } from "@nestjs/common";
import { PrismaService } from "@server/prisma/prisma.service";
import { User, Prisma } from "@prisma/client";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput
    })
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip, take, cursor, where, orderBy
    })
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.user.update({
      data, where
    })
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where
    })
  }
} 