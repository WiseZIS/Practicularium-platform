const { post } = require("../../client");

async function saveInternetDocument(methodProperties) {

    return post({

        modelName: "InternetDocument",

        calledMethod: "save",

        methodProperties

    });

}

module.exports = {

    saveInternetDocument

};