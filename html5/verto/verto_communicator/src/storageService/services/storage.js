'use strict';

  angular
  .module('storageService')
  .service('storage', ['$rootScope', '$localStorage',
  function($rootScope, $localStorage) {
    var data = $localStorage;

    data.$default({
      ui_connected: false,
      ws_connected: false,
      cur_call: 0,
      called_number: '',
      useVideo: true,
      call_history: [],
      call_start: false,
      name: '',
      email: '',
      login: '',
      password: '',
      userStatus: 'disconnected',
      mutedVideo: false,
      mutedMic: false,
      selectedVideo: null,
      selectedAudio: null,
      selectedShare: null,
      useStereo: true,
      useSTUN: true,
      useDedenc: false,
      mirrorInput: false,
      outgoingBandwidth: 'default',
      incomingBandwidth: 'default',
      vidQual: 'qvga',
      askRecoverCall: false,
      googNoiseSuppression: false,
      googHighpassFilter: false,
      googEchoCancellation: false
    });

    function changeData(verto_data) {
      angular.extend(data, verto_data);
    }

    return {
      data: data,
      changeData: changeData,
      reset: function() {
        data.ui_connected = false;
        data.ws_connected = false;
        data.cur_call = 0;
        data.userStatus = 'disconnected';
      },
    };
  }
]);