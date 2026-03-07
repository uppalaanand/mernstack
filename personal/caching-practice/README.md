### Running Redis Server Locally With Docker
    1. Open Docker Desktop
    2. Then Run These Commands in cmd to Create Container & Install redis image
        1.  To install redis image
            docker pull redis
        2. To start redis 
            docker run -d -p 6379:6379 --name practice redis
                    docker run      =>      run a container
                    -d              =>      run in background
                    -p 6379:6379    =>     open Redis port
                    --name practice =>  container name
                    redis           =>      image name
        3. To check redis is Running or not
                docker ps
        4. Test
                docker exec -it practice redis-cli 
                ping
                PONG
        5. To Exit
                exit


### Connect Redis to Your Node.js Backend

Create a Backend Folder
    npm init -y
    npm install express axios

In your backend project install Redis library:
    npm install redis    



    docker stop redis-server
    docker start redis-server
    docker rm redis-server      =>  delete container
    docker ps
    