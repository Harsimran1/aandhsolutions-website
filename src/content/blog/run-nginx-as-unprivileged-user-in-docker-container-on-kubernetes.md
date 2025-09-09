---
title: "Run nginx as unprivileged user in Docker container on Kubernetes"
description: ""
publishedAt: "2021-06-03"
updatedAt: "2022-03-29"
author:
  name: "A&H Solutions Team"
  email: "team@aandhsolutions.com"
tags:
  - "nginx"
  - "kubernetes"
  - "docker"
  - "security"  
draft: false
---

### While on production, it is important to run your containers as non root users to avoid any security vulnerabilities.

### The rationaleFrom security perspective, running a process on container as root user is as bad as running a process as root on host machine itself. If a user manages to break out of an application running as root in a container, he may be able to gain access to the host with the same root user. More information about this can be found at this interesting [blog post](https://medium.com/@mccode/processes-in-containers-should-not-run-as-root-2feae3f0df3b).

### PrerequisitesWe will be using [helm](https://helm.sh/) for deploying our nginx application on kubernetes.

### Create helm chartsThe first thing we need to create is a deployment.yaml. The most basic deployment.yaml as given on [official kubernetes doc](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#creating-a-deployment)s looks like this. Here we have used the [nginx unprivileged docker image](https://hub.docker.com/r/nginxinc/nginx-unprivileged) instead of the nginx image. We can trust this image because it is also maintained and published by nginxinc.

If you’re not using custom config files for nginx, that should be all, in order to use this image. But, since in most cases, we need to use custom configs to be mounted on our pods, the deployment.yaml would look like this.

In this case, we need to make sure our configs are using the right defaults as mentioned in Readme of the [unprivileged docker image](https://github.com/nginxinc/docker-nginx-unprivileged) we’re using. That basically means changing default values of some [directives](https://github.com/nginxinc/docker-nginx-unprivileged/blob/994b117bef62b0a24e925169a219013f09793704/stable/alpine/Dockerfile#L104) . Our basic configmap will look like below. The comments in example mentions the changed values.

Notice that we’re not using any [user](http://nginx.org/en/docs/ngx_core_module.html#user) directive in our config.

Now we will create a [service](https://kubernetes.io/docs/concepts/services-networking/service/) to direct traffic to our pods created from deployment.yaml. Create a basic service as mentioned in [kubernetes documentation](https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service).

The service will now target port 8080 on the pods labelled nginx.

You can try and test out the deployment using

`helm install nginx https://github.com/Harsimran1/nginx-k8s-unprivileged/archive/v0.1.0.tar.gz`
