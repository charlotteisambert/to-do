import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION, URL } from "../constants";

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(URL, { useNewUrlParser: true }),
  },
];