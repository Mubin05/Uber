# User API Documentation

## Endpoints

### `POST /user/register`

Registers a new user.

#### Request Body

- `fullname.firstname` (string, **required**): First name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): Last name of the user.
- `email` (string, **required**): Valid email address.
- `password` (string, **required**): Password for the user account. Must be at least 6 characters long.

#### Responses

- **201 Created**

  - **Content**:
    ```json
    {
      "token": "string",
      "user": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string"
      }
    }
    ```

- **400 Bad Request**

  - **Content**:
    ```json
    {
      "errors": [
        {
          "msg": "string",
          "param": "string",
          "location": "body"
        }
      ]
    }
    ```

#### Example Request

```bash
POST /user/register
Content-Type: application/json

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}

Example Successful Response
{
  "token": "abcd1234efgh5678",
  "user": {
    "_id": "5f8f8c44b54764421b7156c1",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}