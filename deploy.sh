#!/bin/bash

print_line() { echo "==============================="; }

version=$(jq '.version' ../personal-website/package.json | tr -d '"')

# execute deployment

print_line
echo "Building version $version..."
print_line

cd ../personal-website
npm run build
cd ../tmonfre.github.io

rm -rf build
mkdir build

cp ../personal-website/build/* ./build

print_line
echo "Deploying to GitHub..."
print_line

git add .
git commit -m "deploy: version $version"
git push