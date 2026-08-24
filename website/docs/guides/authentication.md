---
sidebar_position: 1
---

# Authentication

TaskFlow uses API keys to authenticate requests to the TaskFlow API. Include your API key in the `Authorization` header of every request.

## Create an API key

To create an API key:

1. Sign in to your TaskFlow account.
2. Open the **TaskFlow Dashboard**.
3. Go to **Settings > API Keys**.
4. Select **Create API key**.
5. Enter a name for the key.
6. Select the permissions the key requires.
7. Select **Create**.
8. Copy and securely store the API key.

TaskFlow displays the complete API key only when you create it. If you lose the key, create a new one and revoke the old key.

## Test and production API keys

TaskFlow provides separate API keys for test and production environments.

Use a test key while developing and testing your integration. Use a production key only when your application is ready for production.

Do not use production credentials during development.

## Authenticate a request

Send your API key as a Bearer token in the `Authorization` header:

```http
Authorization: Bearer YOUR_API_KEY
```

For example:

```bash
curl https://api.taskflow.example/v1/tasks \
  -H "Authorization: Bearer YOUR_API_KEY"
```

Replace `YOUR_API_KEY` with your TaskFlow API key.

TaskFlow verifies the key and its permissions before processing the request.

## Store your API key securely

Treat API keys as secrets. Anyone with access to a valid key may be able to access TaskFlow resources using the permissions assigned to that key.

Do not:

- Commit API keys to Git or GitHub.
- Include API keys in client-side code.
- Share API keys in documentation, screenshots, or messages.
- Hard-code API keys in your application source code.

Store API keys using an environment variable or a secrets-management system.

For example:

```bash
export TASKFLOW_API_KEY="YOUR_API_KEY"
```

You can then reference the environment variable when making a request:

```bash
curl https://api.taskflow.example/v1/tasks \
  -H "Authorization: Bearer $TASKFLOW_API_KEY"
```

## Revoke an API key

Revoke a key when you no longer need it or if you believe it has been exposed.

To revoke an API key:

1. Open the **TaskFlow Dashboard**.
2. Go to **Settings > API Keys**.
3. Find the key you want to revoke.
4. Select **Revoke**.
5. Confirm the revocation.

After you revoke a key, requests that use it can no longer authenticate.

## Authentication errors

TaskFlow may return the following HTTP status codes when authentication or authorization fails:

| Status | Meaning | What to do |
| --- | --- | --- |
| `401 Unauthorized` | The API key is missing, invalid, or revoked. | Verify that you provided a valid API key in the `Authorization` header. |
| `403 Forbidden` | The API key is valid but does not have permission to perform the requested operation. | Check the permissions assigned to the API key. |

For additional error information, see [Errors and troubleshooting](../troubleshooting/errors.md).