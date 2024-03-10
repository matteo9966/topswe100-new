#!/bin/bash

ng build --output-path docs --base-href /topswe100-new/


if [ -e ./docs/index.html ];
then 
 cp ./docs/index.html ./docs/404.html
fi