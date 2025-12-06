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

async function start() {
    await broker.start();
    const res = await broker.call('greeter.sayHello', { name: 'Moleculer' });
    console.log('Broker is running...');
    console.log(res);
     broker.stop();
}

start();
