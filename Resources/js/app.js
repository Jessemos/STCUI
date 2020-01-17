window.addEventListener("DOMContentLoaded", function () {

    function returnHTMLSnippet(htmlSnippet) {
        var httpRequest;
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    alert(httpRequest.responseText);
                } else {
                    alert('There was a problem with the request.');
                }
            }
        };

        httpRequest.open('GET', '../Resources/js/HTML_Snippetes/' + htmlSnippet + '.html',false);
        httpRequest.send();        
    }
    returnHTMLSnippet("DSInfo");
    var dsInfo = `
    <div class="row">
    <div class="col">
        <div class="input-group">
            <div class="input-group-prepend">
                <label class="input-group-text" data-toggle="tooltip" for="inputGroupSelectPriority"
                    title="Select from dropdown to change">Priority:</label>
            </div>
            <select class="custom-select" id="inputGroupSelectPriority">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
                <option selected>Search by Area Name...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
    <div class="col">
        <div class="input-group">
            <div class="input-group-prepend">
                <label class="input-group-text" data-toggle="tooltip" for="SearchAreaByID"
                    title="Select from dropdown to change">
                    Area ID:
                </label>
            </div>
            <select class="custom-select" id="SearchAreaByID">
                <option selected>Search by Area ID...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
    <div class="col">
        <div class="input-group">
            <div class="input-group-prepend">
                <label class="input-group-text" data-toggle="tooltip" for="inputGroupSelectDS"
                    title="Select from dropdown to change">Relevant Data
                    Source:</label>
            </div>
            <select class="custom-select" id="inputGroupSelectDS">
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
</div>
    `
    alert("Ready for more coding!");
    var newEditor = [];
    newEditor.push(document.getElementById("collapseNewEditorCardHeader"));
    newEditor[0].innerHTML = dsInfo;
    console.log(newEditor[0].nodeType);
});