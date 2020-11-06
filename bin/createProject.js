const axios = require('axios');

const CREATE_PROJECT_URL = 'https://api.vercel.com/v6/projects/';

const main = () => {
  axios
    .post(
      CREATE_PROJECT_URL,
      {
        name: 'hello-api-generated-vercel-project',
        gitRepository: {
          type: 'github',
          repo: 'okeeffed/hello-vercel-api',
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
          'Content-Type': 'application/json',
        },
      },
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

main();
