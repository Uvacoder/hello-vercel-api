const axios = require('axios');

const CREATE_PROJECT_URL = 'https://api.vercel.com/v6/projects/';

const main = () => {
  axios
    .post(
      CREATE_PROJECT_URL,
      {
        firstName: 'Fred',
        lastName: 'Flintstone',
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
