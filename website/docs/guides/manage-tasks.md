---
sidebar_position: 2
---

# Create and manage tasks

Use the TaskFlow API to create, retrieve, update, and delete tasks.

Before you begin, make sure you have a TaskFlow API key. See [Authentication](./authentication.md).

## Create a task

Send a `POST` request to `/v1/tasks` to create a task.

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

A successful request returns the created task:

```json
{
  "id": "task_12345",
  "title": "Prepare project report",
  "description": "Prepare the monthly project report",
  "status": "pending"
}
```

Save the `id`. You can use it to retrieve, update, or delete the task.

## Retrieve a task

Send a `GET` request with the task ID:

```bash
curl https://api.taskflow.example/v1/tasks/task_12345 \
  -H "Authorization: Bearer $TASKFLOW_API_KEY"
```

TaskFlow returns the requested task:

```json
{
  "id": "task_12345",
  "title": "Prepare project report",
  "description": "Prepare the monthly project report",
  "status": "pending"
}
```

## Update a task

Send a `PATCH` request to update one or more task fields.

For example, change the task status to `completed`:

```bash
curl -X PATCH https://api.taskflow.example/v1/tasks/task_12345 \
  -H "Authorization: Bearer $TASKFLOW_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed"
  }'
```

TaskFlow returns the updated task:

```json
{
  "id": "task_12345",
  "title": "Prepare project report",
  "description": "Prepare the monthly project report",
  "status": "completed"
}
```

## Delete a task

Send a `DELETE` request with the task ID:

```bash
curl -X DELETE https://api.taskflow.example/v1/tasks/task_12345 \
  -H "Authorization: Bearer $TASKFLOW_API_KEY"
```

After the request succeeds, the task is no longer available.

## Next steps

For complete endpoint parameters, request fields, responses, and status codes, see the **Tasks API reference**.