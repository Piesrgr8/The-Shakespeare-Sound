<?php 
// Redirect users who arent logged in...
function login_redirect() {

    // Current Page
    global $pagenow;

    // Check to see if user in not logged in and not on the login page
    if(!is_user_logged_in() && $pagenow != 'wp-admin.php')
          // If user is, Redirect to Login form.
          auth_redirect();
}
// add the block of code above to the WordPress template
add_action( 'wp', 'login_redirect' );

function login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/img/icon.png);
            height:65px;
            width:320px;
            background-size: 130px 100px;
            background-repeat: no-repeat;
        	padding-bottom: 30px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'login_logo' );

function login_stylesheet() {
    wp_enqueue_style( 'custom-login', get_stylesheet_directory_uri() . '/style-login.css' );
}
add_action( 'login_enqueue_scripts', 'login_stylesheet' );

// Register Episodes
function episodes_post_type() {

	$labels = array(
		'name'                  => _x( 'Episodes', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Episode', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Episodes', 'text_domain' ),
		'name_admin_bar'        => __( 'Episode', 'text_domain' ),
		'archives'              => __( 'Item Archives', 'text_domain' ),
		'attributes'            => __( 'Item Attributes', 'text_domain' ),
		'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
		'all_items'             => __( 'All Episodes', 'text_domain' ),
		'add_new_item'          => __( 'Add New Item', 'text_domain' ),
		'add_new'               => __( 'Add New Ep.', 'text_domain' ),
		'new_item'              => __( 'New Item', 'text_domain' ),
		'edit_item'             => __( 'Edit Item', 'text_domain' ),
		'update_item'           => __( 'Update Item', 'text_domain' ),
		'view_item'             => __( 'View Item', 'text_domain' ),
		'view_items'            => __( 'View Items', 'text_domain' ),
		'search_items'          => __( 'Search Ep.', 'text_domain' ),
		'not_found'             => __( 'Not found', 'text_domain' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
		'featured_image'        => __( 'Featured Image', 'text_domain' ),
		'set_featured_image'    => __( 'Set featured image', 'text_domain' ),
		'remove_featured_image' => __( 'Remove featured image', 'text_domain' ),
		'use_featured_image'    => __( 'Use as featured image', 'text_domain' ),
		'insert_into_item'      => __( 'Insert into item', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'text_domain' ),
		'items_list'            => __( 'Items list', 'text_domain' ),
		'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
		'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Episode', 'text_domain' ),
		'description'           => __( 'Podcast Episodes', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'comments', 'excerpt'),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
	);
	register_post_type( 'episodes', $args );

}
add_action( 'init', 'episodes_post_type', 0 );

add_filter( 'rest_allow_anonymous_comments', '__return_true' );

add_action('rest_api_init', function() {
	$posttypes = get_post_types();
	foreach($posttypes as $posttype) {
		register_rest_field(
			$posttype,
			'formatted_date',
			array("get_callback" => function () {
				return get_the_date();
			})
		);
	}
});
?>