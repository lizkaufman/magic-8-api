# Magic 8 Ball API

https://magic-8-ball-api.onrender.com/

Deployed API URL: https://magic-8-api.onrender.com/

I built this API to provide an alternative to the [kanye.rest](https://kanye.rest/) API we usually use to first introduce bootcampers to using `fetch` at the [School of Code](https://www.schoolofcode.com/). We used kanye.rest because of its ease of use and simplicity of response structure, but for obvious reasons, thanks to his actions, it unfortunately doesn't seem like a good idea to use from now on!

In terms of furthering my learning, I wanted to go back to basics and combine TypeScript with the bare-bones HTTP module as I'm used to using Express with all its bells and whistles. I also wanted the API to be as simple as possible to decrease the need to maintain it as much as possible.

## API Reference

#### Get a random answer

```http
  GET /
```

Example response object:

```js
{
    "answer": "Signs point to yes."
}
```

## Demo

Please see the demo on the [front end here](https://magic-8-ball-api.onrender.com/).

## Acknowledgements

- [Article that got me started](https://blog.logrocket.com/build-rest-api-typescript-using-native-modules/)
- [Original kanye.rest API that inspired me](https://kanye.rest/)
