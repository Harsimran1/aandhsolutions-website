---
title: "Gracefully shutdown Go API server connected to Database."
description: "Learn how to gracefully shutdown Go API servers with database connections. Prevent goroutine leaks and ensure data integrity with proper signal handling and resource cleanup."
publishedAt: "2020-04-13"
updatedAt: "2021-06-03"
author:
  name: "A&H Solutions Team"
  email: "contact@aandhsolutions.com"
tags:
  - "golang"
  - "api"
  - "database"
  - "http"  
draft: false
---

Go offers scalable and robust mechanism for creating API servers. As most of APIs talk to some database, on a scaled infrastructure receiving a lot of requests per second, it is important to shutdown gracefully in order to prevent goroutine leaks. 

This means closing two things in our case:

#### 1. HTTP Server
#### 2. DB connection

Go `net/http` package offers `Shutdown` function to gracefully shutdown your http server. [https://godoc.org/net/http#Server.Shutdown](https://godoc.org/net/http#Server.Shutdown).

Go `database/sql` package offers `Close` function to gracefully close the connection to sql. [https://godoc.org/database/sql#DB.Close](https://godoc.org/database/sql#DB.Close)

#### 1) Create a minimal HTTP API service using a Database

#### 2) Change your server function "srv.ListenAndServe()" to run in a goroutine


```go
go func() {
    panic(srv.ListenAndServe())
}()
```

This is done to ensure that `main` will not exit when `srv.ListenAndServe()` returns on stop signal and waits for database to be closed. Note that we're using `panic` rather than `log.Fatal` to capture errors from `srv.ListenAndServe()` in order to be able to call defer in next steps.

#### 3) Create a channel to receive stop signals

```go
stop := make(chan os.Signal, 1)
signal.Notify(stop, os.Interrupt)
signal.Notify(stop, syscall.SIGTERM)
```

**Bonus point:** If you're using kubernetes, note that it sends `SIGTERM` signal to its pods for shutting down. `Interrupt` is normally sent

#### 4) Listen to the stop signals and handle the shutdown of your HTTP Server

You can use defer to close your db connection.

```go
<-stop
```

**Note:** We are shutting down HTTP server before closing db because server will need database to handle its API requests.
