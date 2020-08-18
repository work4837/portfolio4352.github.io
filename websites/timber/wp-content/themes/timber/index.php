<?php get_header(); ?>

    <main class="main">
        <div class="container">
            <div class="main__text">
                <div class="main__title">
                    <?php the_field('main__title'); ?>
                </div>
                <div class="main__descr">
                    <?php the_field('main__descr'); ?>
                </div>
            </div>
            <div class="main__img">
                <img src="<?php bloginfo( 'template_url' ); ?>/assets/img/main.png" alt="">
            </div>
            <div class="project">
                <div class="project__title">
                    <?php the_field('project__title'); ?>
                </div>
                <div class="project-item">
                    <?php 

$posts = get_field('project-item');

if( $posts ): ?>
    <ul>
    <?php foreach( $posts as $post): // variable must be called $post (IMPORTANT) ?>
        <?php setup_postdata($post); ?>
        <li class="project-item">
            <div class="project-item__name">
                <?php the_field('project-name'); ?>
            </div>
            <div class="project-item__size">
                <?php the_field('project-size'); ?>
            </div>
            <div class="project-item__area">
                <?php the_field('project-area'); ?>
            </div>
            <div class="project-item__price">
                <?php the_field('project-price'); ?>
            </div>
            <div class="project__image1">
                <img src="<?php the_field('project__image1'); ?>" alt="">
            </div>
            <div class="project__image2">
                <img src="<?php the_field('project__image2'); ?>" alt="">
            </div>
        </li>
    <?php endforeach; ?>
    </ul>
    <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
<?php endif; ?>
                </div>
            </div>
        </div>
        <div class="download">
            <div class="download__img">
                <img src="<?php bloginfo( 'template_url' ); ?>/assets/img/house.png" alt="">
            </div>
            <div class="download__btn">
                <a href="<?php the_field('download__link'); ?>" download>СКАЧАТЬ ВЕСЬ КАТАЛОГ ДОМОВ</a>
            </div>
        </div>
        <div class="container">
            <div class="gallery">
                <div class="gallery__title">
                    <?php the_field('gallery__title'); ?>
                </div>
                <div class="gallery__text">
                    <?php the_field('gallery__text'); ?>
                </div>
                <div id="gallery-images">
                    <?php the_field('gallery'); ?>
                </div>
            </div>
            <div class="main__img">
                <img src="<?php bloginfo( 'template_url' ); ?>/assets/img/main.png" alt="">
            </div>
        </div>
    </main>

<?php get_footer(); ?>