# This is 105 integration module's repository

This repository contain backend and frontend

## To run the frontend
use
```
    npm start
```
## To run the backend at port:8000 that run the user server
use
```
    npm run start
```
## To run the backend at port:5000 that run the store server
use
```
    npm run start_store
```

# Metagym

### All of the responses will be wrapped with this data before sending
| Parameter | Type | Description |
|-----|:----:|:-----|
| success| boolean | the status of request|
| msg | string | message for each request |
| data | JSON | the actual data |

### Start with the user first

### Login

#### URL
`POST /login`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|username|String|username 
|password|String| password|


Example
```
   {
     "username" : "thistine",
     "password" : "1234"
   }


```
#### Success
Response

###### Status Code
` 200`  login success

| Parameter | Type | Description |
|----------|:-------------:|:------|
|email|String| user email
|username|String| username
|id|String| user id

Example
```
{
   "email":"tine@thistine.com",
   "username":"thistine",
   "id" : "1"
}

```
**noted: If success, the Response will be sent with cookie named access_token**

### Register

#### URL
`POST /register`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|id|Int|id |
|username|String|username |
|email| String | email |
|password|String| password with hash|
|termOfUse|Boolean| check if player agree with term of service|

Example
```
   {
    "id":"20254"
    "username":"thistine",
    "email":"tine@thistine.com",
    "password" : "1234"
    "termOfUse":true
   }


```

#### Success

###### Status Code
` 200`  register user succesfully

no response body

### Logout


#### URL
`POST .logout`

#### Request Body 
No Request Body


#### Success

###### Status Code
` 200`  got json text "user has been logged out"


### registerForm
#### URL
`GET /register/form`

| Parameter | Type | Description |
|----------|:-------------:|:------|
|age | string | age of user |
|height | string | height of user |
|weight | string | weight of user |


#### Success

###### Status Code
` 200`  got data


### register the workout style
register the workout style that match user style

#### URL
`POST /register/workout-style`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
|id | string | id of workout |
|name | string | name of workout |
|desc | string | description of workout |


#### Success
Response

###### Status Code
` 200`  success got data

### get single workout plan

#### URL
`GET /get-all-plan/:id`

 
#### Request Body 
no request body


#### Success
Response

###### Status Code
` 200`  success got data



### Create Plan


#### URL
`POST /createplan`

 
#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of plan |
| header | string | plan title |
| description | string | plan description |
| userId | string | user id that create that plan |


#### Success
Response

###### Status Code
` 200`  success got data

### get all product

#### URL
`GET /get-all-product`
 
#### Request Body 
No Request Body

#### Success
Response

###### Status Code
` 200`  success got data



### get Product
#### URL
`GET /getproduct/:id`

### parameter
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | string | id of product |

#### Request Body 
No Request Body

#### Success

###### Status Code
` 200`  success got data


### second is the store side


### storeRegister
register the store account

#### URL
`POST /store/register`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| country | string | which country that the store are belong with  |
| phoneNumber | string | store phoneNumber |
| firstname | string | firstname of store owner |
| middlename | string | middle name of store owner |
| lastname | string | lastname of store owner |
| email | string | store email |
| password | string | store account password |

#### Success

###### Status Code
` 200` success got data

### createAccount
#### URL
`POST create-account`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| storeName | string | store name  |
| about_store | string | about their store  |
| category | string | category of their product  |
| id | string | id of store  |

#### Success

###### Status Code
` 200`  success got data


### storeLogin
#### URL
`POST /store/login`

#### Request Body 
| Parameter | Type | Description |
|----------|:-------------:|:------|
| email | string | stored email  |
| password | string | store account password  |

#### Success

###### Status Code
` 200`  success got data and set cookie as access_token