import GithubLogo from "../assets/github.svg";
import BitbucketLogo from "../assets/bitbucket.svg";
import AzureLogo from "../assets/azure.svg";
import GitLabLogo from "../assets/gitlab.svg";
import SSOLogo from "../assets/sso.svg";
const SAAS_SignInOptions = [
  {
    name: "Github",
    logo: GithubLogo,
  },
  {
    name: "Bitbucket",
    logo: BitbucketLogo,
  },
  {
    name: "Azure",
    logo: AzureLogo,
  },
  {
    name: "GitLab",
    logo: GitLabLogo,
  },
];

const SelfHosted_SignInOptions = [
  {
    name: "GitLab",
    logo: GitLabLogo,
  },
  {
    name: "SSO",
    logo: SSOLogo,
  },
];

export { SAAS_SignInOptions, SelfHosted_SignInOptions };
