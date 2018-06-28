import React from 'react';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import App from '../App';

// eslint-disable-next-line react/jsx-filename-extension
storiesOf('Full, live app', module).add('It is running here', () => <App />);
