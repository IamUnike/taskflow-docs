---
sidebar_position: 1
---

# TaskFlow API concepts

The TaskFlow API lets applications create and manage tasks programmatically.

This page explains the core concepts you should understand before building a TaskFlow integration.

## Tasks

A **task** represents a unit of work in TaskFlow.

Each task contains information such as:

- a unique task ID
- a title
- a description
- a status

For example:

```json
{
  "id": "task_12345",
  "title": "Prepare project report",
  "description": "Prepare the monthly project report",
  "status": "pending"
}
```

The task ID uniquely identifies the task and is used when retrieving, updating, or deleting it.

For example:

```text
/v1/tasks/task_12345
```

## Task status

The `status` field represents the current state of a task.

TaskFlow supports the following statuses:

| Status | Description |
| --- | --- |
| `pending` | The task has been created but work has not started. |
| `in_progress` | Work on the task is currently underway. |
| `completed` | The task has been completed. |

Applications can update a task's status as work progresses.

For example:

```text
pending → in_progress → completed
```

## API requests

TaskFlow uses a REST API.

Applications interact with tasks by sending HTTP requests to TaskFlow endpoints.

The primary operations are:

| Method | Operation |
| --- | --- |
| `POST` | Create a task |
| `GET` | Retrieve a task |
| `PATCH` | Update a task |
| `DELETE` | Delete a task |

For example:

```http
GET /v1/tasks/task_12345
```

requests information about the task with the ID `task_12345`.

## Base URL

All TaskFlow API requests use the following base URL:

```text
https://api.taskflow.example/v1
```

An endpoint is added to the base URL depending on the resource you want to access.

For example:

```text
Base URL
https://api.taskflow.example/v1

Tasks endpoint
/tasks

Complete URL
https://api.taskflow.example/v1/tasks
```

## Authentication

TaskFlow uses API keys to identify and authenticate applications.

The API key is sent as a Bearer token in the `Authorization` header:

```http
Authorization: Bearer YOUR_API_KEY
```

TaskFlow verifies the key before processing the request.

For instructions on creating and using API keys, see [Authentication](../guides/authentication.md).

## Requests and responses

When you send a request, TaskFlow processes it and returns an HTTP response.

For operations that send task data, TaskFlow uses JSON.

For example, an application might send:

```json
{
  "title": "Prepare project report",
  "status": "pending"
}
```

TaskFlow can return:

```json
{
  "id": "task_12345",
  "title": "Prepare project report",
  "status": "pending"
}
```

The HTTP status code indicates whether the request succeeded or failed.

For example:

```text
201 Created
```

indicates that TaskFlow successfully created a resource.

## API versions

The version number is included in the API URL:

```text
/v1/
```

For example:

```text
https://api.taskflow.example/v1/tasks
```

Versioning allows TaskFlow to evolve its API while providing a predictable interface for existing integrations.

## Where to go next

To perform common task operations, see [Create and manage tasks](../guides/manage-tasks.md).

For complete endpoint specifications, see the **Tasks API reference**.