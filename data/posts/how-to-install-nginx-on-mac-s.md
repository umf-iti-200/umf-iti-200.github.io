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

# Configuring

Nginx uses configuration files to run. For this installation, nginx will load all files in `/opt/homebrew/etc/nginx/servers/`.

# Running

```shell
brew services start nginx
```

# Stopping

Type the following command to stop nginx on your computer

```shell
brew services stop nginx
```
