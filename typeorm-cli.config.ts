import { DataSource } from 'typeorm';
import { CoffeeRefactor1711857092271 } from './src/migrations/1711857092271-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1711857092271],
});
