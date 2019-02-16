// This endpoint is critical to the test flow,
// so this stops the request cycle if any of these tests error.
postman.setNextRequest("end");

var res = JSON.parse(responseBody);

var accessToken = res.access_token;
var refreshToken = res.refresh_token;
tests["Returns 40 char hex access token"] = /^[a-f0-9]{40}$/i.test(accessToken);
tests["Returns 40 char hex refresh token"] = /^[a-f0-9]{40}$/i.test(
  refreshToken
);

postman.setEnvironmentVariable("accessToken", accessToken);

postman.setNextRequest("Account Base"); // Account -> Account Base
