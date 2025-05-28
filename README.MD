# Launch it locally

bl serve -d ts
bl serve -d python

OR

cd ts && bl serve
cd python && bl serve


# Deploy it

bl deploy -d ts
bl deploy -d python

`cd folder && bl deploy` can't work cause it won't have the shared folder in the context