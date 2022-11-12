import 'dotenv/config'
import { Sequelize } from 'sequelize';



const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  
        host: process.env.POSTGRES_HOST,
        port: process.env.PORT,
        database: process.env.DATABASE,
        schema: 'booklist',
        dialect: 'postgres',
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        logging: false,
        define: {
            timestamps: false,
            freezeTableName: true
        }
        
    });

export default sequelize