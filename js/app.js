$(function () {

    $('.filter').on('click', function () {
        let $this = $(this);
        if (!$this.hasClass('active')) {
            $('.filter').removeClass('active');
            $this.addClass('active');
            let $filter = $this.data('rel');
            console.log($filter);
            $filter == 'all' ?
                $('.fancybox')
                .fadeIn() :
                $('.fancybox')
                .fadeOut(0)
                .filter(function () {
                    return $(this).data('filter') == $filter;
                })
                .fadeIn();
        }
    });

});