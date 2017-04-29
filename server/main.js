import '/imports/startup/server/' // method descriptions
import '/imports/startup/both/' // collection description
ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '516177061886159',
    secret: '55840e48c4aec32f305160089f00eefe'
});