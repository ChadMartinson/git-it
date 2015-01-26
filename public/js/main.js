var c = document.getElementById('w');

Path.map('#/about').to(function () {
  c.innerHTML = templates.about();
});


Path.map('#/home').to(function() {
  c.innerHTML = templates.index();
});

$('#ghsubmitbtn').on('click', function(e) {
  e.preventDefault();
  $('#ghapidata').html(templates.loader());

  var username = $('#ghusername').val();
  var baseuri  = 'https://api.github.com/users/';
  var requri   = baseuri+username;
  var repouri  = requri +'/repos';

  $.getJSON(requri, function(res) {
    if(res.message == 'Not Found'|| res.username == '') {
      $('#ghapidata').html('<h2>No user found</h2>')
    }

    else {
      $('#ghapidata').html(templates.profile(res));

      var repos;
      $.getJSON(repouri, function(res) {
        repos = res;

        if(repos.length == 0){
          $('.repolist').html('<h2>No user found</h2>')
        }
        else {
          for(repo of repos) {
            $('.repolist').append(templates.repos(repo));
          }
        }
      });

    }
  });
});


Path.listen();
