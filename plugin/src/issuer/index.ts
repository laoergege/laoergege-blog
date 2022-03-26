import { Octokit } from "@octokit/core";
import { createDB } from "./db";

import type { OctokitOptions } from "@octokit/core/dist-types/types";
import type { RxDatabase } from "rxdb";

interface IssuerOptions extends OctokitOptions {
  ower: string;
  repo: string;
  tag?: string[];
}

class Issuer {
  octokit: Octokit;
  db!: RxDatabase;

  constructor(option: IssuerOptions) {
    this.octokit = new Octokit(option);
    (async () => {
      this.db = await createDB();

      //   if(this.db.issues.find().) {

      //   }
    })();
  }

  async updateIssue() {
    await this.octokit.request(
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}",
      {
        owner: "octocat",
        repo: "hello-world",
        issue_number: 42,
        title: "title",
      }
    );
  }
}
