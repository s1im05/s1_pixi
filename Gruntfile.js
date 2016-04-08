// Обязательная обёртка
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
                    'js/engine/*.js'  // Все JS-файлы в папке
                ],
                dest: 'build/scripts.js'
            }
        },
        // Сжимаем
        uglify: {
            main: {
                files: {
                    // Результат задачи concat
                    'build/scripts.min.js': '<%= concat.main.dest %>'
                }
            }
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Задача по умолчанию
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('release', ['jshint', 'concat', 'uglify']);
};