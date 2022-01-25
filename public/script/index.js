import loadScreenings from "./loadScreening.js";

async function loadData() {
    const screeningData = await loadScreenings();
}; 

loadData();