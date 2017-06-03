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
                .attr('data-fancybox', 'image')
                .fadeIn() 
            :
                $('.fancybox')
                .fadeOut(0)
                .filter(function () {
                    return $(this).data('filter') == $filter;
                })
                .attr('data-fancybox', $filter)
                .fadeIn(1000);
        }
    });

});