const tribeTitle = () => {
  $('[data-tribetitle]').each(function(index, elem) {
    $(elem).on('click', function() {
      $(elem).attr('disabled', true);
      let title = prompt('Enter a new title for your tribe member');
      const memberId = $(elem).data('tribetitle');
      const url = '/tribe/title/';

      const sendTitle = fetchData (
        url,
        'POST',
        { 'member': memberId, 'title': title },
        { 'X-CSRFToken': $("input[name='csrfmiddlewaretoken']").val()}
      );

      $.when(sendTitle).then(function(response) {
        $(elem).closest('.card').find('.tribe_title').text(title);
        $(elem).attr('disabled', false);
      }).fail(function(error) {
        console.log(error);
        $(elem).attr('disabled', false);
      });

    });
  });
};

tribeTitle();
