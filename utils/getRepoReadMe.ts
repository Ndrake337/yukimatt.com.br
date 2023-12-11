import Axios from "axios";

export const getGithubReadMeContent = (repoName: string) => {
  const gitHubReadMeURL = `https://api.github.com/repos/Ndrake337/${repoName}/readme`;

  return Axios.get(gitHubReadMeURL).then((result) => {
    const readMeContent = Buffer.from(result.data.content, "base64").toString(
      "utf8"
    );
    return readMeContent;
  });
};
