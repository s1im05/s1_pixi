// ������������ ������
module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            main: {
                files: []
            }
        },
        concat: {
            main: {
                src: [
                    'js/libs/jquery.js',
                    'js/mylibs/**/*.js'  // ��� JS-����� � �����
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
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};