#This is a simple script which creates the files for deploying to AWS
#   dist/lambda.zip - Uploaded as the code for an AWS lambda
#   dist/client/static/*.js - Uploaded to S3
#
#The other assets in dist are used by either the lambda.zip file, express or both

#Make a clean minified build
rm -rf dist
yarn build -- -p

#Only zip up the deps we need for execution
yarn --prod

#This one gets noisy if you don't pipe it to /dev/null
zip -r dist/lambda.zip ./ > /dev/null

#Put us back in a development state
yarn
