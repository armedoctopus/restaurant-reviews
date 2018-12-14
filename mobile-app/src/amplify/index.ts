import Auth from '@aws-amplify/auth';
import configuration from './aws-exports';

export function configure() {
    // tslint:disable-next-line:no-console
    console.debug(`Loading Amplify config: ${JSON.stringify(configuration)}`);
    Auth.configure(configuration);
}
