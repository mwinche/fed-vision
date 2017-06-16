pushd .

cd widget-1
rm -rf node_modules
yarn
yarn build
yalc publish

popd

pushd .

cd widget-2
rm -rf node_modules
yarn
yarn build
yalc publish

popd

pushd .

cd widget-3
rm -rf node_modules
yarn
yarn build
yalc publish

popd

pushd .

cd state-channels
rm -rf node_modules
yarn
yarn build
yalc publish

popd

pushd .

cd app-1
rm -rf node_modules
yalc add widget-1 widget-2 widget-3 state-channels
yarn

popd
