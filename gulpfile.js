var gulp = require('gulp')
var typedoc = require('gulp-typedoc')

gulp.task('typedoc', () => {
    return gulp
        .src(['src/**/*.ts'])
        .pipe(typedoc({
            exclude: ['node_modules',
                '**/*+(index|.worker|.e2e).ts'],
            // TypeScript options (see typescript docs)
            module: 'commonjs',
            target: 'es6',
            includeDeclarations: false,

            // Output options (see typedoc docs)
            out: './docs',

            // TypeDoc options (see typedoc docs)
            name: 'cq-robot',
            ignoreCompilerErrors: false,
            version: true,
            theme: 'markdown'
        }))
})