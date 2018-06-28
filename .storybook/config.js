import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/stories/Basic');
}

configure(loadStories, module);
