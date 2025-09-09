---
title: "My takeaways from Kent Beck's Test-Driven Development - Part I"
description: ""
publishedAt: "2021-06-13"
updatedAt: "2022-03-29"
author:
  name: "A&H Solutions Team"
  email: "team@aandhsolutions.com"
tags:
  - "tdd"
  - "testing"
  - "programming"
  - "best-practices"
draft: false
---

I have been reading Kent Beck's Book: [TEST-DRIVEN DEVELOPMENT By Example](https://amzn.to/3DMm1tV) for some time and am writing my takeaways from it.

Before saying anything, I would like to answer the question Why?  Why TDD at first place? It's a very BASIC question, but it's a general observation that people who often ask WHY tends to stay in the right direction rather than going down the rabbit hole without a sense of purpose at all. Hence, whatever your job may be, whether it's business, programming, following the rabbit to the hole or what not, never be afraid to ask WHY. Now you're wondering why I am talking about the rabbits when I came here to talk about Test Driven Development. Yes your're asking the right question now. WHY.

So why? 

- **It makes your code predictable**. Mr. Beck starts with an example where an external client comes to the engineering team who have been handling money in Dollars, if their code could handle multi-currency. And no one could confidently tell the client YES Or NO. Had they had tests for the code, they would know the answer. **
- It makes extending the code easier**. When you're extending or refactoring a code, if you don't have tests, the confidence level that you've not broken something is quite low. The idea is that even if you don't have tests when you try to extend the code, you write the tests first. This will also improve your test coverage and increase your confidence level. Without tests you have to reason and decide whether you should refactor code in a certain way, with tests you can simply ask the computer.
- **It breaks down the problem into small manageable chunks**. While the above two points are valid for any kind of test strategy, the main advantage of test driven development is that it helps break down your problem into small manageable chunks. *Start small or not at all*. It enables you to solve complicated problems even if you're an average programmer like me. It gives you control over the size of the steps.
- **It helps build confidence towards your code and tests.**  Every testing strategy comes with a baggage about how reliable is the test. Is the test passing even though the code is incorrect because there is a bug in the test? Well it's not very practical to write test for the test. Having a failing test first and passing it after writing the code gives you confidence that your code is the reason the test has passed. It is not full proof but it is better than writing tests after the code. 
- **It helps in modularization of code.**  When you're doing TDD, you are looking at how an external package/ party is going to use your code as a first step. You're also thinking of making your code testable early on. This results in better abstraction layers and module formations. 

Now that we're clear with the big WHY, Mr. Kent goes on to explain HOW in most part of the book with examples. Below are the key steps of TDD:

Test Driven Development CycleBelow are some things to keep in mind while doing TDD.

1. Formulate a TODO list of some basic requirements that your code should fulfill. Pick an item in the list and translate the requirement in the form of a failing test. Remember, don't write the code first, write the test first.

2. The key idea is to write small incremental tests. Don't write the most complicated test first. Start with the smallest manageable chunk and build on top of that. If a thought strikes about another new test while you're in the middle of a TDD cycle, write it as an item in the TODO list and continue writing and implementing the current cycle first.

3. One may come across some code ugliness that may come in forms of code duplication, unprotected methods etc. , specially during the step 3 of the TDD cycle. However don't be afraid of it. You're only supposed to show your code to your spouse, only if they are a bit tolerant like mine, until all the steps of TDD cycle are completed.

4. It can feel a bit restrictive to have only small incremental steps. Hence, to be practical during TDD, if you want to make minor code change that you know you'll eventually need to do anyways, and it will only cause a brief interruption to your flow, it makes sense to do the change. If a teeny tiny step feels restrictive, take bigger steps. If you feel unsure in big steps, take smaller steps.

5. There can also be exceptions where you write the code first before writing test when the risk of adding code is low and there is already a failing test that needs to be passed first. For example, one can argue to skip writing test for a log statement, because the 

- The risk of breaking something is low.
- The log actually shows what's happening in the code.

So far, the above mentioned points covers my understanding in terms of summary with the first half of the book. I'll write the summary of second half in the next post.
