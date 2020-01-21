window.addEventListener("DOMContentLoaded", function () {
    var dsInfo =
`
<div class="row pb-3">
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
                <label class="input-group-text" data-toggle="tooltip" for="SearchAreaByID"
                    title="Select from dropdown to change">
                    Area ID:
                </label>
            </div>
            <select class="custom-select" id="SearchAreaByID">
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
<div class="row">
    <div class="col">
        <button class="btn btn-primary text-center w-100" onclick='google.script.run.openPendingSA()' type="button">Open
            Editor
            Alerts
            Page
        </button>
    </div>
    <div class="col">
        <button class="btn btn-primary text-center w-100" onclick='google.script.run.openPendingSTC()'
            type="button">Open
            Editor
            STCs
            Page
        </button>
    </div>
    <div class="col">
        <button class="btn btn-primary text-center w-100" onclick='google.script.run.openLinesEditor()'
            type="button">Open
            Editor
            Lines Page
        </button>
    </div>
    <div class="col">
        <button class="btn btn-primary text-center w-100" onclick='google.script.run.openMoovitAppArea()' type="button">
            Open
            Moovitapp
            area Page
        </button>
    </div>
</div>
    `
    alert("Ready for more coding!");
    var newEditor = [];
    newEditor.push(document.getElementById("NewEditorHeader"));
    newEditor[0].innerHTML = dsInfo;
    console.log(newEditor[0].nodeType);
});