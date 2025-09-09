---
title: "How to optimise docker images for lesser build size and time."
description: ""
publishedAt: "2020-10-16"
updatedAt: "2022-03-29"
author:
  name: "A&H Solutions Team"
  email: "team@aandhsolutions.com"
tags:
  - "docker"
  - "containers"
  - "devops"
  - "automation"
  - "golang"
draft: false
---

### Docker, as we all know, is the most popular tool for creating containerised applications these days. The more I use it, the more I fall in love with the concept. As easy as it is for even the beginners to write a Dockerfile, some small things can help you to optimise your images to a large extent. Following are few very useful tips which I have found helpful personally.

#### **Understand Docker Layering.**The key point to keep in mind is that newer versions of Docker creates layers on `RUN`, `ADD` and `COPY` commands. So try to minimise the layers by keeping these three commands to minimum. Look at the below code samples and you’ll figure out which is more optimum.

![](https://cdn-images-1.medium.com/max/1200/1*0pnRn_E-js3KtefQ9XRV_A.png)Just putting all the `RUN` commands into a single command in this scenario, we are reducing a layer and hence build size.

#### **Understand Docker Caching.**The thing to keep in mind here is that docker caching happens sequentially from top to bottom. If there is a change in one of the commands in the sequence, the cache after that command is discarded and every command that follows will be executed again.

I was working the other day with a Dockerfile which took annoyingly long to build. I looked at it and realised that just shuffling the docker commands could save me my sanity.

Below are the two versions:

![](https://cdn-images-1.medium.com/max/1200/1*hYmxJVg7VXYF0lvDwSN4gw.png)Here, the issue is the placement of `COPY` command. Since the code in our working directory (docker context) is the one which will most likely be changed, we need to put it somewhere at the bottom. After moving it below the `RUN` command, the `RUN` command will not run every time but will be taken from cache, hence reducing the build time to a large extent.

#### **Use Multistage Builds**You can use multistage builds to keep your final image as lean as possible. The most common use case is doing all necessary steps to build your binary in an intermediate stage and copying only your binary in the final stage. It will also help you avoid unwanted security vulnerabilities.

![](https://cdn-images-1.medium.com/max/1200/1*30I6G3sttfdTpUCIFwOAlw.png)You can specify the target stage in your docker command if you don’t want to build subsequent docker stages using `docker build --target builder .` Here `builder` is the name of our first stage. Specifying `target` is specifically useful while running a test stage. By doing so, you will not unnecessarily build your code if tests doesn’t pass for your code.

#### Use Smaller Base ImagesLast, but the most important, keep your base images small. This can have a huge impact on your build size, time and of course image security.

![](https://cdn-images-1.medium.com/max/1200/1*3qCkKTifzkXO1c1p-Jwhag.png)The size difference difference between the 2 images created is around 30MB since `scratch` is smaller than `golang:1.12` image.

I hope the above points help you as much as they have helped me. Keep building !!!!
