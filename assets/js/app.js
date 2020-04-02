// <script type="text/javascript">
//'use strict';

window.addEventListener("DOMContentLoaded", function () {
    var agencyInfo = [["agencyIDSuggestions", "areaIdSuggestions", "agencyUniqueDSSuggestions", "DSSuggestions", "agencyNameSuggestions", "TBC", "areaNameSuggestions", "TBC", "TBC"], [185, 22, 7, 7, "MUNI", "SFMTA", "San Fransisco SF Bay Area, CA", "YEASHAI", "No"], [194, 22, 11, 7, "BART", "BART", "San Fransisco SF Bay Area, CA", "YEASHAI", "Yes"], [223, 22, 9, 7, "VTA", "NA", "San Fransisco SF Bay Area, CA", "YEASHAI", "Yes"], [224, 22, 9, 7, "VTA", "VTA", "San Fransisco SF Bay Area, CA", "YEASHAI", "No"], [225, 22, 7, 7, "Muni Metro", "SFMTA", "San Fransisco SF Bay Area, CA", "YEASHAI", "Yes"], [226, 22, 7, 7, "SF Cable Car", "NA", "San Fransisco SF Bay Area, CA", "YEASHAI", "No"], [266, 22, 12, 7, "AC Transit", "AC TRANSIT", "San Fransisco SF Bay Area, CA", "YEASHAI", "Yes"], [439, 143, 33, 32, "TriMet", "NA", "Toronto", "YEASHAI", "Yes"], [458, 143, 33, 32, "TriMet‎", "NA", "Toronto", "YEASHAI", "No"], [1177, 302, 109, 109, "METRO", "NA", "Los Angeles, CA", "AMITZUR", "No"], [1614, 302, 114, 109, "OCTA", "NA", "Los Angeles, CA", "AMITZUR", "Yes"], [1618, 302, 118, 109, "Metrolink Trains", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [2394, 22, 100014, 7, "Golden Gate Transit", "Golden Gate", "San Fransisco SF Bay Area, CA", "GAL A", "Yes"], [2754, 143, 33, 32, "Portland Aerial Tram", "NA", "Toronto", "YEASHAI", "Yes"], [5036, 302, 123, 109, "County Connection", "County Connection", "Los Angeles, CA", "YEASHAI", "Yes"], [5037, 302, 126, 109, "Marin Transit", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [5042, 302, 125, 109, "Capitol Corridor", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [5866, 522, 139, 136, "Washington State Ferries", "Washington State Ferries", "Seattle–Tacoma–Bellevue, WA", "ANTON", "Yes"], [5867, 522, 140, 136, "Kitsap Transit", "NA", "Seattle–Tacoma–Bellevue, WA", "ANTON", "Yes"], [5868, 522, 140, 136, "Kitsap Transit", "Kitsap Transit", "Seattle–Tacoma–Bellevue, WA", "ANTON", "No"], [5869, 522, 136, 136, "City of Seattle", "City of Seattle", "Seattle–Tacoma–Bellevue, WA", "ANTON", "No"], [5872, 522, 136, 136, "Metro Transit", "Metro Transit", "Seattle–Tacoma–Bellevue, WA", "ANTON", "Yes"], [5873, 522, 136, 136, "King County Marine Divison", "Kingcounty Marine Divison", "Seattle–Tacoma–Bellevue, WA", "ANTON", "Yes"], [8768, 22, 251, 7, "SamTrans", "SamTrans", "San Fransisco SF Bay Area, CA", "YEASHAI", "Yes"], [8888, 747, 305, 296, "MTS-Ferry", "NA", "Denver & Boulder, CO", "Noam", "Yes"], [8889, 747, 305, 296, "MTS-Bus", "NA", "Denver & Boulder, CO", "Noam", "Yes"], [8890, 747, 305, 296, "MTS-Cable", "NA", "Denver & Boulder, CO", "Noam", "No"], [8891, 747, 306, 296, "North County Transit District-Bus", "NA", "Denver & Boulder, CO", "Noam", "Yes"], [8892, 747, 306, 296, "North County Transit District-Rail", "NA", "Denver & Boulder, CO", "Noam", "Yes"], [10432, 302, 517, 109, "LADOT", "NA", "Los Angeles, CA", "ANTON", "Yes"], [10433, 302, 518, 109, "Big Blue Bus", "NA", "Los Angeles, CA", "ANTON", "Yes"], [11329, 1322, 579, 562, "LAX FlyAway", "NA", "Cincinnati", "ANTON", "Yes"], [11331, 1322, 580, 562, "PVPTA", "NA", "Cincinnati", "ANTON", "Yes"], [11348, 1322, 583, 562, "Burbank Bus", "NA", "Cincinnati", "ANTON", "Yes"], [11349, 1322, 584, 562, "Laguna Beach Transit", "NA", "Cincinnati", "ANTON", "Yes"], [11350, 302, 116, 109, "Thousand Oaks Transit", "NA", "Los Angeles, CA", "AMITZUR", "Yes"], [11428, 1322, 603, 562, "Gold Coast Transit", "NA", "Cincinnati", "ANTON", "Yes"], [726982, 1322, 654, 562, "Amtrak", "NA", "Cincinnati", "ANTON", "Yes"], [726987, 302, 668, 109, "OMNITRANS", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [727000, 302, 684, 109, "Foothill Transit", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [727003, 302, 690, 109, "Culver City Bus", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [774662, 302, 743, 109, "Glendale Beeline", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [774728, 302, 757, 109, "Long Beach Transit", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [775395, 302, 973, 109, "Montebello Bus Lines", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [775534, 302, 1041, 109, "Sonoma County Transit", "Sonoma County Transit", "Los Angeles, CA", "YEASHAI", "Yes"], [775595, 302, 1047, 109, "Stanford Marguerite Shuttle", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [850560, 22, 8, 7, "Caltrain-Bus", "NA", "San Fransisco SF Bay Area, CA", "YEASHAI", "No"], [850561, 22, 8, 7, "Caltrain", "Calltrain (SF)", "San Fransisco SF Bay Area, CA", "YEASHAI", "Yes"], [851752, 143, 1556, 32, "Golden Empire Transit District", "NA", "Toronto", "YEASHAI", "Yes"], [851936, 302, 1609, 109, "Norwalk Transit System", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [853206, 302, 1724, 109, "Santa Rosa CityBus", "NA", "Los Angeles, CA", "GAL A", "Yes"], [853504, 747, 306, 296, "North County Transit District-Tram", "NA", "Denver & Boulder, CO", "Noam", "Yes"], [853762, 302, 1842, 109, "Fairfield and Suisun Transit", "NA", "Los Angeles, CA", "GAL A", "Yes"], [853763, 302, 1841, 109, "SolTrans", "SolTrans", "Los Angeles, CA", "GAL A", "Yes"], [853770, 302, 1847, 109, "Bear Transit - UC Berkeley Shuttle", "NA", "Los Angeles, CA", "GAL A", "Yes"], [853771, 302, 1848, 109, "Commute.org Shuttles", "NA", "Los Angeles, CA", "GAL A", "Yes"], [853772, 302, 1849, 109, "Rio Vista Delta Breeze", "NA", "Los Angeles, CA", "GAL A", "Yes"], [854535, 522, 136, 136, "Sound Transit", "Sound Transit-Bus", "Seattle–Tacoma–Bellevue, WA", "ANTON", "Yes"], [854536, 522, 136, 136, "Sound Transit", "Sound Transit-Bus", "Seattle–Tacoma–Bellevue, WA", "ANTON", "No"], [854608, 302, 1900, 109, "Santa Clarita Transit", "NA", "Los Angeles, CA", "GAL A", "Yes"], [855543, 522, 1941, 136, "Intercity Transit", "NA", "Seattle", "ANTON", "Yes"], [855547, 522, 1942, 136, "Community Transit", "Community Transit", "Seattle", "ANTON", "Yes"], [855548, 522, 1943, 136, "Sound Transit", "NA", "Seattle–Tacoma–Bellevue, WA", "ANTON", "No"], [855549, 522, 1943, 136, "Sound Transit", "Sound Transit", "Seattle–Tacoma–Bellevue, WA", "ANTON", "No"], [855550, 522, 1944, 136, "Everett Transit", "NA", "Seattle–Tacoma–Bellevue, WA", "ANTON", "Yes"], [855551, 522, 1945, 136, "Seattle Children's Hospital", "NA", "Seattle–Tacoma–Bellevue, WA", "ANTON", "Yes"], [855552, 522, 1940, 136, "Pierce Transit", "NA", "Seattle", "ANTON", "Yes"], [855553, 522, 1940, 136, "Sound Transit", "Sound Transit", "Seattle", "ANTON", "No"], [856610, 522, 1989, 136, "Pasadena Transit", "NA", "Seattle–Tacoma–Bellevue, WA", "ANTON", "Yes"], [857327, 143, 2027, 32, "Swan Island Evening Shuttle", "NA", "Toronto", "ANTON", "Yes"], [857520, 121, 2042, 25, "Anaheim Resort Transportation", "NA", "NYC-NJ", "ELIANA", "Yes"], [857602, 145, 2052, 35, "BC Transit - Central Fraser Valley Transit System", "BC Transit - Central Fraser Valley Transit System", "Greater Vancouver, BC", "TBD", "Yes"], [857602, 145, 2052, 35, "BC Transit - Central Fraser Valley Transit System", "BC Transit - Central Fraser Valley Transit System", "Greater Vancouver, BC", "TBD", "Yes"], [857774, 143, 33, 32, "TriMet", "NA", "Toronto", "YEASHAI", "No"], [858013, 143, 2089, 32, "C-TRAN", "NA", "Toronto", "ANTON", "Yes"], [875078, 141, 2234, 28, "Metro - Los Angeles", "NA", "Boston, MA", "YEASHAI", "No"], [875079, 141, 2234, 28, "Metro - Los Angeles", "NA", "Boston, MA", "YEASHAI", "No"], [889136, 143, 2362, 32, "Kern Transit", "NA", "Toronto", "ANTON", "Yes"], [889319, 145, 2365, 35, "BC Transit - Fraser Valley Express", "BC Transit - Fraser Valley Express", "Greater Vancouver, BC", "TBD", "Yes"], [889319, 145, 2365, 35, "BC Transit - Fraser Valley Express", "BC Transit - Fraser Valley Express", "Greater Vancouver, BC", "TBD", "Yes"], [889320, 145, 2364, 35, "BC Transit - Chilliwack Transit System", "NA", "Greater Vancouver, BC", "TBD", "No"], [889320, 145, 2364, 35, "BC Transit - Chilliwack Transit System", "NA", "Greater Vancouver, BC", "TBD", "No"], [902059, 143, 33, 32, "Portland Streetcar", "NA", "Toronto", "YEASHAI", "Yes"], [902364, 522, 2401, 136, "Washington Park Shuttle", "NA", "Seattle", "ANTON", "Yes"], [903118, 22, 100014, 7, "Golden Gate Transit", "Golden Gate", "San Fransisco SF Bay Area, CA", "GAL A", "No"], [904378, 522, 2410, 136, "WestCat (Western Contra Costa)", "WestCat (Western Contra Costa)", "Seattle", "ANTON", "Yes"], [904380, 522, 2408, 136, "Beaumont Transit", "NA", "Seattle", "ANTON", "Yes"], [904381, 522, 2407, 136, "Banning Pass Transit", "NA", "Seattle", "ANTON", "Yes"], [904387, 522, 2409, 136, "Mountain Transit", "NA", "Seattle", "ANTON", "Yes"], [904388, 522, 2409, 136, "Mountain Transit", "NA", "Seattle", "ANTON", "No"], [904389, 522, 2406, 136, "Corona Cruiser", "NA", "Seattle", "ANTON", "Yes"], [907265, 747, 305, 296, "San Diego International Airport", "NA", "Denver & Boulder, CO", "Noam", "No"], [910268, 522, 2427, 136, "University of San Diego - Tram Service", "NA", "Seattle", "ANTON", "Yes"], [916258, 522, 2445, 136, "Angel Island Tiburon Ferry", "NA", "Seattle", "ANTON", "Yes"], [916259, 522, 2437, 136, "Livermore Amador Valley Transit Authority", "LAVTA", "Seattle", "ANTON", "Yes"], [916260, 522, 2439, 136, "Union City Transit", "NA", "Seattle", "ANTON", "Yes"], [916261, 522, 2438, 136, "VINE Transit", "VINE", "Seattle", "ANTON", "Yes"], [916262, 522, 2442, 136, "Petaluma Transit", "NA", "Seattle", "ANTON", "Yes"], [916263, 522, 2443, 136, "Emery Go-Round", "Emery Go-Round", "Seattle", "ANTON", "Yes"], [916264, 522, 2440, 136, "Tri Delta Transit", "NA", "Seattle", "ANTON", "Yes"], [916265, 522, 2447, 136, "Alcatraz Hornblower Ferry", "NA", "Seattle", "ANTON", "Yes"], [916266, 522, 2446, 136, "American Canyon Transit", "NA", "Seattle", "ANTON", "Yes"], [916272, 522, 2448, 136, "Lake Transit", "NA", "Seattle", "ANTON", "Yes"], [937125, 522, 2441, 136, "Sonoma Marin Area Rail Transit", "Sonoma Marin Area Rail Transit (SMART)", "Seattle", "ANTON", "Yes"], [961905, 522, 2579, 136, "CCC Xpress", "NA", "Seattle", "ANTON", "Yes"], [1003169, 522, 2706, 136, "The Victoria Clipper", "NA", "Seattle", "ANTON", "Yes"], [1009082, 302, 2740, 109, "Ojai Trolley", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1009083, 302, 2737, 109, "Moorpark Transit", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1009087, 302, 2734, 109, "Lawndale Beat", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1009099, 302, 2726, 109, "Cerritos On Wheels", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1009621, 522, 2713, 136, "Alhambra Community Transit", "NA", "Seattle", "ANTON", "Yes"], [1009622, 522, 2714, 136, "Beach Cities Transit-City of Redondo Beach", "NA", "Seattle", "ANTON", "Yes"], [1009623, 522, 2715, 136, "Bellflower Bus", "NA", "Seattle", "ANTON", "Yes"], [1009624, 522, 2716, 136, "Bell Gardens Town Trolley", "NA", "Seattle", "ANTON", "Yes"], [1009635, 522, 2719, 136, "Cudahy Cart", "NA", "Seattle", "ANTON", "Yes"], [1009636, 522, 2720, 136, "Camarillo Area Transit", "NA", "Seattle", "ANTON", "Yes"], [1009645, 522, 2721, 136, "City of Commerce Municipal Bus Lines", "NA", "Seattle", "ANTON", "Yes"], [1009649, 302, 2722, 109, "LA Go Bus", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1009721, 302, 2723, 109, "Compton Renaissance", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1009728, 302, 2725, 109, "Calabasas Trolley", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1010604, 302, 2731, 109, "Huntington Park Combi", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1010605, 302, 2730, 109, "City of El Segundo", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1010606, 302, 2744, 109, "Lynwood Trolley (Lynwood Breeze)", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1010610, 302, 2749, 109, "Spirit Bus", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1010611, 302, 2750, 109, "La Puente Link Shuttle", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1010613, 302, 2745, 109, "Rosemead Explorer", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1010614, 302, 2746, 109, "City of Sierra Madre Gateway Coach", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1010615, 302, 2747, 109, "City of South Gate", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1010616, 302, 2751, 109, "Go West Shuttle Service", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1011704, 522, 2717, 136, "Baldwin Park Transit", "NA", "Seattle", "ANTON", "Yes"], [1021778, 522, 1942, 136, "Sound Transit", "NA", "Seattle", "ANTON", "No"], [1029915, 302, 11841, 109, "Mission Bay TMA", "Mission Bay TMA", "Los Angeles, CA", "YEASHAI", "Yes"], [1058510, 1182, 12391, 540, "GTrans", "NA", "Las Vegas", "KOREN", "Yes"], [1078170, 81, 12601, 14, "Mendocino Transit Authority", "NA", "Chicago, IL", "ANTON", "Yes"], [1089060, 22, 10, 7, "San Francisco Bay Ferry", "SF Bay Ferry", "San Fransisco SF Bay Area, CA", "YEASHAI", "Yes"], [1109479, 302, 117, 109, "Riverside Transit Agency", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1122805, 302, 115, 109, "TORRANCE TRANSIT SYSTEM", "NA", "Los Angeles, CA", "AMITZUR", "Yes"], [1136930, 302, 2729, 109, "El Monte Transit", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1136932, 302, 2738, 109, "Simi Valley Transit", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1137671, 145, 35, 35, "TransLink", "TransLink", "Greater Vancouver, BC", "TBD", "Yes"], [1137671, 145, 35, 35, "TransLink", "TransLink", "Greater Vancouver, BC", "TBD", "Yes"], [1137672, 145, 35, 35, "TransLink", "TransLink", "Greater Vancouver, BC", "TBD", "No"], [1137672, 145, 35, 35, "TransLink", "TransLink", "Greater Vancouver, BC", "TBD", "No"], [1137673, 145, 35, 35, "TransLink", "TransLink", "Greater Vancouver, BC", "TBD", "No"], [1137673, 145, 35, 35, "TransLink", "TransLink", "Greater Vancouver, BC", "TBD", "No"], [1137674, 145, 35, 35, "TransLink", "TransLink", "Greater Vancouver, BC", "TBD", "No"], [1137674, 145, 35, 35, "TransLink", "TransLink", "Greater Vancouver, BC", "TBD", "No"], [1147115, 302, 124, 109, "City of Menlo Park", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1170991, 81, 13121, 14, "Tideline Water Taxi", "NA", "Chicago, IL", "ANTON", "Yes"], [1213124, 302, 125, 109, "Capitol Corridor Joint Powers Authority", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1218706, 81, 13253, 14, "Amtrak Seattle", "NA", "Chicago, IL", "ANTON", "Yes"], [1219254, 81, 13256, 14, "Ventura County Transportation Commission", "NA", "Chicago, IL", "ANTON", "Yes"], [1219256, 522, 2385, 136, "Solid Ground", "NA", "Seattle", "ANTON", "Yes"], [1219257, 522, 2385, 136, "SeaTac Airport Shuttle", "NA", "Seattle", "ANTON", "Yes"], [1219258, 522, 2385, 136, "Island Transit", "NA", "Seattle", "ANTON", "Yes"], [1221174, 81, 13259, 14, "Amazon SLU Shuttle - Employees Only", "NA", "Chicago, IL", "ANTON", "Yes"], [1221707, 81, 13265, 14, "Amtrak LA", "NA", "Chicago, IL", "ANTON", "Yes"], [1223119, 81, 13268, 14, "MVgo Mountain View", "NA", "Chicago, IL", "ANTON", "Yes"], [1228410, 81, 13290, 14, "San Benito County Express", "NA", "Chicago, IL", "ANTON", "Yes"], [1229261, 81, 13294, 14, "Altamont Corridor Express", "NA", "Chicago, IL", "ANTON", "Yes"], [1286336, 302, 109, 109, "Metro - Los Angeles", "NA", "Los Angeles, CA", "AMITZUR", "Yes"], [1288217, 81, 13467, 14, "Grays Harbor Transit", "NA", "Chicago, IL", "ANTON", "Yes"], [1288220, 81, 13466, 14, "Clallam Transit System", "NA", "Chicago, IL", "ANTON", "Yes"], [1288221, 81, 13466, 14, "Clallam Transit System", "NA", "Chicago, IL", "ANTON", "No"], [1288222, 81, 13468, 14, "Jamestown S'klallam", "NA", "Chicago, IL", "ANTON", "Yes"], [1288225, 81, 13469, 14, "Jefferson Transit Authority", "NA", "Chicago, IL", "ANTON", "Yes"], [1288226, 81, 13470, 14, "Mason Transit Authority", "NA", "Chicago, IL", "ANTON", "Yes"], [1291634, 302, 2758, 109, "City of West Hollywood", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1297756, 81, 13493, 14, "AirTrain", "AirTrain", "Chicago, IL", "ANTON", "Yes"], [1347766, 145, 13594, 35, "YVR Skylynx", "NA", "Greater Vancouver, BC", "TBD", "Yes"], [1347766, 145, 13594, 35, "YVR Skylynx", "NA", "Greater Vancouver, BC", "TBD", "Yes"], [1360766, 522, 2385, 136, "Seattle Monorail", "NA", "Seattle", "ANTON", "Yes"], [1381671, 81, 13711, 14, "Dumbarton Express Consortium", "NA", "Chicago, IL", "ANTON", "Yes"], [1494486, 81, 13493, 14, "San Mateo County Transit District", "NA", "Chicago, IL", "ANTON", "Yes"], [1495773, 143, 13982, 32, "PresidiGo", "NA", "Toronto", "AMITZUR", "Yes"], [1495775, 143, 13981, 32, "City of Palo Alto Shuttle", "NA", "Toronto", "AMITZUR", "Yes"], [1508995, 143, 14010, 32, "Santa Cruz Metro", "Santa Cruz Metro", "Toronto", "AMITZUR", "Yes"], [1508996, 143, 14009, 32, "Monterey-Salinas Transit", "MST", "Toronto", "AMITZUR", "Yes"], [1544344, 143, 14115, 32, "Skagit Transit", "NA", "Toronto", "AMITZUR", "Yes"], [1573970, 143, 14187, 32, "Sonoma County Airport Express", "NA", "Toronto", "AMITZUR", "Yes"], [1576809, 302, 2727, 109, "MV - DowneyLink", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1588634, 302, 2739, 109, "Valley Express", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1590157, 302, 2733, 109, "Kanan Shuttle", "NA", "Los Angeles, CA", "YEASHAI", "Yes"], [1590161, 143, 14245, 32, "Griffith Park", "NA", "Toronto", "AMITZUR", "Yes"], [1633965, 143, 33, 32, "Port of Portland", "NA", "Toronto", "YEASHAI", "Yes"], [1641516, 143, 14365, 32, "Canby Area Transit", "NA", "Toronto", "AMITZUR", "Yes"], [1641517, 143, 14364, 32, "South Metro Area Regional Transit", "NA", "Toronto", "AMITZUR", "Yes"], [1641518, 143, 14366, 32, "South Clackamas Transportation District", "NA", "Toronto", "AMITZUR", "Yes"], [1641558, 143, 14367, 32, "Columbia County Rider", "NA", "Toronto", "AMITZUR", "Yes"], [1641559, 143, 14367, 32, "Sunset Empire Transportation District", "NA", "Toronto", "AMITZUR", "Yes"], [1641560, 143, 14367, 32, "Sunset Empire Transportation District", "NA", "Toronto", "AMITZUR", "No"], [1641561, 143, 14367, 32, "Tillamook County Transportation District", "NA", "Toronto", "AMITZUR", "Yes"], [1647979, 143, 14373, 32, "NorthWest POINT", "NA", "Toronto", "AMITZUR", "Yes"]];

    function doFirst() {
        var agencyAreaInfoHtml =
            `
            <form>
            <div class="form-row">
                <div class="col-2 mb-1">
                    <label for="SearchAreaByName">Agency DS</label>
                    <input type="text" class="form-control form-control-sm" name="searchByagencyUniqueDS"
                        id="searchByAgencyUniqueDS" placeholder="Start Typing..." list="agencyUniqueDSSuggestions">
                    </input>
                    <datalist id="agencyUniqueDSSuggestions">
                    </datalist>
                </div>
                <div class="col mb-1">
                    <label for="editorDSPage">Agency Name</label>
                    <input type="text" class="form-control form-control-sm" name="agencyName" id="searchByAgencyName"
                        placeholder="Start typing" list="agencyNameSuggestions"></input>
                    <datalist id="agencyNameSuggestions">
                    </datalist>
                </div>
                <div class="col-2 mb-1">
                    <label for="editorDSPage">Agency ID</label>
                    <input type="text" class="form-control form-control-sm" name="agencyID" id="searchByAgencyID"
                        placeholder="Start typing" list="agencyIDSuggestions"></input>
                    <datalist id="agencyIDSuggestions">
                    </datalist>
                </div>
            </div>
            <div class="form-row">
                <div class="col-2 mb-1">
                    <label for="editorDSPage">Metro Code</label>
                    <input type="text" class="form-control form-control-sm" name="areaId" id="searchByAreaId"
                        placeholder="Start typing" list="areaIdSuggestions"></input>
                    <datalist id="areaIdSuggestions">
                    </datalist>
                </div>
                <div class="col mb-1">
                    <label for="SearchAreaByName">Metro Name</label>
                    <input type="text" class="form-control form-control-sm" name="areaName" id="searchByAreaName"
                        placeholder="Start Typing..." list="areaNameSuggestions">
                    </input>
                    <datalist id="areaNameSuggestions">
                    </datalist>
                </div>
                <div class="col-2 mb-1">
                    <label for="editorDSPage">Metro default DS</label>
                    <input type="text" class="form-control form-control-sm" name="editorDSID" id="searchByEditorDSID"
                        placeholder="Start typing" list="DSSuggestions"></input>
                    <datalist id="DSSuggestions">
                    </datalist>
                </div>
            </div>
            <div class="form-row">
                <div class="col mb-1">
                    <button class="btn btn-primary" id="goSA">Alerts</button>
                </div>
                <div class="col mb-1">
                    <button class="btn btn-primary" id="goSTC">STC</button>
                </div>
            </div>
        </form>
        `;
        var agencyInfoDiv = [];
        agencyInfoDiv.push(document.getElementById("agencyAreaInfo"));
        agencyInfoDiv[0].innerHTML = agencyAreaInfoHtml;
        //google.script.run.withSuccessHandler(updateAreaInfo)
        //    .getAreaData();
        updateSuggestionsList(agencyInfo);
        /*document.addEventListener('change', function (e) {
            if (e.target.tagName == "INPUT") {
                agencyInfoautoComplete(e.target.id);
            }
        });*/
    }

    function agencyInfoautoComplete(elemID) {
        elemVal = document.getElementById(elemID).value;
        if (elemID == "searchByEditorDSID") {
            var relevantValues = areaSheetArray.find(area => area[2] == elemVal);
            document.getElementById("searchByAreaName").value = relevantValues[1];
        }
        if (elemID == "searchByAreaName") {
            var relevantValues = areaSheetArray.find(area => area[1] == elemVal);
            document.getElementById("searchByEditorDSID").value = relevantValues[2];
        }
        if (elemID == "searchByAgencyID") {
            var relevantValues = agencySheetArray.find(area => area[0] == elemVal);
            document.getElementById("searchByAgencyName").value = relevantValues[1];
            document.getElementById("searchByAgencyUniqueDS").value = relevantValues[2];
        }
        if (elemID == "searchByAgencyName") {
            var relevantValues = agencySheetArray.find(area => area[1] == elemVal);
            document.getElementById("searchByAgencyID").value = relevantValues[0];
            document.getElementById("searchByAgencyUniqueDS").value = relevantValues[2];
        }
        if (elemID == "searchByAgencyUniqueDS") {
            var relevantValues = agencySheetArray.find(area => area[2] == elemVal);
            document.getElementById("searchByAgencyID").value = relevantValues[0];
            document.getElementById("searchByAgencyName").value = relevantValues[1];
        }

    }

    function updateSuggestionsList(suggestionsListArray) {
        var finalList = [];
        var optionsLength = 0;
        for (var i = 0; i < suggestionsListArray[0].length; i++) {
            var options = new Set();
            for (var j = 0; j < suggestionsListArray.length; j++) {
                stringCheck = suggestionsListArray[j][i] + "";
                if (j === 0) {
                    if (stringCheck.includes("TBC")) {
                        break;
                    }
                    else {
                        finalList.push([stringCheck]);
                    }
                }
                else {
                    options.add("<option value=" + '"' + stringCheck + '">');
                }
            }
            finalList[finalList.length - 1].push([...options].join(''));
        }
        
        finalList.forEach(function (item) {
            document.getElementById(item[0]).innerHTML = item[1];
        });
    }

    function addFormEventListener() {
        // document.getElementById("SaveAlertData").addEventListener("click", addNewAlertToSheet);
    }
    function doLoad() {


    }
    //doLoad();
    doFirst();
    // updateControls();
    addFormEventListener();
    // getData();
});