window.addEventListener("DOMContentLoaded", function () {

    function updateAgencyInfo(myObj) {
        var AgencyInfoSearchByAreaID = document.getElementById("SearchAreaByID");
        for (i = 1; i < 20; i++) {
            AgencyInfoSearchByAreaID.options[i] = new Option("test " + i, i);
        }
        setTimeout(function() {
            $('#staticBackdrop').modal('hide');
        },500);
    }

    function getData() {
        $('#staticBackdrop').modal('show');
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                updateAgencyInfo(myObj);
            }
        };
        xmlhttp.open("GET", "https://script.google.com/a/moovit.com/macros/s/AKfycbzW61Nsq4lZofl-VKwz-6HpDMuSyMqgRkXboLrC080graEKmlYE/exec", true);
        xmlhttp.send();
    }

    function doFirst() {
        var dsHtml =
            `
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
            </select>
        </div>
    </div>
    <div class="col-5">
        <div class="input-group">
            <div class="input-group-prepend">
                <label class="input-group-text" data-toggle="tooltip" for="SearchAreaByName"
                    title="Select from dropdown to change">
                    Area Name:
                </label>
            </div>
            <select class="custom-select" id="SearchAreaByName">
                <option selected>Select...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
    <div class="col-2">
        <div class="input-group">
            <div class="input-group-prepend">
                <label class="input-group-text" data-toggle="tooltip" for="inputGroupSelectPriority"
                    title="Select from dropdown to change">Priority:</label>
            </div>
            <select class="custom-select" id="inputGroupSelectPriority">
                <option selected>Select...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
    <div class="col-3">
        <div class="input-group">
            <div class="input-group-prepend">
                <label class="input-group-text" data-toggle="tooltip" for="inputGroupSelectDS"
                    title="Select from dropdown to change">Default Data
                    Source #:</label>
            </div>
            <select class="custom-select" id="inputGroupSelectDS">
                <option selected>Select...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
</div>
    `
        var loadingModal = 
`<div class="modal" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="d-flex align-items-center">
                                <strong>Loading information. Please Hold..</strong>
                                <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        `
        alert("Ready for more coding!");
        var AgencyInfo = [];
        AgencyInfo.push(document.getElementById("NewAgencyInfoHeader"));
        AgencyInfo[0].innerHTML = dsHtml;
        var mo = document.createElement("div");
        mo.innerHTML=loadingModal;
        document.body.appendChild(mo);
    
    }
    chrome.app.window.current().maximize();
    doFirst();
    getData();
});