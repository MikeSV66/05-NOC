import { PrismaClient } from '@prisma/client';
import { envs } from './config/plugins/envs.plugin';
import { LogModel } from './data/mongo';
import { MongoDatabase } from './data/mongo/init';
import { Server } from './presentation/server';


(async() => {
  main();
})();


async function main(){

  await MongoDatabase.connect({
    mongoUrl:  envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME,
  });

  //const prisma = new PrismaClient();
  // const newLog = await prisma.logModel.create({
  //    data: {
  //      level: 'HIGH',
  //      message: 'Test message',
  //      origin: 'App.ts'
  //    }
  //  })
  // console.log({ newLog });

  // const logs = await prisma.logModel.findMany({
  //    where: {
  //      level: 'MEDIUM'
  //   }
  // });
  // console.log(logs);


  // Crear una colección = tabla, documento = registro
// const newLog = await LogModel.create({
//   message: 'Test message from Mongo',
//   origin: 'App.ts',
//   level: 'low'
// });

// await newLog.save();
// console.log(newLog);

// const logs = await LogModel.find();
// console.log(logs);
// console.log(logs[1].message);

  Server.start();
}


