import { configure } from '@storybook/react';

import '../src/sass/main.scss';

const loadStories = () => {
    const req = require.context('../src', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
