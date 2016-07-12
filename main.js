$(document).ready(function() {
    // var $userName;

    $('.welcomeScreen button').on('click', function() {
        $('.welcomeScreen').slideUp();
        $('.chatroomContainer').removeClass('hidden');
        let $userName = $('.welcomeScreen input').val();
        let $urlExtension = response[0]._id;

        $('.users').append('<p></p>');
        $('.users p:last-child').append($userName + ' (you)');
        $.ajax({
            url: 'http://tiny-za-server.herokuapp.com/collections/louie-chatapp',
            type: 'POST',
            success: function(response) {
                console.log(response);
            },
            contentType: 'application/json',
            data: JSON.stringify({
                "userName": $userName
            })
        });
    });
    $('.chatroomContainer button').on('click', function() {
        let $im = $('.chatroomContainer input').val();
        let $timestamp = '';
        $.ajax({
            url: 'http://tiny-za-server.herokuapp.com/collections/louie-chatapp/'+ $urlExtension,
            type: 'PUT',
            success: function(response) {
            },
            contentType: 'application/json',
            // data: JSON.stringify({
            //   "im":$im
            //
            // })
        });

        //
        $('.chats').append('<p></p>');
        $('.chats p:last-child').append($im);
        //   $.ajax({
        //     url: 'http://tiny-za-server.herokuapp.com/collections/louie-chatapp',
        //     type: 'POST',
        //      success: function(response) {
        //        console.log(response);
        //      },
        //      contentType: 'application/json',
        //      data: JSON.stringify({
        //        "sender":$userName,
        //        "im":$im,
        //        "timestamp":"timestamp"
        //        }
        //    )}
        // );
    });
    // });
    function Session(username) {
        this.username = username;
    }

    function Message(timestamp, sender, im) {
        this.timestamp = timestamp;
        this.sender = sender;
        this.im = im;
    }
});
