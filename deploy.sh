#/bin/bash

# build
ng build --prod

# upload to s3
aws s3 cp ./dist s3://instar-wallet --recursive --acl public-read

