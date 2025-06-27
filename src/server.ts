import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ProjectRoutes from './routes/ProjectRoutes';

dotenv.config({ path: __dirname + '/.env' });

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/project', ProjectRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;