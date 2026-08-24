---
sidebar_position: 1
---

# Errors and troubleshooting

Use this guide to identify and resolve common TaskFlow API errors.

## Error response format

When a request fails, TaskFlow returns an HTTP status code and a JSON error response.

Example:

```json
{
  "error": "invalid_api_key",
  "message": "The API key is invalid. Check your API key and try again."
}
```

The `error` field identifies the error type. The `message` field explains what went wrong and what you can do to resolve it.

## `400 Bad Request`

TaskFlow returns `400 Bad Request` when the request contains invalid or missing data.

Example:

```json
{
  "error": "missing_title",
  "message": "Add a title to create a task."
}
```

### What to check

- Confirm that required fields are included.
- Verify that the request body contains valid JSON.
- Check that field values use supported formats.

For example, creating a task requires a `title`:

```json
{
  "title": "Prepare project report"
}
```

## `401 Unauthorized`

TaskFlow returns `401 Unauthorized` when the API key is missing, invalid, or revoked.

Example:

```json
{
  "error": "invalid_api_key",
  "message": "The API key is invalid. Check your API key and try again."
}
```

### What to check

Confirm that the request includes the `Authorization` header:

```http
Authorization: Bearer YOUR_API_KEY
```

Also verify that:

- You replaced `YOUR_API_KEY` with a valid TaskFlow API key.
- The key has not been revoked.
- The header uses the `Bearer` authentication scheme.

For more information, see [Authentication](../guides/authentication.md).

## `403 Forbidden`

TaskFlow returns `403 Forbidden` when the API key is valid but does not have permission to perform the requested operation.

Example:

```json
{
  "error": "insufficient_permissions",
  "message": "This API key does not have permission to perform this operation."
}
```

### What to do

Check the permissions assigned to the API key.

If necessary, create a new API key with the required permissions.

## `404 Not Found`

TaskFlow returns `404 Not Found` when the requested resource does not exist.

Example:

```json
{
  "error": "task_not_found",
  "message": "No task was found with the specified task ID."
}
```

### What to check

Verify that:

- The task ID is correct.
- The task has not been deleted.
- The request URL contains the correct endpoint.

For example:

```text
https://api.taskflow.example/v1/tasks/task_12345
```

## `500 Internal Server Error`

TaskFlow returns `500 Internal Server Error` when an unexpected problem occurs while processing the request.

Example:

```json
{
  "error": "internal_error",
  "message": "TaskFlow could not process the request. Try again later."
}
```

### What to do

Try the request again after a short delay.

If the problem continues, record the request details and contact TaskFlow support.

Do not include API keys or other secrets when sharing request information.

## Common authentication problems

### The API key is missing

If you receive an authentication error, make sure the request includes:

```http
Authorization: Bearer YOUR_API_KEY
```

### The API key was revoked

Create a new API key from the TaskFlow dashboard and update your application to use the new key.

### The wrong environment key is being used

Make sure you use the appropriate API key for the environment.

Use test keys for development and production keys for production applications.

## Check your request before retrying

Before retrying a failed request:

1. Check the HTTP status code.
2. Read the error message.
3. Verify the endpoint and HTTP method.
4. Check the request headers.
5. Validate the request body.
6. Correct the problem.
7. Send the request again.

For endpoint requirements and supported fields, see the [Tasks API reference](../api-reference/tasks.md).