// <script type="text/javascript">

window.addEventListener("DOMContentLoaded", function () {
    var areaSheetArray = [
        ["AreaIdSuggestions", "AreaNameSuggestions", "DefaultDSSuggestions"],
        [22, "San Fransisco SF Bay Area, CA", 7],
        [81, "Chicago, IL", 14],
        [121, "NYC-NJ", 25],
        [141, "Boston, MA", 28],
        [282, "Philadelphia, PA", 60],
        [302, "Los Angeles, CA", 109],
        [143, "Toronto, ON", 112],
        [142, "Washington, DC-Baltimore", 113],
        [522, "Seattle", 136],
        [522, "Seattle–Tacoma–Bellevue, WA", 136],
        [742, "Miami, FL", 252],
        [747, "Denver & Boulder, CO", 296],
        [662, "Paris", 342],
        [1145, "Pittsburgh, PA", 534],
        [2122, "London and South East", 1144],
        [1663, "Berlin", 1666],
        [3020, "London", 1827],
        [442, "Sydney & NSW", 100011]];
        var agencySheetArray = [
            ["AgencyIDSuggestions", "AgencyNameSuggestions", "AgencyUniqueDSSuggestions"],
            [194, "BART", 11],
            [223, "VTA", 9],
            [225, "Muni Metro", 7],
            [266, "AC Transit", 12],
            [439, "TriMet", 33],
            [1614, "OCTA", 114],
            [1618, "Metrolink Trains", 118],
            [2394, "Golden Gate Transit", 100014],
            [2754, "Portland Aerial Tram", 33],
            [5036, "County Connection", 123],
            [5037, "Marin Transit", 126],
            [5042, "Capitol Corridor", 125],
            [5866, "Washington State Ferries", 139],
            [5867, "Kitsap Transit", 140],
            [5872, "Metro Transit", 136],
            [5873, "King County Marine Divison", 136],
            [8768, "SamTrans", 251],
            [8888, "MTS-Ferry", 305],
            [8889, "MTS-Bus", 305],
            [8891, "North County Transit District-Bus", 306],
            [8892, "North County Transit District-Rail", 306],
            [10432, "LADOT", 517],
            [10433, "Big Blue Bus", 518],
            [11329, "LAX FlyAway", 579],
            [11331, "PVPTA", 580],
            [11348, "Burbank Bus", 583],
            [11349, "Laguna Beach Transit", 584],
            [11350, "Thousand Oaks Transit", 116],
            [11428, "Gold Coast Transit", 603],
            [726982, "Amtrak", 654],
            [726987, "OMNITRANS", 668],
            [727000, "Foothill Transit", 684],
            [727003, "Culver City Bus", 690],
            [774662, "Glendale Beeline", 743],
            [774728, "Long Beach Transit", 757],
            [775395, "Montebello Bus Lines", 973],
            [775534, "Sonoma County Transit", 1041],
            [775595, "Stanford Marguerite Shuttle", 1047],
            [850561, "Caltrain", 8],
            [851752, "Golden Empire Transit District", 1556],
            [851936, "Norwalk Transit System", 1609],
            [853206, "Santa Rosa CityBus", 1724],
            [853504, "North County Transit District-Tram", 306],
            [853762, "Fairfield and Suisun Transit", 1842],
            [853763, "SolTrans", 1841],
            [853770, "Bear Transit - UC Berkeley Shuttle", 1847],
            [853771, "Commute.org Shuttles", 1848],
            [853772, "Rio Vista Delta Breeze", 1849],
            [854535, "Sound Transit", 136],
            [854608, "Santa Clarita Transit", 1900],
            [855543, "Intercity Transit", 1941],
            [855547, "Community Transit", 1942],
            [855550, "Everett Transit", 1944],
            [855551, "Seattle Children's Hospital", 1945],
            [855552, "Pierce Transit", 1940],
            [856610, "Pasadena Transit", 1989],
            [857327, "Swan Island Evening Shuttle", 2027],
            [857520, "Anaheim Resort Transportation", 2042],
            [857602, "BC Transit - Central Fraser Valley Transit System", 2052],
            [857602, "BC Transit - Central Fraser Valley Transit System", 2052],
            [858013, "C-TRAN", 2089],
            [889136, "Kern Transit", 2362],
            [889319, "BC Transit - Fraser Valley Express", 2365],
            [889319, "BC Transit - Fraser Valley Express", 2365],
            [902059, "Portland Streetcar", 33],
            [902364, "Washington Park Shuttle", 2401],
            [904378, "WestCat (Western Contra Costa)", 2410],
            [904380, "Beaumont Transit", 2408],
            [904381, "Banning Pass Transit", 2407],
            [904387, "Mountain Transit", 2409],
            [904389, "Corona Cruiser", 2406],
            [910268, "University of San Diego - Tram Service", 2427],
            [916258, "Angel Island Tiburon Ferry", 2445],
            [916259, "Livermore Amador Valley Transit Authority", 2437],
            [916260, "Union City Transit", 2439],
            [916261, "VINE Transit", 2438],
            [916262, "Petaluma Transit", 2442],
            [916263, "Emery Go-Round", 2443],
            [916264, "Tri Delta Transit", 2440],
            [916265, "Alcatraz Hornblower Ferry", 2447],
            [916266, "American Canyon Transit", 2446],
            [916272, "Lake Transit", 2448],
            [937125, "Sonoma Marin Area Rail Transit", 2441],
            [961905, "CCC Xpress", 2579],
            [1003169, "The Victoria Clipper", 2706],
            [1009082, "Ojai Trolley", 2740],
            [1009083, "Moorpark Transit", 2737],
            [1009087, "Lawndale Beat", 2734],
            [1009099, "Cerritos On Wheels", 2726],
            [1009621, "Alhambra Community Transit", 2713],
            [1009622, "Beach Cities Transit-City of Redondo Beach", 2714],
            [1009623, "Bellflower Bus", 2715],
            [1009624, "Bell Gardens Town Trolley", 2716],
            [1009635, "Cudahy Cart", 2719],
            [1009636, "Camarillo Area Transit", 2720],
            [1009645, "City of Commerce Municipal Bus Lines", 2721],
            [1009649, "LA Go Bus", 2722],
            [1009721, "Compton Renaissance", 2723],
            [1009728, "Calabasas Trolley", 2725],
            [1010604, "Huntington Park Combi", 2731],
            [1010605, "City of El Segundo", 2730],
            [1010606, "Lynwood Trolley (Lynwood Breeze)", 2744],
            [1010610, "Spirit Bus", 2749],
            [1010611, "La Puente Link Shuttle", 2750],
            [1010613, "Rosemead Explorer", 2745],
            [1010614, "City of Sierra Madre Gateway Coach", 2746],
            [1010615, "City of South Gate", 2747],
            [1010616, "Go West Shuttle Service", 2751],
            [1011704, "Baldwin Park Transit", 2717],
            [1029915, "Mission Bay TMA", 11841],
            [1058510, "GTrans", 12391],
            [1078170, "Mendocino Transit Authority", 12601],
            [1089060, "San Francisco Bay Ferry", 10],
            [1109479, "Riverside Transit Agency", 117],
            [1122805, "TORRANCE TRANSIT SYSTEM", 115],
            [1136930, "El Monte Transit", 2729],
            [1136932, "Simi Valley Transit", 2738],
            [1137671, "TransLink", 35],
            [1137671, "TransLink", 35],
            [1147115, "City of Menlo Park", 124],
            [1170991, "Tideline Water Taxi", 13121],
            [1213124, "Capitol Corridor Joint Powers Authority", 125],
            [1218706, "Amtrak Seattle", 13253],
            [1219254, "Ventura County Transportation Commission", 13256],
            [1219256, "Solid Ground", 2385],
            [1219257, "SeaTac Airport Shuttle", 2385],
            [1219258, "Island Transit", 2385],
            [1221174, "Amazon SLU Shuttle - Employees Only", 13259],
            [1221707, "Amtrak LA", 13265],
            [1223119, "MVgo Mountain View", 13268],
            [1228410, "San Benito County Express", 13290],
            [1229261, "Altamont Corridor Express", 13294],
            [1286336, "Metro - Los Angeles", 109],
            [1288217, "Grays Harbor Transit", 13467],
            [1288220, "Clallam Transit System", 13466],
            [1288222, "Jamestown S'klallam", 13468],
            [1288225, "Jefferson Transit Authority", 13469],
            [1288226, "Mason Transit Authority", 13470],
            [1291634, "City of West Hollywood", 2758],
            [1297756, "AirTrain", 13493],
            [1347766, "YVR Skylynx", 13594],
            [1347766, "YVR Skylynx", 13594],
            [1360766, "Seattle Monorail", 2385],
            [1381671, "Dumbarton Express Consortium", 13711],
            [1494486, "San Mateo County Transit District", 13493],
            [1495773, "PresidiGo", 13982],
            [1495775, "City of Palo Alto Shuttle", 13981],
            [1508995, "Santa Cruz Metro", 14010],
            [1508996, "Monterey-Salinas Transit", 14009],
            [1544344, "Skagit Transit", 14115],
            [1573970, "Sonoma County Airport Express", 14187],
            [1576809, "MV - DowneyLink", 2727],
            [1588634, "Valley Express", 2739],
            [1590157, "Kanan Shuttle", 2733],
            [1590161, "Griffith Park", 14245],
            [1633965, "Port of Portland", 33],
            [1641516, "Canby Area Transit", 14365],
            [1641517, "South Metro Area Regional Transit", 14364],
            [1641518, "South Clackamas Transportation District", 14366],
            [1641558, "Columbia County Rider", 14367],
            [1641559, "Sunset Empire Transportation District", 14367],
            [1641561, "Tillamook County Transportation District", 14367],
            [1647979, "NorthWest POINT", 14373]
        ];
    function doFirst() {

        var agencyAreaInfoHtml =
            `
         <div class="container-fluid id="AgencyInfo">
        <div class="row pb-1">
            <div class="col-2">
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="SearchAreaByID">Area ID</span>
                    </div>
                    <input type="text" id="AreaIDData" class="form-control" placeholder="Start Typing..." aria-label="Small" aria-describedby="SearchAreaByID" list="AreaIdSuggestions">
                    <datalist id="AreaIdSuggestions">
                    </datalist>
                </div>
            </div>
            <div class="col">
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="SearchAreaByName">Area Name</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Start Typing..." aria-label="Small" aria-describedby="SearchAreaByName" list="AreaNameSuggestions">
                    <datalist id="AreaNameSuggestions">
                    </datalist>
                </div>
            </div>
            <div class="col-3">
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="AreaDefaultDS">Area Default DS</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Start Typing..." aria-label="Small" aria-describedby="AreaDefaultDS" list="DefaultDSSuggestions">
                    <datalist id="DefaultDSSuggestions">
                    </datalist>
                </div>
            </div>
        </div>
        <!-- Agency -->
        <div class="row pb-1">
        <div class="col-3">
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="AgencyID" data-toggle="tooltip" title="Start typing and Select from dropdown to change">Agency ID:</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Start Typing..." aria-label="Small" aria-describedby="AgencyID" list="AgencyIDSuggestions">
                    <datalist id="AgencyIDSuggestions">
                    </datalist>
                </div>
            </div>
            <div class="col-6">
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="AgencyName" data-toggle="tooltip" title="Start typing and Select from dropdown to change">Agency Name:</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Start Typing..." aria-label="Small" aria-describedby="AgencyName" list="AgencyNameSuggestions">
                    <datalist id="AgencyNameSuggestions">
                    </datalist>
                </div>
            </div>
            <div class="col-3">
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="AgencyUniqueDS" data-toggle="tooltip" title="Start typing and Select from dropdown to change">Agency DS:</span>
                </div>
                <input type="text" class="form-control" placeholder="Start Typing..." aria-label="Small" aria-describedby="AgencyUniqueDS" list="AgencyUniqueDSSuggestions">
                <datalist id="AgencyUniqueDSSuggestions">
                </datalist>
            </div>
        </div>
        </div>
    </div>
    `;

        var addNewAlertHtml =
            `
        <div class="container-fluid id="NewAlert">
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
    </div>
        `;

        agencyInfo = [];
        agencyInfo.push(document.getElementById("agencyAreaInfo"));
        agencyInfo[0].innerHTML = agencyAreaInfoHtml;
        agencyInfo.push(document.getElementById("addNewAert"));
        agencyInfo[1].innerHTML = addNewAlertHtml;
        //google.script.run.withSuccessHandler(updateAreaInfo)
        //    .getAreaData();
    
        
        updateSuggestionsList(areaSheetArray);
        updateSuggestionsList(agencySheetArray);
        document.addEventListener('change', function(e){
            if(e.target.tagName=="INPUT"){
                alert("Target ID"+e.target.id);
             agencyInfoautoComplete(e.target.id);
            }
          })
    }

function agencyInfoautoComplete(elemID)
{
   var elemIDlocal = document.getElementById(elemID); 
   if (elemIDlocal.id == "areaIDData")
   {
        var areaNum = areaSheetArray.map(function(value){
        return value == 0;
        )
   }
}

    function updateSuggestionsList(suggestionsListArray) {
        var options = new Array(suggestionsListArray[0].length);
        for (i = 0; i < options.length; i++) {
            for (j = 0; j < suggestionsListArray.length; j++) {
                if (j == 0) {
                    options[i] = new Array(2);
                    options[i][j] = suggestionsListArray[0][i];
                }
                else {
                    options[i][1] += '<option value="' + suggestionsListArray[j][i] + '"/>';
                }
                document.getElementById(options[i][0]).innerHTML = options[i][1];
            }
        }
    }

    function addNewAlertToSheet() {
        alert("New Alert Added!");
        var mandatoryFields = [];
        mandatoryFields.push(document.getElementById("AlertsPublishDateData"));
        mandatoryFields.push(document.getElementById("UpdatedBy"));
        mandatoryFields.push(document.getElementById("SearchAreaByName"));
        mandatoryFields.push(document.getElementById("SearchAgencyByName"));
        mandatoryFields.push(document.getElementById("FeedLinkData"));
        mandatoryFields.push(document.getElementById("AlertTitleData"));
        mandatoryFields.push(document.getElementById("AlertTextData"));
        mandatoryFields.push(document.getElementById("STCDescriptionData"));
        mandatoryFields.push(document.getElementById("STCCreatedOnData"));
        mandatoryFields.push(document.getElementById("STCFollowUpData"));
        var newRecord = [];
        for (i = 0; i < mandatoryFields.length; i++) {

            newRecord[i] = mandatoryFields[i].value;
        }
        google.script.run.addNewAlert(newRecord);
    }

    function addFormEventListener() {
        document.getElementById("SaveAlertData").addEventListener("click", addNewAlertToSheet);
    }
    doFirst();
    // updateControls();
    addFormEventListener();
    // getData();
});