$(function(){
  function buildMessageHTML(message){
    image = ( message.image ) ? `<p class="message-lower__image" src=${message.image}>` : "";
    var html =`
        <div class="message" data-id=${message.id}>
          <div class="message__upper-info">
            <p class="message__upper-info__talker">
              ${ message.name }
            </p>
            <p class="message__upper-info__date">
              ${ message.date}
            </p>
          </div>
          <div class="message-lower">
            <p class="message-lower__text">
              ${ message.content}
            </p>
              ${ image }
          </div>
        </div>`;
    return html;

  }

  function ScrollMessage(){
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
    })

    .done(function(message){
      var html = buildMessageHTML(message);
      $('.messages').append(html);
      ScrollMessage();
      $('.form__message').val('');
      $('.form__submit').prop('disabled', false);
    })

    .fail(function(){
      alert('error');
    });
  });

      var id = $('.messages .message:last-child').data('data-id');
      var interval = setInterval(function(){
      var insertHTML = '';

      if (window.location.href.match(/\/groups\/\d+\/messages/)){

      $.ajax({
        url: location.href.json,
        dataType: 'json',
      })

      .done(function(data){
        data.forEach(function(message){
          if(message.id > id){
          insertHTML += buildMessageHTML(message);
        }
      });
        $('.messages').append(insertHTML);
        ScrollMessage();
      })
      .fail(function(data){
        alert('自動更新に失敗しました');
      });
    } else {
      clearInterval(interval);
    }
    id = $('.messages .message:last-child').data('data-id');
  }, 5000);
});

