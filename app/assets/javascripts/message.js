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
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.message').animate({scrollTop: $('messages')[0].scrollHeight}, 'fast');
      $('.form__message').val('');
      $('.form__submit').prop('disabled', false);
    })

    .fail(function(){
      alert('error');
    });
  });
});
