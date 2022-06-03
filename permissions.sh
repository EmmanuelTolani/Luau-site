#!/bin/bash
sudo chown -R www-data .
sudo chgrp -R dev-luau .
sudo chmod -R 570 .
sudo chmod g+s .

sudo chmod -R 777 .next/
sudo chmod -R 777 node_modules/