activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :livereload

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Config for 2018 site
page "/2018/*", :layout => "2018"

configure :build do
  activate :minify_css
  activate :minify_javascript
end
