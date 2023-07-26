Simple library that wraps harper commands

Based on [this guide][guide].

First create the client, passing in the expected values:

```ts
import ???

Db.createClient({
    host,
    username,
    password,
    schema
});

// alternatively, set the schema on the Db object:
Db.schema = schema;
```


[guide]:https://brayanarrieta.hashnode.dev/how-to-use-harperdb-with-your-typescript-project "How to use HarperDB with your typescript project?"