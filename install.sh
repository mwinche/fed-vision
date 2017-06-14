pushd .

cd widget-1
rm -rf node_modules
yarn
yalc publish

popd

pushd .

cd widget-2
rm -rf node_modules
yarn
yalc publish

popd

pushd .

cd widget-3
rm -rf node_modules
yarn
yalc publish

popd

pushd .

cd state-channel
rm -rf node_modules
yarn
yalc publish

popd

pushd .

cd app-1
rm -rf node_modules
yalc add widget-1 widget-2 widget-3
yarn

popd

pushd .

cd app-2
rm -rf node_modules
yalc add widget-1 widget-2 widget-3
yarn

popd
