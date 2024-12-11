function businessHours() {

    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hours = {
        Sunday: "Closed",
        Monday: "9:00 A.M. - 6:00 P.M.",
        Tuesday: "9:00 A.M. - 6:00 P.M.",
        Wednesday: "9:00 A.M. - 6:00 P.M.",
        Thursday: "9:00 A.M. - 6:00 P.M.",
        Friday: "9:00 A.M. - 6:00 P.M.",
        Saturday: "Closed"
    };
    const today = new Date();
    const currentDay = dayOfWeek[today.getDay()];

    document.getElementById("current_day").innerText = `Today is ${currentDay}`;
    document.getElementById("business_hours").innerText = `Business Hours: ${hours[currentDay]}`;
    document.getElementById("closed_daily").innerText = `Closed Daily: 1:00 P.M. - 2:00 P.M.`;

    //showing all hours on button click
    function moreHours() {
        const moreTimes = document.getElementById("more_times");
        const moreButton = document.getElementById("more_button");

        if (moreTimes.style.display === "" || moreTimes.style.display === "none") { //first one is for the block, second one for when prop changes to none
            //if moreTimes is not displayed, show them and change button text
            let times = "";
            for (let day in hours) {
                times += `${day}: ${hours[day]}\n`;
            }
            moreTimes.innerText = `All Business Hours:\n\n${times}`;
            moreTimes.style.display = "block";
            moreButton.innerText = "Hide Hours";

        }
        else{
            //if more times are displayed, hide them and change button text
            moreTimes.style.display = "none";
            moreButton.innerText = "More Hours";
        }
    }
    //event listener
    document.getElementById("more_button").addEventListener("click", moreHours);
    

}
window.onload= businessHours;
