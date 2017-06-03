$(function () {

    $(document).ready(function () {
        $('[data-fancybox]').fancybox({
            image: {
                protect: true
            }
        });
        $('.filter').on('click', function () {
            alert('hej');
            return false;
        });


    });

});