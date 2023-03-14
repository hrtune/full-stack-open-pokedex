# 11.1 Warming up

My language: Python

## Tools for Python code

### Linting

Pylint might be the most widely used linting tool for Python. Say we want to make a backend application by means of Django framework. Then, the pylint-django would be useful for the specific environment.

### Testing

The "unittest" is a part of the Python standard library. So it will be handy for small tests. For a Django application, we would take advantage of its test client. To test rendered web pages, we might be using Selenium which is in-browser framework.

### Building

I think we don't need a such building phase for deploying Django application.

## Alternatives to the CI services

* Gitlab could be the alternative to Github.
* Gradle might be the alternative to Jenkins.

## A self-hosted or a cloud-based environment

It depends on what we want to develop. If we want to manage a small and simple project, then we just need a cloud-based environment like Github Actions. Because we don't need the cost for maintaining server hosting the project and it's a lot easier to configure. If we need the scalability for our project in terms of CI/CD then we must choose a self-hosted one. In our case, we would take advantage of the scalability of Django framework. So we may try Jenkins even if we would be struggling to configure the ecosystem.
