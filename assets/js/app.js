window.addEventListener("DOMContentLoaded", function () {

    function doFirst() {
        var dsHtml = `
        <!-- Area -->
        <div class="row pb-3">
            <div class="col-2">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" data-toggle="tooltip" for="SearchAreaByID"
                            title="Select from dropdown to change">
                            Area ID:
                        </label>
                    </div>
                    <select class="custom-select" id="SearchAreaByID">
                        <option selected>Select...</option>
                        <option value="1">20</option>
                    </select>
                </div>
            </div>
            <div class="col">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" data-toggle="tooltip" for="SearchAreaByName"
                            title="Select from dropdown to change">
                            Area Name:
                        </label>
                    </div>
                    <select class="custom-select" id="SearchAreaByName">
                        <option selected>Select...</option>
                        <option value="1">San Fransisco SF Bay Area, CA</option>
                    </select>
                </div>
            </div>
            <div class="col-3">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <label class="input-group-text" data-toggle="tooltip" for="AreaDefaultDS"
                            title="Select from dropdown to change">Default Data
                            Source #:</label>
                    </div>
                    <select class="custom-select" id="AreaDefaultDS">
                        <option selected>Select...</option>
                        <option value="1">7</option>
                    </select>
                </div>
            </div>
        </div>
        <!-- Agency -->
        <div class="row pb-3">
            <div class="col-3">
                <div class="pt-1">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text" data-toggle="tooltip" for="SearchAgencyByID"
                                title="Select from dropdown to change">
                                Agency ID:
                            </label>
                        </div>
                        <select class="custom-select" id="SearchAgencyByID">
                            <option selected>Search by Agency ID...</option>
                            <option value="1">12345</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="pt-1">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text" data-toggle="tooltip" for="SearchAgencyByName"
                                title="Select from dropdown to change">
                                Agency Name:
                            </label>
                        </div>
                        <select class="custom-select" id="SearchAgencyByName">
                            <option selected>Search by Agency Name...</option>
                            <option value="1">SFMTA</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="pt-1">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text" data-toggle="tooltip" for="AgencyUniqueDS"
                                title="Select from dropdown to change">
                                Agency Unique DS:
                            </label>
                        </div>
                        <select class="custom-select" id="AgencyUniqueDS">
                            <option selected>Search by Agency DS...</option>
                            <option value="1">7</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        `
        var newAlertHtml = `
        <container>
        <div class="row pb-1">
                <div class="col-6">
                    <div class="row pb-1">
                        <div class="col">
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="Feed-Link">Feed Link</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Small"
                                    aria-describedby="Feed-Link" id="FeedLinkData">
                            </div>
                        </div>
                    </div>
                    <div class="row pb-1">
                        <div class="col">
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="Alert-Title">Alert Title</span>
                                </div>
                                <input type="text-area" class="form-control" aria-label="Small"
                                    aria-describedby="Alert-Title" id="AlertTitleData">
                            </div>
                        </div>
                    </div>
                    <div class="row pb-1">
                        <div class="col">
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="Alert-Text">Alert Text</span>
                                </div>
                                <textarea class="form-control" aria-label="Small"
                                    aria-describedby="Alert-Text" id="AlertTextData"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row pb-1">
                        <div class="col">
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="Alerts-Publish-Date">Alerts Publish Date</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Small"
                                    aria-describedby="Alerts-Publish-Date" id="AlertsPublishDateData">
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" data-toggle="tooltip" for="UpdatedBy"
                                        title="Select from dropdown to change">
                                        Updated by
                                    </label>
                                </div>
                                <select class="custom-select" id="UpdatedBy">
                                    <option selected>Select...</option>
                                    <option value="1">Amitzur N.</option>
                                    <option value="2">Anton S.</option>
                                    <option value="3">Yeashai M.</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row pb-1">
                        <div class="col-6">
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" data-toggle="tooltip" for="Resolution"
                                        title="Select from dropdown to change">
                                        Resolution
                                    </label>
                                </div>
                                <select class="custom-select" id="Resolution">
                                    <option selected>Select...</option>
                                    <option value="1">STC - Created</option>
                                    <option value="2">STC - Active</option>
                                    <option value="3">Not Relevant to STC</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" data-toggle="tooltip" for="NotRelevantDue"
                                        title="Select from dropdown to change">
                                        Not Relevant Due to
                                    </label>
                                </div>
                                <select class="custom-select" id="NotRelevantDue">
                                    <option selected>Select...</option>
                                    <option value="1">Conten is not relevant.</option>
                                    <option value="2">Not enough time to implement</option>
                                    <option value="3">Detour - add stops</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row pb-1">
                        <div class="col">
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="STC-Description">Stc Description</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Small"
                                    aria-describedby="STC-Description" id="STCDescriptionData">
                            </div>
                        </div>
                    </div>
                    <div class="row pb-1">
                        <div class="col">
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="STC-Created-On">STC Created On</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Small"
                                    aria-describedby="STC-Created-On" id="STCCreatedOnData">
                            </div>
                        </div>
                        <div class="col">
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="STC-Follow-Up">Follow up on</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Small"
                                    aria-describedby="STC-Follow-Up" id="STCFollowUpData">
                            </div>
                        </div>
                    </div>
                    <div class="row pb-1">
                        <div class="col mb-3">
                            <button class="btn btn-primary" id="SaveAlertData">Save Alert to report</button>
                        </div>
                    </div>
                </div>
    </container>
        `
        var AgencyInfo = [];
        AgencyInfo.push(document.getElementById("NewAgencyInfoHeader"));
        AgencyInfo[0].innerHTML = dsHtml;
        AgencyInfo.push(document.getElementById("NewAgencyAlert"));
        AgencyInfo[1].innerHTML = newAlertHtml;
    }

    function addNewAlert() {
        alert("New Alert Added!");
        var mandatoryFields = [];
        mandatoryFields.push(document.getElementById("AlertsPublishDateData"));
        mandatoryFields.push(document.getElementById("UpdatedBy"));
        mandatoryFields.push(document.getElementById("SearchAreaByName"));
        mandatoryFields.push(document.getElementById("SearchAgencyByName"));
        mandatoryFields.push(document.getElementById("AgencyUniqueDS"));
        mandatoryFields.push(document.getElementById("FeedLinkData"));
        mandatoryFields.push(document.getElementById("AlertTitleData"));
        mandatoryFields.push(document.getElementById("AlertTextData"));
        mandatoryFields.push(document.getElementById("STCDescriptionData"));
        mandatoryFields.push(document.getElementById("STCCreatedOnData"));
        mandatoryFields.push(document.getElementById("STCFollowUpData"));
        mandatoryFields.push(document.getElementById("Resolution"));
        mandatoryFields.push(document.getElementById("NotRelevantDue"));
        mandatoryFields.push(document.getElementById("FeedLinkData"));
        var newRecord = [];
        for (i = 0; i < mandatoryFields.length; i++) {

            newRecord[i] = mandatoryFields[i].value;
        }



    }
    function addFormEventListener() {
        document.getElementById("SaveAlertData").addEventListener("click", addNewAlert);
    }
    doFirst();
    // updateControls();
    addFormEventListener();
    // getData();
});