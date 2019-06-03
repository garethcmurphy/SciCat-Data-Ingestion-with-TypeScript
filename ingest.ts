"use strict";
const rp = require("request-promise");

class Ingestor {
  username = "ingestor";
  hostname = "catamel";
  url_base = "http://catamel:3000/api/v3/";
  url = this.url_base+"Users/login";
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
      this.url_base+"Datasets?access_token=" + this.id;
    console.log(url_ingest);
    let options3 = {
      url: url_ingest,
      method: "PUT",
      body: dataset,
      json: true,
      rejectUnauthorized: false,
      requestCert: true
    };
    let data_array = [];
    for (let i = 0; i < 200; i++) {
      data_array.push(options3);
    }
    try {
      const ingestr_response = await Promise.all(data_array);
      console.log(ingestr_response);
      return Promise.resolve(ingestr_response);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}

function measurePromise(fn: () => Promise<any>): Promise<number> {
  let onPromiseDone = () => Date.now() - start;
  let start = Date.now();
  return fn().then(onPromiseDone, onPromiseDone);
}
if (require.main === module) {
  const ingest = new Ingestor();

  measurePromise(() => ingest.ingest()).then(duration => {
    console.log(`promise took ${duration} ms`);
  });
}
