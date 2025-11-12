import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NATS_SERVICE, envs } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: envs.natsServers,
          timeout: 10000, // 10 segundos para operaciones como bcrypt
        },
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: envs.natsServers,
          timeout: 10000, // 10 segundos para operaciones como bcrypt
        },
      },
    ]),
  ],
})
export class NatsModule {}
