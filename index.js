import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker({
  nodeID: 'node-moleculerJS',
  transporter: 'TCP',
  logger: true,
});

broker.createService({
    name: 'greeter',
    actions: {
        sayHello(ctx) {
            return `Hello ${ctx.params.name}`;
        }
    }
})
