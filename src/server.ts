import express from 'express'

import { categoriesRoutes } from './routes/categoriesRoutes'
import { specificationsRoutes } from './routes/specificationsRoutes';

const app = express();

app.use(express.json())
app.use('/categories', categoriesRoutes)
app.use('/specifications', specificationsRoutes)

app.listen(3333, () => console.log('Server listening on port 3333'))