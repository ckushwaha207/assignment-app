"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Link",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  },
  {
    name: "Specification",
    embedded: false
  },
  {
    name: "Book",
    embedded: false
  },
  {
    name: "CartItem",
    embedded: false
  },
  {
    name: "Cart",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/chandan-kushwaha-cb5f85/assignment/dev`
});
exports.prisma = new exports.Prisma();
