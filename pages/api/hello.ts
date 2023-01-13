// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

//Creamos nuestro propio Objeto 'Data', el cual indica el conjunto de props que deberá devolver nuestro tipo 'Data' | Dicho objeto 'type' hace las labores como una interface
type Data = {
  name: string
}

//Debemos indicar el tipo de la request y de la response, en este caso son 'NextApiRequest' y 'NextApiResponse' respectivamente | Indicamos que el tipo de datos devuelto por nuestra Response será de tipo 'Data'
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
