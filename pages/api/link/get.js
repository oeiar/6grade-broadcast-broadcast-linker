import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default function handler(req, res) {
  prisma.ShortURL
    .findFirst({
      where: {
        short: "HDEYTL",
      },
    })
    .then((dt) => {
      if (dt == undefined) res.end("/");
      else {
        res.end(encodeURI(dt.url.toString()));
      }
    });
}
