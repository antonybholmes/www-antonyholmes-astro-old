# format code
yarn update-version
yarn format

yarn image-optimize

# commit
git add -A .
git commit -m "Bug fixes and updates."
git push -u origin dev
