var dotView = new Vue({
  el: '.dot-view',
  data: {
    items: function() {
      var status = [ '', 'running', 'warning', 'stopped' ];
      var data = [];
      function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
      }
      for ( var i = 0 ; i < 300 ; i++ )
        data.push({
          status: status[Math.floor(Math.random() * 4) + 0],
          hostName: guid()
        });
      return data;
    }
  }
});