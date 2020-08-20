const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Visa = new Schema(
  {
    countryName: {
      type: String,
      required: true,
    },

    salaryDocs: {
      salarySubmission: {
        type: String,
        required: true,
        maxlength: 100000,
      },
      salaryFinancials: {
        type: String,
        required: true,
        maxlength: 100000,
      },

      salaryDocsRequired: {
        type: String,
        required: true,
        maxlength: 100000,
      },
    },
    selfEmployedDocs: {
      selfEmployedSubmission: {
        type: String,
        required: true,
        maxlength: 100000,
      },
      selfEmployedFinancials: {
        type: String,
        required: true,
        maxlength: 100000,
      },

      selfEmployedDocsRequired: {
        type: String,
        required: true,
        maxlength: 100000,
      },
    },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model("Visa", Visa);
