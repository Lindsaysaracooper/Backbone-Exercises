Complete as many of the five apps as possible.

Namespace the files you create so you can have multiple views, models, etc with only one entry.js.

Each exercise should render based on the URL, and this should be managed by the router. Create a navigation so that each page is accessible from every other page.

a) Create a form that saves a blog post to tiny-za-server. The post should have a title and a body. It does not need to display blog posts, just save them.

b) Create a form for a person. It should have a first name, last name, address, and phone number. It should save the person to tiny-za-server.

c) Create a "blog reading app", where you have a list of blog posts on the side and when you click on a post title, it opens that post in another view, but does not remove the list from the page.

d) Create a bookmarking app where you can save URLs. It should have a form where you enter the URL, a title, and a "tag". There should be a list of all the URLs, as well as a list of all the tags (this should be generated dynamically from the link collection). When you click on a tag, the link list should show only those tags. Hint: which tag is selected is "application state", so could appear in your URL and/or have a view model to represent it. You can filter a collection with collection.filter(...), but be aware that it returns an array of models, not a new collection.

e) Create a complete blog CMS from scratch, allowing you to create, read, update, and delete blog posts.
