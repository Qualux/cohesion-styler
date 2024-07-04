<?php 

/*
 * Plugin Name: Cohesion Styler
 * Description: CSS styling block.
 * Plugin URI: https://cohesionwp.com/plugins/cohesion-styler
 * Author: Qualux
 * Author URI: https://qualux.io
 * Version: 0.0.1
 */

namespace CohesionStyler;

define( 'COHESION_STYLER_URL', plugin_dir_url( __FILE__ ) );
define( 'COHESION_STYLER_PATH', plugin_dir_path( __FILE__ ) );
define( 'COHESION_STYLER_VERSION', '0.0.1' );

class Plugin {

    public function __construct() {

        add_action( 'init', [ $this, 'register_block' ] );

    }

    function register_block() {

        $result = register_block_type(
            COHESION_STYLER_PATH . 'build/blocks/styler'
        );

    }

}

new Plugin();