import React, {useEffect} from 'react';

import Maxio from '@maxio-com/self-service';

export default function App() {
    useEffect(() => {
        let componentsFactory = new window.Maxio.Components({
            i18nSettings: {
                loadPath: 'https://link-to-translations.com/{{ns}}.json',
                language: 'en',
            },
            accessTokenUrl: 'https://linkt-to-auth-endpoint.com/',
            onAuthenticationRequest: () => ({
                customHeader: 'customHeaderValue',
            }),
            apiUrl: 'https://link-to-api-url.com/',
        });

        componentsFactory.create('customer-details').render('#root');
    }, []);
  return (
      <div id={'root'}/>
  );
}

