# DocPad Configuration File
# http://docpad.org/docs/config

moment = (require 'moment')
moment.locale('en')

# Define the DocPad Configuration
docpadConfig =

    # Things to ignore
    ignorePaths: ['bower_components', 'partials']

    # Global template data/functions
    templateData:

        # Format a date
        formatDate: (date, format = 'LLLL') -> (moment date).format format

    collections:
      # Top level pages
      pages: ->
        (@getCollection 'html').findAllLive {isPage: true}, {index: 1}

      # Projects
      projects: ->
        (@getCollection 'html').findAllLive
          isPage: true
          relativeDirPath: 'projects'
          filename:
            $ne: 'index.html.eco'

      # Top level blog
      blog: ->
        (@getCollection 'html').findAllLive {isPage: true}

      # Tech blog
      techBlog: ->
        (@getCollection 'html').findAllLive
          isPage: true
          relativeDirPath: 'blog/tech'
          filename:
            $ne: 'index.html.eco'

      # Personal blog
      personalBlog: ->
        (@getCollection 'html').findAllLive
          isPage: true
          relativeDirPath: 'blog/personal'
          filename:
            $ne: 'index.html.eco'

# Export the DocPad Configuration
module.exports = docpadConfig
