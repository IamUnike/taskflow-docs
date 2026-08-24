---
sidebar_position: 1
---

# Tasks API reference

The Tasks API lets you create, retrieve, update, and delete tasks in TaskFlow.

## Base URL

```text
https://api.taskflow.example/v1
```

All requests require authentication using a TaskFlow API key.

```http
Authorization: Bearer YOUR_API_KEY
```

For authentication instructions, see [Authentication](../guides/authentication.md).

## Task object

A TaskFlow task contains the following fields:

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Unique identifier for the task. |
| `title` | string | Name of the task. |
| `description` | string | Additional information about the task. |
| `status` | string | Current task status. Possible values are `pending`, `in_progress`, and `completed`. |

Example:

```json
{
  "id": "task_12345",
  "title": "Prepare project report",
  "description": "Prepare the monthly project report",
  "status": "pending"
}
```

---

## Create a task

Creates a new task.

```http
POST /tasks
```

### Request headers

| Header | Required | Description |
| --- | --- | --- |
| `Authorization` | Yes | TaskFlow API key using the `Bearer` authentication scheme. |
| `Content-Type` | Yes | Must be `application/json`. |

### Request body

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | string | Yes | Name of the task. |
| `description` | string | No | Additional information about the task. |
| `status` | string | No | Initial task status. Defaults to `pending`. |

Example request:

```bash
curl -X POST https://api.taskflow.example/v1/tasks \
  -H "Authorization: Bearer $TASKFLOW_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Prepare project report",
    "description": "Prepare the monthly project report",
    "status": "pending"
  }'
```

### Response

A successful request returns `201 Created` and the created task.

```json
{
  "id": "task_12345",
  "title": "Prepare project report",
  "description": "Prepare the monthly project report",
  "status": "pending"
}
```

---

## Retrieve a task

Retrieves a task by its ID.

```http
GET /tasks/{task_id}
```

### Path parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `task_id` | string | Yes | Unique identifier of the task to retrieve. |

Example request:

```bash
curl https://api.taskflow.example/v1/tasks/task_12345 \
  -H "Authorization: Bearer $TASKFLOW_API_KEY"
```

### Response

A successful request returns `200 OK`.

```json
{
  "id": "task_12345",
  "title": "Prepare project report",
  "description": "Prepare the monthly project report",
  "status": "pending"
}
```

---

## Update a task

Updates one or more fields of an existing task.

```http
PATCH /tasks/{task_id}
```

### Path parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `task_id` | string | Yes | Unique identifier of the task to update. |

### Request body

Include only the fields you want to update.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | string | No | New task title. |
| `description` | string | No | New task description. |
| `status` | string | No | New task status. Possible values are `pending`, `in_progress`, and `completed`. |

Example request:

```bash
curl -X PATCH https://api.taskflow.example/v1/tasks/task_12345 \
  -H "Authorization: Bearer $TASKFLOW_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed"
  }'
```

### Response

A successful request returns `200 OK` and the updated task.

```json
{
  "id": "task_12345",
  "title": "Prepare project report",
  "description": "Prepare the monthly project report",
  "status": "completed"
}
```

---

## Delete a task

Deletes an existing task.

```http
DELETE /tasks/{task_id}
```

### Path parameters

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `task_id` | string | Yes | Unique identifier of the task to delete. |

Example request:

```bash
curl -X DELETE https://api.taskflow.example/v1/tasks/task_12345 \
  -H "Authorization: Bearer $TASKFLOW_API_KEY"
```

### Response

A successful request returns:

```text
204 No Content
```

The response does not contain a body.

---

## Status codes

The Tasks API can return the following status codes:

| Status | Meaning |
| --- | --- |
| `200 OK` | The request succeeded. |
| `201 Created` | The task was created successfully. |
| `204 No Content` | The task was deleted successfully. |
| `400 Bad Request` | The request contains invalid data. |
| `401 Unauthorized` | The API key is missing, invalid, or revoked. |
| `403 Forbidden` | The API key does not have permission to perform the operation. |
| `404 Not Found` | The requested task does not exist. |
| `500 Internal Server Error` | TaskFlow encountered an unexpected error. |

For help resolving API errors, see [Errors and troubleshooting](../troubleshooting/errors.md).