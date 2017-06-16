import { configure } from '@storybook/react';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
// requires and returns all modules that match

function loadStories() {
  var modules = requireAll(require.context("../lib", true, /^\.\/.*\.story\.js$/));
  // is an array containing all the matching modules
}

configure(loadStories, module);
