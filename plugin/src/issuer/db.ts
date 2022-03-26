import { createRxDatabase } from "rxdb";

import { getRxStoragePouch, addPouchPlugin } from "rxdb/plugins/pouchdb";
addPouchPlugin(require("pouchdb-adapter-idb"));

const dbConfig = {
  name: "issues", // <- name
  multiInstance: false, // <- multiInstance (optional, default: true)
  eventReduce: true, // <- eventReduce (optional, default: true)
};

const IssueSchema = {
  title: "IssueSchema",
  version: 0,
  primaryKey: "issue-title",
  type: "object",
  properties: {
    "issue-title": {
      type: "string",
    },
    "issue-number": {
      type: "string",
    },
  },
};

export async function createDB() {
  const db = await createRxDatabase({
    ...dbConfig,
    storage: getRxStoragePouch("idb"), // <- RxStorage
  });

  const { issues } = await db.addCollections({
    issues: {
      schema: IssueSchema,
    },
  });

  db.issues = issues;

  return db;
}
