module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            main: {
                src: [
                    'js/engine/s1_pixi.js'
                ]
            }
        },
        concat: {
            main: {
                src: [
                    'bower_components/pixi.js/bin/pixi.js',
                    'js/engine/*.js'
                ],
                dest: 'js/build/scripts.js'
            }
        },
        uglify: {
            main: {
                files: {
                    'js/build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('release', ['jshint', 'concat', 'uglify']);
};