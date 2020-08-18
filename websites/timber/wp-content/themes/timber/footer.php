<footer class="footer">
        <div class="container">
            <div class="footer__phone">
                <a href="<?php the_field('phone'); ?>"><?php the_field('phone'); ?></a>
            </div>
            <div class="footer__email">
                <?php the_field('footer__email'); ?>
            </div>
        </div>
    </footer>


    <?php wp_footer(); ?> 

    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/main.js"></script> -->
</body>

</html>