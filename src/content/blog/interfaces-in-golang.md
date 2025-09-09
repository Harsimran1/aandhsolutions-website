---
title: "Interfaces in Golang"
description: ""
publishedAt: "2022-10-03"
updatedAt: "2022-10-26"
author:
  name: "A&H Solutions Team"
  email: "team@aandhsolutions.com"
tags:
  - "golang"
  - "interfaces"
  - "programming"
  - "best-practices"
draft: false
---

### In my few years of using Golang, I’ve come across several discussions involving the use of interfaces. The arguments range from:

> Why are we not defining interfaces with the type definition like in typical static languages like C++, Java etc ?> Should this package export interface in combination with the exposed type implementing the interface?> Should this function return an interface rather than the concrete type?Let’s try to address these questions one by one.

#### Why are we not defining interfaces with the type definition like in typical static languages like C++, Java etc ?In languages like C++, Java, one needs to specify that a type implements an interface like in the code given below:

In such languages, defining the interface for the Object enables the compiler to form a dispatch tables for the objects pointing to the functions.

Go doesn’t have a traditional dispatch table, and can rely on the interface values during a method dispatch. It’s literally more of a freestyle dispatcher mechanism that requires some work during interface value assignment — it generates a tiny lookup hash-table for the concrete type it’s pointing to. [Here](https://www.airs.com/blog/archives/277) is a great blog post in case you want further reading.

Even though a bit more expensive, this enables go to have a cleaner type system without the baggage of defining the interface for every type.

For a developer, this means that **the object *implementing* the interface does not need to *explicitly* say it implements it,** as shown in the code below:

Thus any struct can satisfy an interface simply by implementing its method signatures. It offers several advantages like:

- Makes it easier to use mocks instead of real objects in unit tests.
- Helps enforce decoupling between parts of your codebase.

#### Should this package export interface in combination with the exposed type implementing the interface?The short answer is:

> Don’t export any interfaces unless you have to.If the consumer of your package requires some level of “inversion of control”, they can define the interface in their own scope.

However, there might be scenarios where one might want to standardise how a functionality is used. Take a case of golang error interface.

type error interface {
    Error() string
}It is a builtin interface in the standard library that standardises the error behaviour. There have been other discussions in the community about standardising some behaviours, e.g. having a common [logging](https://groups.google.com/g/golang-dev/c/F3l9Iz1JX4g/discussion) interface. Similarly, it might be useful to have a company wide representation of some common behaviour to provide uniformity and code reusability. However, in this scenario, make sure that the interfaces are small, meaning 1–2 methods.

#### Should this package return an interface rather than the concrete type?According to CodeReviewComments, [Go interfaces generally belong in the package that uses values of the interface type, not the package that implements those values.](https://github.com/golang/go/wiki/CodeReviewComments#interfaces)

However [Effective go](https://golang.org/doc/effective_go#generality) docs also complements it by saying that

> if a type exists only to implement an interface and will never have exported methods beyond that interface, there is no need to export the type itself.But the question is how do you identify such scenarios? How do you know that the type will have no additional value in the future? In my experience, the answer is to “wait”. Do not start off by returning interfaces, but wait till your code evolves and you see the need for them. As Rob Pike says:

**“Don’t design with interfaces, discover them.”A good hint for exposing an interface is when you have multiple types in your package implementing the same method signature**. If you look at `http` package in standard library, you’ll see that it internally has multiple implementations of `http.Handler` interface.

In case of confusion, it is helpful to look for some **red flags that can signals that you’re probably using interfaces wrong**. Some are:

#### Your interface is not decoupling an API from change.Imagine an implementation of a third party api client package for sending emails e.g. [SendGrid](https://sendgrid.com/)

Now imagine, is there ever going to be a new implementation of `SendGrid` ?
There is most probably going to be a new implementation of a different email sending service in case SendGrid is replaced with let’s say, `Mailjet` . Hence you can just rewrite the code to return the concrete type.

Also imagine that you want to add a new method to this interface that’s used by lots of people, how do you add a new method to it without breaking their code?

By exposing the struct type itself, you can add new methods to struct itself, without intensive refactoring

#### Your interface has more than 1 or 2 methods.Having too many methods for your interface reduces its usability. Taking example of `fmt.Stringer` interface, it has only one method signature, i.e.

type Stringer interface {     String() string}

and is used in 30 places in the standard library, excluding tests. You can find similar other examples in standard library like `http.Handler` , `io.Reader` etc.

Now imagine an interface with 5–6 methods, it cannot really be used at more than 1 or 2 places, as not all types can manage to implement large number of methods.

> [The bigger the interface, the weaker the abstraction.](https://www.youtube.com/watch?v=PAAkCSZUG1c&amp;t=5m17s)#### Conclusion:The interfaces in Golang can be hard to master, the general recommendation is to follow the rule of thumbs. In case of exceptions to the general rules, wait to see how your code evolves and make adaptations accordingly.
