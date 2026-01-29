// Navigate to state page when a state card is clicked
function goToState(stateFileName) {
    window.location.href = "states/" + stateFileName + ".html";
}

/*
USAGE IN HTML (example):

<div class="state-card" onclick="goToState('telangana')">
    <img src="images/states/telangana.jpg" alt="Telangana">
    <h3>Telangana</h3>
</div>
*/
