# shakespeare
Shakespeare By The Book site

This is a static website replaces work Jeremy began for it.

## Communications Staff

To add articles to the News page:

1. Go to the _news folder
2. View the README.md file and follow the directions in it.
3. Let the UX team know when you want to have new articles added to the production site so that we can push a new build out to the server.

## Developer Information

After building the site run the accessibility script to check for issues. Then
run the check-html script to check validity of the HTML code.

The tour form requires a form submission which is done via AJAX. After running
the prod-build process, the _site_prod/form directory content needs to be
copied over to the webapp01.lib.virginia.edu/shakespeare directory. It is then
removed from the _site_prod directory before that directory is copied over to
the static server.

There is a Bamboo project in place for deploying the site.
