// Create a user anmd get a user
// Mock no DB

import { user } from '@openai/agents';
import { ServiceBroker } from 'moleculer';

const broker = new ServiceBroker();

const users = [];

function generateUserId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

broker.createService({
    name: 'user',
    actions: {
        createUser(ctx) {
            const { email, userName } = ctx.params;
            const id = generateUserId();
            const newUser = { id, userName, email}
            user.push(newUser);
            return newUser;
        }
    }
})