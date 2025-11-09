---
title: How to Install Nginx on MacOS
authorName: Thiago Ferreira
authorId: thiago-ferreira
publishedAt: April 8, 2024 9:12 AM
category: Tutorial
tags:
  - nginx
  - how-to
---

# Introduction

Nginx (pronounced "engine x") is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache. However, a large fraction of web servers use Nginx, often as a load balancer.

# Installing

To install it on MacOS, we are going to use [homebrew](https://brew.sh). If you don't have it installed on your computer, please [follow this tutorial](https://mac.install.guide/homebrew/3).

If you have homebrew installed, open the terminal and type:

```shell
brew install nginx
```

The default port will be set to `8080`. Also, you don't need to type `sudo` to run it.

Just press "allow" if the following screen pops up.

![](1.png =300x300)

# Running

```shell
brew services start nginx
```

# Stopping

Type the following command to stop nginx on your computer

```shell
brew services stop nginx
```

# Configuring

Nginx uses configuration files to run. For this installation, nginx will load all files in `/opt/homebrew/etc/nginx/servers/`.

If you would like to use Nginx as a load balancer, create a new file at `/opt/homebrew/etc/nginx/servers/`. For instance, create a `mysite.com` file as the image below

![](2.png =300x300)

The content should be:

```nginx
upstream my_http_servers {
    server localhost:3000;      # server1 listens to port 3000
    server localhost:3001;      # server2 listens to port 3001
    server localhost:3002;      # server3 listens to port 3002
}

server {
    listen 80;
    server_name mysite.com www.mysite.com;

    location / {
        proxy_pass         http://my_http_servers;
    }
}
```

Save the file, stop and start again Nginx.

# Algorithm

## Round Robin

```nginx
upstream my_http_servers {
    server 192.168.64.3:3000;      # server1 listens to port 3000
    server 192.168.64.3:3001;      # server2 listens to port 3001
    server 192.168.64.3:3002;      # server3 listens to port 3002
}
```

## Least Connection

```nginx
upstream my_http_servers {
    least_conn;
    server 192.168.64.3:3000;      # server1 listens to port 3000
    server 192.168.64.3:3001;      # server2 listens to port 3001
    server 192.168.64.3:3002;      # server3 listens to port 3002
}
```

## IP Hash

```nginx
upstream my_http_servers {
    ip_hash;
    server 192.168.64.3:3000;      # server1 listens to port 3000
    server 192.168.64.3:3001;      # server2 listens to port 3001
    server 192.168.64.3:3002;      # server3 listens to port 3002
}
```




