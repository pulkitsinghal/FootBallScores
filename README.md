# FORKED FROM rahulrsingh09/FootBallScores

## FootballWorld

Want to view Football Time table when is your team playing next, and which stars assocaited with your team, look no further than this app.

Made with Angular and Materalize css and a special thanks to api.football-data.org for providing these API's.

Let the season kick off in style . 2017-18

For any Suggestions and Comments Please post here - https://rahulrsingh09.github.io/AngularConcepts/comment 

## Remote Dev Machine

1. [Setup dropbox on remote machine](https://training.shoppinpal.com/setup-box-on-azure/setup-dropbox-on-azure.html)
1. SSH into your remote machine: `ssh user@xxx.xxx.xxx.xxx`
1. Run `screen` to avoid losing your [long running session](https://training.shoppinpal.com/long-running-sessions.html)
1. Setup project root directory as an environment variable:
    * For example, if your cloned project resides at: `~/dev/`

        ```
        export DEV_DIR=`echo ~/dev` && echo DEV_DIR=$DEV_DIR
        
        export PROJECT_NAME=FootBallScores && echo PROJECT_NAME=$PROJECT_NAME

        cd $DEV_DIR && git clone https://github.com/rahulrsingh09/FootBallScores.git $PROJECT_NAME

        export PROJECT_HOME=`echo $DEV_DIR/$PROJECT_NAME` && echo PROJECT_HOME=$PROJECT_HOME && cd $PROJECT_HOME && echo pwd=`pwd`
        ```
1. Before making our project sync-capable, let us add rules to prevent unnecessary stuff from syncing:

    ```
    # change this according to your needs before running
    export PROJECT_SYNC_DIR_NAME=$PROJECT_NAME-sync-1 && echo PROJECT_SYNC_DIR_NAME=$PROJECT_SYNC_DIR_NAME

    # run this as-is
    mkdir -p ~/Dropbox/remote-dev/ && \
    cd ~/Dropbox && dropbox exclude add remote-dev/$PROJECT_SYNC_DIR_NAME/.git && \
    cd ~/Dropbox && dropbox exclude add remote-dev/$PROJECT_SYNC_DIR_NAME/node_modules
    ```
1. To check if they are now excluded, use `dropbox exclude list | grep remote-dev`
    * if an incorrect path was excluded, you can fix it with: `dropbox exclude remove /the/path`
1. Wire up your project root to be synced via Dropbox:
    * go to your PROJECT_HOME: `cd $PROJECT_HOME`
    * then run the following command:

      ```
      # make sure this is setup
      echo PROJECT_SYNC_DIR_NAME=$PROJECT_SYNC_DIR_NAME

      # make sure this is setup
      echo PROJECT_HOME=$PROJECT_HOME

      # run as-is
      cd $PROJECT_HOME && \
        ln -s `pwd` ~/Dropbox/remote-dev/$PROJECT_SYNC_DIR_NAME
      ```
    * make sure it worked: `ls -alrt ~/Dropbox/remote-dev/`
1. When you check the status on your remote machine via your ssh terminal: `dropbox status` ... you will see that the sync has begun

    ```
    Syncing (xxx files remaining)
    Indexing xxx files...
    ```
1. Setup dropbox on local machine
1. Dropbox's autosync will create a directory on your local machine, you can jump into it
    * setup `$PROJECT_SYNC_DIR_NAME` on your local terminal too:

      ```
      export PROJECT_NAME=FootBallScores && echo PROJECT_NAME=$PROJECT_NAME
      export PROJECT_SYNC_DIR_NAME=$PROJECT_NAME-sync-1 && echo PROJECT_SYNC_DIR_NAME=$PROJECT_SYNC_DIR_NAME
      ```
    * make sure to run this command on your local terminal (NOT the ssh remote terminal):

      ```
      cd ~/Dropbox/remote-dev/$PROJECT_SYNC_DIR_NAME && echo pwd=`pwd`
      ```
    * open your favorite IDE and start working
      * for example, visual studio can be opened with: `code ~/Dropbox/remote-dev/$PROJECT_SYNC_DIR_NAME`
1. On your local machine use `selective sync` via the dropbox UI to prevent the transfer of bulky dependencies back to your local filesystem. Go ahead and exclude `node_modules` and `bower_components` etc from being synced back to your machine. This is all done via UI so it should be very easy.
    * `dropbox > preferences > account > selective sync > change settings...`

## Deploy

1. Add `firebase.config.ts` in `src/app/shared` folder. The content doesn't have to be exact but it will look something like:

    ```
    export const firebaseConfig = {
        apiKey: "<value>",
        authDomain: "<value>",
        databaseURL: "<value>",
        storageBucket: "<value>",
        messagingSenderId: "<value>"
        };
    export const firebaseConfigDev = {
        apiKey: "<value>",
        authDomain: "<value>",
        databaseURL: "<value>",
        projectId: "<value>",
        storageBucket: "<value>",
        messagingSenderId: "<value>"
    };
    ```
1. Run the following commands:

    ```
    docker-compose run nodejs-builder npm install
    docker-compose run nodejs-builder npm shrinkwrap
    docker-compose run nodejs-builder npm run build
    #docker-compose run nodejs-builder npm run start
    docker-compose up web
    ```
1. Browse to URL: `http://myRemoteMachine:80` or `http://localhost:80` depending on your setup.
