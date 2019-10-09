activate :autoprefixer do |prefix|
  prefix.browsers = 'last 2 versions'
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :development do
  activate :livereload
end

activate :external_pipeline,
  name: :webpack,
  command: build? ? 'npm run build' : 'npm run start',
  source: '.tmp/dist',
  latency: 1

config[:js_dir] = 'javascripts'
config[:css_dir] = 'stylesheets'
config[:images_dir] = 'images'

configure :build do
  activate :minify_css
  activate :minify_javascript
end

# Config for 2018 site
page '/2018/*', :layout => '2018'
