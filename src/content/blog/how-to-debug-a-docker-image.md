---
title: "How to debug a docker image."
description: ""
publishedAt: "2021-12-29"
updatedAt: "2022-07-04"
author:
  name: "A&H Solutions Team"
  email: "team@aandhsolutions.com"
tags:
  - "docker"
  - "debugging"
  - "golang"
  - "automation"
draft: false
---

Ever came across a time when a docker image just wouldn't build successfully? Even after putting band-aids and patches all over the place and dropping jargon of list and print commands in between, you're not able to see where exactly it went wrong. I had been through the same situation for some time, before I decided to approach the situation differently. And that's what I am going to share with you now.

I'll start with a simple example where we will debug the Dockerfile together.

Consider the Dockerfile below:

In the above file, we are simply trying to build a docker image for a Golang service. It involves pulling some packages from a private repository. Golang, by default, uses https to pull packages. In line 11, we're setting the git URL to use our [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) so that it's also able to access the private repositories. In the `go build` [command](https://pkg.go.dev/cmd/go#hdr-Compile_packages_and_dependencies) in line 14, Golang will pull the required repositories and build the executable service binary. 

Let's try to build the docker image now. I will use the command: 

&gt; docker build -t test_image

However it returned the error shown below. 

go: github.com/org-name/private-repo/v2@v2.11.0: reading github.com/org-name/private-repo/go.mod at revision v2.11.0: unknown revision v2.11.0   
It seems like the error is coming from an unknown revision, either GOPRIVATE is not being set, or the given git URL is not able to access the private repository.

Let's try to find out what the issue is. For this, I will

- Comment some lines in the docker image and build that image.
- Create the docker container and get into the shell of the running container.
- Check the environment inside the docker container setup.
- If necessary execute each commented commands manually, and see the results.

### **Step 1: Comment some lines in the Dockerfile and build the image.**We commented out some lines of code in the above Dockerfile and tried to build the image again. The docker image **builds successfully now**, but some commands are missing.

### **Step 2: Get into the shell/ bash of the created docker container from the image.**The good news is that now we can run the docker image, go inside the shell ourselves and run the commands manually, while checking the environment where commands are being run. The below command [runs](https://docs.docker.com/engine/reference/commandline/run/) a docker container with the image and opens the shell inside the container.

&gt; docker run -it --rm test_image sh

### **Step 3: Check the environment inside the docker container setup.**Now that we're inside the shell, let's see the status of the container as of now. 

Checking `go env` shows a properly set GOPRIVATE variable.

Let's check that the global git url for our org is properly set as described by the last docker command in line 11.

&gt; git config --global --list

The result looks like this:

url.https://:x-oauth-basic@github.com.insteadof=https://github.com

The global URL seems weird as it seems to be setting an empty `GITHUB_TOKEN` (refer line 11 in the Dockerfile). It seems like the build arg was not properly passed while building the docker image. Passing a proper `GITHUB_TOKEN` to the docker build command should resolve the issue in this case.

&gt; docker build --build-arg GITHUB_TOKEN=dFtrRShVIzBvJHBGQk1wJE9f -t test_image

HURRAH!!!! The docker image is built successfully now. If needed, we could also run the individual commented commands from the shell of the running container to see what happens after each command.
