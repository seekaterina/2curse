const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index', 'events']),
  createPages ('./src/pages/diceduel.html', './diceduel.html', ['index', 'dice']),
  createPages('./src/pages/events/event1.html', './event1.html', ['index', 'events']),
  createPages('./src/pages/events/event2.html', './event2.html', ['index', 'events']),
  createPages('./src/pages/events/event3.html', './event3.html', ['index', 'events']),
  createPages('./src/pages/quiz.html', './quiz.html', ['index', 'quiz']),
]

module.exports = htmlPages
