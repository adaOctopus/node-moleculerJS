import { ServiceBroker } from 'moleculer';
import UserService from './services/user.service.js';

async function start() {
    await UserService.start();
    console.log('User Service is running...');

    try {
        const newUser = await UserService.call('user.createUser', 
            { email: 'test@test.com', userName: 'test' });
        console.log('User created:', newUser);
        const users = await UserService.call('user.getUser');
        console.log('Users:', users);
    } catch {
        console.error('Error creating user');
    } finally {
        await UserService.stop();
    }
}

start().catch(console.error);