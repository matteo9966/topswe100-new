#!/bin/bash

ng build --configuration=production --output-path docs --base-href topswe100-new/

if [ -d "assets" ]; then
  echo "Deleting assets folder, before copying new version..."
  rm -r assets
fi

cp -r src/assets assets

if [ -e ./docs/index.html ];
then 
 cp ./docs/index.html ./docs/404.html
fi