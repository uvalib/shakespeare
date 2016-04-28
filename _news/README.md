# Creating A New Article

```
---
title: ""
link: ""
subtitle: ""
copy: ""
published_date: ""
---
```

1. Copy the syntax displayed above, making sure to include the dashed lines.
2. Create a new file in this _news folder and save it with a name ending in ".html".
3. Paste the content into the new file and then put your article info inside the quotes.

Title is required. If there is no "title:" line in the file or it has an empty
string value, then no entry is generated on the news page for the content of
the file. (See example.html contents.)

Link and copy lines in a news article file are expected; thus HTML will
be generated for those sections whether these fields does not exist or are
empty strings.

Subtitle and published_date are optional; thus they can be missing from the
file or be empty strings and no HTML will be generated for them.

Don't forget to let the UX team know when you have finished created new News
items so that we can push them to production.
