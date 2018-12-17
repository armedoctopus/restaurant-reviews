import Amplify from 'aws-amplify';
import configuration from './aws-exports';

window.LOG_LEVEL = 'DEBUG';

/**
 * Configure the AWS Amplify sub-system
 */
export function configure() {
    Amplify.configure(configuration);
}
