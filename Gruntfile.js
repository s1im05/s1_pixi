// ������������ ������
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
                    'js/engine/*.js'  // ��� JS-����� � �����
                ],
                dest: 'build/scripts.js'
            }
        },
        // �������
        uglify: {
            main: {
                files: {
                    // ��������� ������ concat
                    'build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        }
    });

    // �������� ��������, ������������� � ������� npm install
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // ������ �� ���������
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('release', ['jshint', 'concat', 'uglify']);
};