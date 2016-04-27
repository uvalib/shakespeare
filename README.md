# shakespeare
Shakespeare By The Book site

This is a static website replaces work Jeremy began for it.

After building the site run the accessibility script to check for issues. Then
run the check-html script to check validity of the HTML code.

The tour form requires a form submission which is done via AJAX. After running
the prod-build process, the _site_prod/form directory content needs to be
copied over to the webapp01.lib.virginia.edu/shakespeare directory. It is then
removed from the _site_prod directory before that directory is copied over to
the static server.

There is a Bamboo project in place for deploying the site.
