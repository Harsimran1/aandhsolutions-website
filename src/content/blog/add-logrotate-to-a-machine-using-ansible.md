---
title: "Add log rotation for a service running in linux using Ansible"
description: ""
publishedAt: "2021-11-13"
updatedAt: "2022-07-04"
author:
  name: "A&H Solutions Team"
  email: "team@aandhsolutions.com"
tags:
  - "linux"
  - "ansible"
  - "logrotate"
  - "automation"
draft: false
---

**Ansible** is an IT automation tool that can automate cloud provisioning, configuration management, application deployment and other automation needs. In order to have a brief overview of how Ansible works and how is it different from other automation tools, one can watch [this](https://www.youtube.com/watch?v=1id6ERvfozo&amp;ab_channel=TechWorldwithNana) video. 

**Log rotation** is an automated process used in [system administration](https://en.wikipedia.org/wiki/System_administration) in which [log files](https://en.wikipedia.org/wiki/Computer_data_logging) are compressed, moved ([archived](https://en.wikipedia.org/wiki/Archive)), renamed or deleted once they are too old or too big (there can be other metrics that can apply here). New incoming log data is directed into a new fresh file (at the same location).**
In Linux, log rotation is typically performed using the [logrotate](https://linux.die.net/man/8/logrotate) command. logrotate** reads everything about the log files it should be handling from the series of configuration files specified on the command line. Each configuration file can set global options (local definitions override global ones, and later definitions override earlier ones) and specify logfiles to rotate. 

In the below example, we create a logfile, which needs to be rotated and create the logrotate configuration for that file in the yaml file for configuration.
