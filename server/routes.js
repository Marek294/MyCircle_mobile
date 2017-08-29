/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

import users from './api/users';
import circles from './api/circles';
import posts from './api/posts';
import commentaries from './api/commentaries';
import auth from './api/auth';
// import adminAuth from './api/admin/auth';
import admins from './api/admin/admins';

export default function(app) {
  // Insert routes below
  app.use('/api/users', users);
  app.use('/api/circles', circles);
  app.use('/api/posts', posts);
  app.use('/api/commentaries', commentaries);
  app.use('/api/authenticate', auth);
  app.use('/api/admins', admins);
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
    });
}
