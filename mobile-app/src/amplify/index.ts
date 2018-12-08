import Auth from '@aws-amplify/auth';
import configuration from './aws-exports';

export function configure() {
    Auth.configure(configuration);
}
