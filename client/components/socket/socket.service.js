'use strict';

import * as _ from 'lodash';
import angular from 'angular';
import io from 'socket.io-client';

function Socket(socketFactory, $rootScope) {
  'ngInject';
  // socket.io now auto-configures its connection when we ommit a connection url

  var ioSocket = io('http://localhost:3000', {jsonp: false, transports: ['websocket']});

  var socket = socketFactory({
    ioSocket
  });

  return {
    socket,
    sendEmit(emitName, data){
      socket.emit(emitName, data);
    },
    /**
     * Register listeners to sync an array with updates on a model
     *
     * Takes the array we want to sync, the model name that socket updates are sent from,
     * and an optional callback function after new items are updated.
     *
     * @param {String} modelName
     * @param {Array} array
     * @param {Function} cb
     */
    syncPostsUpdates(circleId) {

      /**
       * Syncs item creation/updates on 'model:save'
       */
      console.log('ODPALASZ SERWER: ' + circleId);
      socket.on('SERVER_NEW_POST:' + circleId, function (data) {
        $rootScope.$emit('SERVER_POST', data);
      });

      // socket.on(`CIRCLE:${circleId}`, function () {
      //
      // });

      // socket.on(`${modelName}:save`, function(item) {
      //   var oldItem = _.find(array, {
      //     _id: item._id
      //   });
      //   var index = array.indexOf(oldItem);
      //   var event = 'created';
      //
      //   // replace oldItem if it exists
      //   // otherwise just add item to the collection
      //   if(oldItem) {
      //     array.splice(index, 1, item);
      //     event = 'updated';
      //   } else {
      //     array.push(item);
      //   }
      //
      //   cb(event, item, array);
      // });

      /**
       * Syncs removed items on 'model:remove'
       */
      // socket.on(`${modelName}:remove`, function(item) {
      //   var event = 'deleted';
      //   _.remove(array, {
      //     _id: item._id
      //   });
      //   cb(event, item, array);
      // });
    },

    /**
     * Removes listeners for a models updates on the socket
     *
     * @param modelName
     */
    unsyncUpdates(circleId) {
      console.log('konczysz polaczenie: ' + circleId);
      socket.removeAllListeners('SERVER_NEW_POST:' + circleId);
    }
  };
}


export default angular.module('myCircleApp.socket', [])
  .factory('socket', Socket)
  .name;
