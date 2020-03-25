import wizardConfig from '../../wizard/config.js';

// Toggle whether testing in production or locally.
let isLocalhostTesting = true;

let origin = 'https://genesysappfoundry.github.io';
let clientIDs = wizardConfig.clientIDs;
if(isLocalhostTesting){
    origin = 'http://localhost:8080';
    clientIDs['mypurecloud.com'] = 'e7de8a75-62bb-43eb-9063-38509f8c21af';
}

// Keep origin as tld as it's being used 
// to check post messages in preview listing.
// root would be the actual root URI of the project.
const root = (origin == 'https://genesysappfoundry.github.io') ?
                origin + '/purecloud-partner-listing-management' :
                origin;

export default {    
    clientIDs: clientIDs,

    "root": root,
    "origin": origin,
    "redirectUriBase": `${root}/partner-side/`,
    "globalAssetsURL": `${root}/assets/`,

    // For the Cheat Chat API
    "cheatChat": {
        "organizationId": "1f86c618-0d8d-4f10-9893-aeacc5a158b0",
        "deploymentId": "7102e7b2-2b12-4bb0-b90b-2aaf70b52831"
    }
}