import React, {useEffect} from 'react';

import {Components} from '@maxio-com/self-service';

export default function App() {
    useEffect(() => {
        let componentsFactory = new Components({
            i18nSettings: {
                loadPath: 'https://staging-static.keen.io/ruc/en/{{ns}}.json',
                language: 'en',
            },
            accessTokenUrl:
                'https://chargifyapiadaptermock.us-west-2.test.aws.keen.io/merchant/auth?customer=pine-solutions-demo',
            onAuthenticationRequest: () => ({
                customHeader: 'customHeaderValue',
            }),
            apiUrl: 'https://selfservice.maxio.com/api',
        });

        componentsFactory.create('subscriptions-manager').render('#root');
    }, []);
    return null;
}

