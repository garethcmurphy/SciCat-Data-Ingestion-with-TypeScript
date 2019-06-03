"use strict";
import * as os from "os";

const rp = require("request-promise");

class Ingestor {
  username = "ingestor";
  hostname = "catamel";
  url = "http://localhost:3001/api/v3/Users/login";
  rawdata = { username: "ingestor", password: "aman" };
  id: string;

  async ingest() {
    console.log(this.username);
    let options1 = {
      url: this.url,
      method: "POST",
      body: this.rawdata,
      json: true,
      rejectUnauthorized: false,
      requestCert: true
    };
    try {
      const response = await rp(options1);
      console.log(response.id);
      this.id = response.id;
      // return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
    const dataset = {
      owner: "string",
      ownerEmail: "string",
      orcidOfOwner: "string",
      contactEmail: "string",
      sourceFolder: "string",
      size: 0,
      packedSize: 0,
      creationTime: "2019-06-03T09:53:04.658Z",
      type: "string",
      validationStatus: "string",
      keywords: ["string"],
      description: "string",
      datasetName: "string",
      classification: "string",
      license: "string",
      version: "string",
      isPublished: true,
      ownerGroup: "string",
      accessGroups: ["string"],
      createdBy: "string",
      updatedBy: "string",
      createdAt: "2019-06-03T09:53:04.658Z",
      updatedAt: "2019-06-03T09:53:04.658Z",
      datasetlifecycle: {
        archivable: true,
        retrievable: true,
        publishable: true,
        dateOfDiskPurging: "2019-06-03T09:53:04.658Z",
        archiveRetentionTime: "2019-06-03T09:53:04.658Z",
        dateOfPublishing: "2019-06-03T09:53:04.658Z",
        isOnCentralDisk: true,
        archiveStatusMessage: "string",
        retrieveStatusMessage: "string",
        archiveReturnMessage: {},
        retrieveReturnMessage: {},
        exportedTo: "string",
        retrieveIntegrityCheck: true
      },
      history: [
        {
          id: "string"
        }
      ]
    };

    const url_ingest =
      "http://localhost:3001/api/v3/Datasets?access_token=" + this.id;
    console.log(url_ingest);
    let options3 = {
      url: url_ingest,
      method: "PUT",
      body: dataset,
      json: true,
      rejectUnauthorized: false,
      requestCert: true
    };
    try {
      const ingestr_response = await rp(options3);
      console.log(ingestr_response);
      return Promise.resolve(ingestr_response);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}

if (require.main === module) {
  const ingest = new Ingestor();
  ingest.ingest();
}
