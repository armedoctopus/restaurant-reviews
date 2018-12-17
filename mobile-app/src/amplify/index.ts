import Amplify from 'aws-amplify';
import configuration from './aws-exports';

export function configure() {
    Amplify.configure(configuration);
}
