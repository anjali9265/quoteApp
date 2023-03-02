// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';

type Data = [{
  id: number,
  visitCount: number
}]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const currentCount = await prisma.counter.findMany()
    if (!!currentCount?.pop()?.visitCount) {
      const count = currentCount.pop().visitCount + 1
      const result = await prisma.counter.update({
        where: { id: 1 },
        data: { visitCount: count }
      })
      res.status(200).send(result);
      return
    }
  } else {
    const currentCount = await prisma.counter.findMany()
    return res.status(200).send(currentCount);
  }
}
