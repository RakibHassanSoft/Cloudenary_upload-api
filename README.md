
# cloudinary

## For sinlge video uplaod (POST)

```
http://localhost:5000/files/single-video

```
-Header file type : 
```
 Content-Type : multipart/form-data
  in post man
  body -> form-data ->[ file(key) -> selected file (value) ]
```

##  For many video uplaod  (POST)

```
http://localhost:5000/files/multiple-video

```
-Header file type : 
```
 Content-Type : multipart/form-data

 in post man
 body -> form-data ->[ files(key) -> selected files (value) ]
```



##  For many  image  uplaod  (POST)

```
http://localhost:5000/files/multiple

```
-Header file type : 
```
 Content-Type : multipart/form-data
 
 in post man
 body -> form-data ->[ files(key) -> selected files (value) ]
```


##  For single  image  uplaod  (POST)

```
http://localhost:5000/files/single

```
-Header file type : 
```
 Content-Type : multipart/form-data
 
 in post man
 body -> form-data ->[ file(key) -> selected file (value) ]
```


## .env file 
```
CLOUDINARY_CLOUD_NAME = 
CLOUDINARY_API_KEY= 
CLOUDINARY_API_SECRET= 
PORT= 

```
## Response type for sigle data
```
{
    "message": "File uploaded successfully",
    "data": "live-url"
}

```
## Response type for many data
```
{
    "message": "File uploaded successfully",
    "data": [
        "live-url1",
        "live-url2"
    ]
}

```