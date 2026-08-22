---
slug: /
sidebar_position: 1
---

# TaskFlow Quickstart

Use the TaskFlow API to create and manage tasks for your applications. In this Quickstart, you'll authenticate with your API key and create your first task using `curl`.

Completing this Quickstart takes about five minutes.

## Prerequisites

Before you begin, make sure you have:

- A TaskFlow account.
- `curl` installed on your computer. To confirm that `curl` is available, run:

  ```bash
  curl --version
- Access to a terminal.

## Get your API key

TaskFlow uses API keys to authenticate API requests.

To get your API key:

1. Sign in to the TaskFlow dashboard.
2. Go to **Settings > API keys**.
3. Select **Create API key**.
4. Enter a name for the key, such as `quickstart`.
5. Select **Create**.
6. Copy the API key and store it securely.

Your API key might look like this:

```text
tf_live_7H2k9Lm4...
```

Keep your API key secure. Don't share it publicly or commit it to a source code repository.

## Create your first task

Open your terminal and run the following command. Replace `YOUR_API_KEY` with your TaskFlow API key.

```bash
curl -X POST https://api.taskflow.example/v1/tasks \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Write project documentation",
    "priority": "high"
  }'
```

The request:

- sends a `POST` request to the `/v1/tasks` endpoint,
- authenticates the request using your API key,
- specifies that the request body contains JSON, and
- creates a task with a title and priority.

## Check the response

If the request succeeds, TaskFlow returns `201 Created` and a response similar to the following:

```json
{
  "id": "task_8f21",
  "title": "Write project documentation",
  "priority": "high",
  "status": "pending"
}
```

The `id` uniquely identifies the new task. TaskFlow sets the initial `status` to `pending`.

You've now created your first task with the TaskFlow API.

## Troubleshoot authentication errors

If TaskFlow returns an authentication error, verify that you replaced `YOUR_API_KEY` with a valid API key and that the `Authorization` header uses the following format:

```text
Authorization: Bearer YOUR_API_KEY
```


## Next steps

Now that you've created your first task, you can:

- Retrieve a task.
- Update a task.
- Delete a task.
- Learn more about TaskFlow authentication.
- Explore the API reference.