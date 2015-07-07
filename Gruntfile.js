module.exports = function(grunt) {
  grunt.initConfig({

	pkg: grunt.file.readJSON('package.json'),

    concat: {
		options: {
			separator: ';\n'
		},
		/*
	    channels:{

	    	files: {
	    		'source/js/dist/channels.js': [

	            	'source/js/modules/search-form.js',
	            	'source/js/modules/search-home.js',
	            	'source/js/modules/search-object.js'
	            ]
	    	},
	    },
	    */
		/*
	    global:{
	    	files: {
	    		'source/js/dist/global.js': [
	    		    'source/js/modules/bower_components/jquery-dropdown/jquery.dropdown.min.js',
	    		    'source/js/patternlab/global/menus.js',
	    		    'source/js/patternlab/global/feature-detect.js'
	            ]
	    	},
	    },
	    */
        blacklight:{
            files: {
                'source/js/modules/lib/blacklight/blacklight_all.js': [
                    'source/js/modules/lib/blacklight/core.js',
                    'source/js/modules/lib/blacklight/search_context.js',
                    //'source/js/modules/lib/blacklight/checkbox_submit.js',
                    //'source/js/modules/lib/blacklight/bookmark_toggle.js',
                    //'source/js/modules/lib/blacklight/ajax_modal.js',
                    //'source/js/modules/lib/blacklight/collapsable.js',
                 ]
            }
        },
	    map:{
	    	files: {
	    		'source/js/dist/application-map.js': [
	    			'source/js/modules/map/leaflet-0.7.3/leaflet.js',
	    			'source/js/modules/map/Leaflet-Pan/L.Control.Pan.js',
	    			'source/js/modules/map/Leaflet.markercluster-master/dist/leaflet.markercluster.js'
	    		 ]
	    	}
	    },
	    map_css:{
	    	files: {
	    		'source/js/dist/css/map/application-map.css': [
                  'source/js/modules/map/leaflet-0.7.3/leaflet.css',

                  /*'source/js/modules/map/leaflet.ie.css',*/

                  'source/js/modules/map/Leaflet-MiniMap-master/src/Control.MiniMap.css',

	    		  'source/js/modules/map/Leaflet.markercluster-master/dist/MarkerCluster.Default.css',
                  'source/js/modules/map/Leaflet.markercluster-master/dist/MarkerCluster.Default.ie.css'
	    	]
	    	}
	    },
	    mlt:{
            files: {
                'source/js/dist/eu/eu-carousel.js': [
                    'source/js/modules/eu/eu-carousel.js'
                 ]
            }
	    }
    },

    copy: {
      jquery: {
          src:    ['source/js/modules/bower_components/jquery.scrollTo/jquery.scrollTo.js',
                   'source/js/modules/bower_components/imagesloaded/imagesloaded.pkgd.js',
                   'source/js/modules/bower_components/jquery/dist/jquery.js',
                   'source/js/modules/bower_components/jquery-dropdown/jquery.dropdown.js'],

          dest:    'source/js/dist/lib',
          expand:  true,
          flatten: true
      },
      blacklight: {
          src:    '**',
          cwd:    'source/js/modules/lib/blacklight',
          dest:   'source/js/dist/lib/blacklight',
          expand:  true
      },
      global_dependencies: {
          src:    '**',
          cwd:    'source/js/patternlab/global',
          dest:   'source/js/dist/global',
          flatten: true,
          expand:  true
      },
      eu: {
          src:    '**',
          cwd:    'source/js/modules/eu',
          dest:   'source/js/dist/eu',
          expand: true
      },
      main: {
          src:    'main.js',
          cwd:    'source/js/modules',
          dest:   'source/js/dist',
          expand: true
      },
      map_img: {
        src:     '**',
        cwd:     'source/js/modules/map/leaflet-0.7.3/images/',
        dest:    'source/js/dist/css/map/images',
        flatten: true,
        nonull:  true,
        expand:  true
      },
      mediaviewers: {
          src:    'mediaviewer*.js',
          cwd:    'source/js/modules',
          dest:   'source/js/dist',
          expand: true
      },
      pdfjs: {
          src:    '**',
          cwd:    'source/js/modules/lib/pdfjs',
          dest:   'source/js/dist/lib/pdfjs',
          expand:  true
      },
      require: {
        src:    '**',
        cwd:    'source/js/modules/bower_components/requirejs/',
        dest:   'source/js/dist/',
        expand: true
      }
	}
  });
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default',
          [
           //'concat:channels',
           //'concat:global',
           'concat:blacklight',
           'concat:map',
           'concat:map_css',
           'concat:mlt',
           'copy:blacklight',
           'copy:eu',
           'copy:global_dependencies',
           'copy:jquery',
           'copy:main',
           'copy:map_img',
           'copy:mediaviewers',
           'copy:pdfjs',
           'copy:require'
           ]);
}

