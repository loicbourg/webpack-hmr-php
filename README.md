# webpack-hmr-php
hot module reload for php

#installation
``` bash
npm install
```

#Usage
on an other terminal run a local php server:
``` bash
php -S 0.0.0.0:7000 -t web
```

then run 
``` bash
npm start
```

now if you go on http://localhost:8080 you see the word coucou in orange

if you update the color in main.css, the change will be done without having to refresh the page.
