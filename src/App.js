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
                'https://example.com/your-authentication-endpoint', // REPLACE WITH YOUR AUTHENTICATION ENDPOINT URL
            onAuthenticationRequest: () => ({
                customHeader: 'customHeaderValue',
            }),
        });

        componentsFactory.create('subscriptions-manager').render('#root');
    }, []);
  return (
      <div id={'root'}/>
  );
}

