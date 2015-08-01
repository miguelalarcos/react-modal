Package.describe({
  name: 'miguelalarcos:react-modal',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A simple modal for React Meteor.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('reactive-var', 'client');
  api.use('react@0.1.4');
  api.use('jhartma:cjsx@2.4.1');
  api.use('stylus', 'client')
  api.addFiles('react-modal.styl', 'client');
  api.addFiles('react-modal.cjsx', 'client');
  api.export('modal', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('miguelalarcos:react-modal');
  api.addFiles('react-modal-tests.js');
});
