// DOM Elements - Book Room 


const NameInput = document.getElementById("Name");
const genderInput = document.getElementById("gender");
const roomInput = document.getElementsByName("roomType");
const numberofRoomsInput = document.getElementById("numRooms");
const extraBedInput = document.getElementById("extraBed");
const singleInput = document.getElementById("single");
const doubleInput = document.getElementById("double");
const tripleInput = document.getElementById("triple");
const numofmealsInput = document.getElementsByName("mealsNum");
const numofadultsInput = document.getElementById("numAdults");
const childrenbelwo5Input = document.getElementById("youngchildren");
const childrenabove5Input = document.getElementById("childrenabove5");
const checkinInput = document.getElementById("checkIn");
const checkoutInput = document.getElementById("checkOut");
const daysOutput = document.getElementById("numofDays");
const durationInput = document.getElementsByName("duration");
const extrareqInput = document.getElementsByName("extrareq");
const wifiInput = document.getElementById("wifi");
const poolviewInput = document.getElementById("poolview");
const gardenviewInput = document.getElementById("gardenview");
const promocodeInput = document.getElementById("promocode");
const currentCostOutput1 = document.getElementById("currentCostOutput");
const currentCostOutput2 = document.getElementById("output2");
const currentCostOutput3 = document.getElementById("output3");
const currentCostOutput4 = document.getElementById("output4");
const currentCostOutput5 = document.getElementById("output5");
const currentCostOutput6 = document.getElementById("output6");
const currentCostOutput7 = document.getElementById("output7");
const bookBtn = document.getElementById("bookButton");
const addfavBtn = document.getElementById("favButton");
const checkfavBtn = document.getElementById("checkFav");
const resetfavBtn = document.getElementById("resetForm");
const checkloyaltyBtn = document.getElementById("checkLoyaltyBtn");
const popUpoutput = document.getElementById("popup");
const continueBtn = document.getElementById("continueBtn");
const popusdetailsOutput = document.getElementById("popusdetails");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const closeBtnInput = document.getElementById("closeBtn");
const closeBtn2Input = document.getElementById("closeBtn2");

// DOM Elements - Adventure Booking

const adventureInput = document.getElementsByName("adventure");
const divinguideInput = document.getElementsByName("divinguide");
const localadultsInput = document.getElementById("localadults");
const localkidsInput = document.getElementById("localkids");
const foreignadultsInput = document.getElementById("foreignadults");
const foreignkidsInput = document.getElementById("foreignkids");
const adultsguideInput = document.getElementById("adultsguide");
const kidsguideInput = document.getElementById("kidsguide");
const advBookBtnInput = document.getElementById("advBookBtn");
const advcheckFavBtn = document.getElementById("advcheckFav");
const advresetFormInput = document.getElementById("advresetForm");
const Name2Input = document.getElementById("Name2");
const gender2Input = document.getElementById("gender2");
const loyaltyoutput = document.getElementById("loyaltyoutput");


// Event Listners - Room booking

roomInput.forEach(item => item.addEventListener("change", roomcostFuntion));
numofmealsInput.forEach(item => item.addEventListener("change", mealscalFunction));
durationInput.forEach(item => item.addEventListener("change", dateCalFunction));
extrareqInput.forEach(item => item.addEventListener("change", extrareqFunction));
bookBtn.addEventListener("click", outputfunction);
closeBtnInput.addEventListener("click", closeFunction);
closeBtn2Input.addEventListener("click", closeFunction2);
checkfavBtn.addEventListener("click", checkFavFunction);
resetfavBtn.addEventListener("click", resetbookroomFunction);

// Event Listners - Adventure
adventureInput.forEach(item => item.addEventListener("change", adventurecalFunction));
divinguideInput.forEach(item => item.addEventListener("change", guideCalFunction));
advBookBtnInput.addEventListener("click", advBookFunction);
advcheckFavBtn.addEventListener("click", advcheckfavFuntion);
advresetFormInput.addEventListener("click", advformresetFunction);
checkloyaltyBtn.addEventListener("click", checkloyaltyFunction)

// Variables
let Name;
let gender;
let roomType;
let roomCost;
let roomtotal;
let numberofRooms;
let pointsEarned;
let totaltpoints;
let previousloyaltypoint;
let extraBed;
let extraBedCost;
let numofadults;
let numofchildrenbelow5;
let numofchildrenabove5;
let totalMembers;
let finalmealCost;
let childmealsCost;
let numofDays;
let checkIndate;
let checkOutDate;
let extrareq;
let wifi;
let poolView;
let promoCode
let promoDiscount;
let currentCost;
let finalCost;
let finalPayable;
let finalCostwithoutpromo;

// Variables-adventure 
let advType1;
let advCost;
let advType2;
let advType3;
let advType4;
let guide1;
let guideCost;
let guide2;
let totalAdv;
let adventureOutput;
let guide;
let advoutput1;
let advoutput2;
let advoutput3;
let advoutput4;

// Initializing Variables
function initialize(){
Name = "";
gender = "";
roomType = "";
roomCost = 0;
roomtotal = 0;
numberofRooms = 0;
pointsEarned = 0;
totaltpoints = 0;
previousloyaltypoint = 0;
extraBed = "";
extraBedCost = 0;
numofadults = 0;
numofchildrenbelow5 = 0;
numofchildrenabove5 = 0;
totalMembers = 0;
finalmealCost = 0;
numofDays = 0;
checkIndate = "";
checkOutDate = "";
extrareq = "";
wifi = "";
poolView = "";
promoCode = "";
promoDiscount = 0;
currentCost = 0;
finalCost = 0;
childmealsCost = 0;
finalPayable = 0;
finalCostwithoutpromo = 0;

// Initializing Variables - Adventure Booking 
advType1 = "";
advCost = 0;
advType2 = "";
advType3 = "";
advType4 = "";
guide1 = "";
guideCost = 0;
guide2 = "";
totalAdv = 0;
adventureOutput = "";
guide = "";
advoutput1 = "";
advoutput2 = "";
advoutput3 = "";
advoutput4 = "";
}

function personalinfoFunction(){
Name = NameInput.value;

if (genderInput.options[genderInput.selectedIndex].value == "male"){
gender = "Mr. "
}else{
gender = "Ms. "
}
}
function personalinfoFunction2(){
Name = Name2Input.value;

if (gender2Input.options[gender2Input.selectedIndex].value == "male"){
gender = "Mr. "
}else{
gender = "Ms. "
}
}
function roomcostFuntion(){
if(this.value == "single"){
roomType = "Single Room(s)";
roomCost = 25000.00;
}else if(this.value == "double"){
roomType = "Double Room(s)";
roomCost = 35000.00;
}else if(this.value == "triple"){
roomType = "Triple Room(s)";
roomCost = 40000.00;
}
if(extraBedInput.checked){
extraBedCost = 8000.00;
extraBed = " Extra Bed Added ";
}else{
extraBedCost = 0;
extraBed = "";
}
numberofRooms = numberofRoomsInput.value;
if (numberofRooms > 3){
pointsEarned = numberofRooms * 20;
}else{
pointsEarned = 0;
}
localStorage.setItem("pointsEarned", `${pointsEarned}`);
roomtotal = (roomCost + extraBedCost) * numberofRooms;
previousloyaltypoint = Number(localStorage.getItem("previousloyaltypoint"));
totaltpoints = pointsEarned + previousloyaltypoint;
localStorage.setItem("totaltpoints", `${totaltpoints}`);
currentCostOutput1.innerText = `Room Type and Costs are ${roomType} ${roomCost} ${extraBed}. The number of rooms ${numberofRooms} and the Room payable is ${roomtotal}`;
}
function mealscalFunction(){
numofadults = parseInt(numofadultsInput.value);
numofchildrenbelow5 = parseInt(childrenbelwo5Input.value);
numofchildrenabove5 = parseInt(childrenabove5Input.value);
totalMembers = numofadults + numofchildrenabove5;
let mealCost = (totalMembers * 10000);
if (numofchildrenabove5 > 0){
childmealsCost = 5000;
}else{
childmealsCost = 0;
}
finalmealCost = mealCost + childmealsCost;
currentCostOutput2.innerText = `Number of adults is ${numofadults} and the number of children below and above is ${numofchildrenbelow5} and ${numofchildrenabove5}, The total Meal Cost is LKR ${finalmealCost}` ;
}
function dateCalFunction(){
checkIndate = checkinInput.value;
checkOutDate = checkoutInput.value;

let checkOut = new Date(checkoutInput.value);
let checkIn = new Date(checkinInput.value);

if (isNaN(checkOut)){
daysOutput.innerText = "Invalid Date";
}else if (isNaN(checkIn)){
daysOutput.innerText = "Invalid Date";
}
else{
let difference = checkOut.getTime() - checkIn.getTime();
if (`${difference}` < 0){
daysOutput.innerText = "Invalid Date";
}else{
numofDays = difference / (1000 * 3600 * 24);
daysOutput.innerText = `${numofDays}`;
}
}
finalCost = (roomtotal + finalmealCost) * numofDays;
finalCostwithoutpromo = (roomtotal + finalmealCost) * numofDays;
currentCostOutput4.innerText = `Final Payable is (Wihtout Promotion Discounts) LKR ${finalCostwithoutpromo}`;
}
function extrareqFunction(){
if(this.value == "wifi"){
if(this.checked){
wifi = "WIFI Included \n";
}else{
wifi = " ";
}
}else if(this.value == "poolview"){
poolView = " Pool View Included";
}else if(this.value == "gardenview"){
poolView = " Garden View Included";
}else{
poolView = " ";
}
extrareq = wifi + poolView;
currentCostOutput3.innerText = `Extra requirements\n ${extrareq}`;
}
function promoFunction(){
promoCode = promocodeInput.value;
if(promoCode === "Promo123"){
promoDiscount = finalCost * (5/100);
finalCost -= promoDiscount;
finalPayable = finalCost;
}
}

function outputfunction(){
personalinfoFunction();
promoFunction();
popUpoutput.classList.toggle('active');
popusdetailsOutput.innerHTML =
`

<h3>${gender} ${Name}</h3>
<p>
Selected Room Type - ${roomType} ${extraBed}<br> Room(s) Cost - LKR ${roomCost} <br>
Entered Number of Rooms ${numberofRooms} <br>
Total payable - LKR ${roomtotal}<br>
Loyalty Points - ${pointsEarned} <br>
Number of Adults ${numofadults} <br>
No. of Children - ${numofchildrenabove5}<br>
Total Meal Cost - LKR ${finalmealCost}<br>
Check In - ${checkIndate}<br>
Check Out - ${checkOutDate}<br>
${extrareq}<br>
Final Cost (Without Promotion Discounts) - LKR ${finalCostwithoutpromo}<br>
Final Cost (With Promotion if there any) - LKR ${finalPayable} <br>

</p>`
} 

function continueFunction(){
previousloyaltypoint = totaltpoints;
localStorage.setItem("previousloyaltypoint", `${previousloyaltypoint}`);
popUpoutput.classList.toggle('active');
currentCostOutput1.innerText = "";
currentCostOutput2.innerText = "";
currentCostOutput3.innerText = "";
currentCostOutput4.innerText = "";
currentCostOutput5.innerText = "";
currentCostOutput6.innerText = "";
currentCostOutput7.innerText = "";

//Setting default
initialize();

singleInput.checked = false;
doubleInput.checked = false;
tripleInput.checked = false;
extraBedInput.checked = false;
numberofRoomsInput.value = 1;
numofadultsInput.value = 1;
childrenbelwo5Input.value = 0;
childrenabove5Input.value = 0;
checkinInput.value = "yyyy-mm-dd";
checkoutInput.value = "yyyy-mm-dd";
daysOutput.innerText = "Number of Days";
wifiInput.checked = false;
poolviewInput.checked = false;
gardenviewInput.checked = false;
promocodeInput.value = "";
personNameInput.value = "";
genderInput.value = "male";

// Setting values to default -adventure 
localadultsInput.checked = false;
localkidsInput.checked = false;
foreignadultsInput.checked = false;
foreignkidsInput.checked = false;
adultsguideInput.checked = false;
kidsguideInput.checked = false;
personName2Input.value = "";
gender2Input.value = "male";

}
function addfavFunction(){
popup2.classList.toggle('active');
// Local Storage for the Room Bookings
localStorage.setItem("name", `${Name}`);
localStorage.setItem("gender", `${gender}`);
localStorage.setItem("roomType", `${roomType}`);
localStorage.setItem("extraBed", `${extraBed}`);
localStorage.setItem("roomCost", `${roomCost}`);
localStorage.setItem("numberofRooms", `${numberofRooms}`);
localStorage.setItem("roomtotal", `${roomtotal}`);
localStorage.setItem("numofadults", `${numofadults}`);
localStorage.setItem("numofchildrenbelow5", `${numofchildrenbelow5}`);
localStorage.setItem("numofchildrenabove5", `${numofchildrenabove5}`);
localStorage.setItem("finalmealCost", `${finalmealCost}`);
localStorage.setItem("checkIndate", `${checkIndate}`);
localStorage.setItem("checkOutDate", `${checkOutDate}`);
localStorage.setItem("extrareq", `${extrareq}`);
localStorage.setItem("finalCostwithoutpromo", `${finalCostwithoutpromo}`);
localStorage.setItem("finalPayable", `${finalPayable}`);


//Adding Favorites from adventure 
localStorage.setItem("adventures", `${adventureOutput}`);
localStorage.setItem("guideforAdults", `${guide1}`);
localStorage.setItem("guideforKids", `${guide2}`);
localStorage.setItem("guideCost", `${guideCost}`);
localStorage.setItem("advfinalPayable", `${totalAdv}`);
localStorage.setItem("adventureCost", `${advCost}`);



// reset funtion
continueFunction();
}
function closeFunction(){
popup2.classList.toggle('active');
}
function closeFunction2(){
popup3.classList.toggle('active');
}
function checkFavFunction(){
popUpoutput.classList.toggle('active');

// values to variables 
let setGender = localStorage.getItem("gender");
let setName = localStorage.getItem("name");
let setroomType = localStorage.getItem("roomType");
let setExtraBed = localStorage.getItem("extraBed" );
let setRoomCost = localStorage.getItem("roomCost");
let setNumofRooms = localStorage.getItem("numberofRooms");
let setroomtotal = localStorage.getItem("roomtotal");
let setnumofadults = localStorage.getItem("numofadults");
let setnumofchildrenbelow5 = localStorage.getItem("numofchildrenbelow5");
let setnumofchildrenabove5 = localStorage.getItem("numofchildrenabove5");
let setfinalmealCost = localStorage.getItem("finalmealCost");
let setcheckIndate = localStorage.getItem("checkIndate");
let setcheckOutDate = localStorage.getItem("checkOutDate");
let setextrareq = localStorage.getItem("extrareq");
let setfinalCostwithoutpromo = localStorage.getItem("finalCostwithoutpromo");
let setfinalPayable = localStorage.getItem("finalPayable");

popusdetailsOutput.innerHTML =
`

<h3>${setGender} ${setName}</h3>
<p>
Previous Order details are as Follows : <br>
Selected Room Type - ${setroomType} ${setExtraBed} the Room(s) Cost -LKR ${setRoomCost} <br>
Entered Number of Rooms ${setNumofRooms} <br>
Total - LKR ${setroomtotal}<br>
Number of Adults ${setnumofadults} <br>
Number of Children - ${setnumofchildrenabove5}<br>
The total Meal Cost - LKR ${setfinalmealCost}<br>
Check In - ${setcheckIndate}<br>
Check Out - ${setcheckOutDate}<br>
${setextrareq}<br>
Final Cost (Without Promotion Discounts) - LKR ${setfinalCostwithoutpromo}<br>
Final Cost (With Promotion if there any) - LKR ${setfinalPayable} <br>
</p>`
}

function resetbookroomFunction(){
currentCostOutput1.innerText = "";
currentCostOutput2.innerText = "";
currentCostOutput3.innerText = "";
currentCostOutput4.innerText = "";
currentCostOutput5.innerText = "";
currentCostOutput6.innerText = "";
currentCostOutput7.innerText = "";

//values to default
initialize();

singleInput.checked = false;
doubleInput.checked = false;
tripleInput.checked = false;
extraBedInput.checked = false;
numberofRoomsInput.value = 1;
numofadultsInput.value = 1;
childrenbelwo5Input.value = 0;
childrenabove5Input.value = 0;
checkinInput.value = "yyyy-mm-dd";
checkoutInput.value = "yyyy-mm-dd";
daysOutput.innerText = "Number of Days";
wifiInput.checked = false;
poolviewInput.checked = false;
gardenviewInput.checked = false;
promocodeInput.value = "";
NameInput.value = "";
genderInput.value = "male";
}
function checkloyaltyFunction(){
popup3.classList.toggle('active');

let setpointsEarned = localStorage.getItem("pointsEarned");
let settotaltpoints = localStorage.getItem("totaltpoints");
let setpreviousloyaltypoint = localStorage.getItem("previousloyaltypoint");

loyaltyoutput.innerHTML = `
<h3>Loyalty Points Information : </h3>
Previous Loyalty Points : ${setpreviousloyaltypoint} <br>
Earned Loyalty Points : ${setpointsEarned} <br>
Total Loyalty Points : ${settotaltpoints}
`
}

// Functions - Adventure - Event Listners
function adventurecalFunction(){
if(this.value == "localAdults"){
if(this.checked){
advType1 = "Diving - local Adults (1 hr) - LKR 5000\n";
advoutput1 = `Diving - local Adults (1 hr)  - LKR 5000 <br>`
advCost += 5000;
}else{
adventure1 = "";
advType1 = "";
advCost -= 5000;
}
}else if(this.value == "locakkids"){
if(this.checked){
advType2 = " Diving - local kids  - LKR 2000\n";
advoutput2 = `Diving - local kids  - LKR 2000 <br>`
advCost += 2000;
}else{
adventure2 = "";
advType2 = "";
advCost -= 2000;
}
}else if(this.value == "foreignadults"){
if (this.checked){
advType3 = " Diving - foreign adults  - LKR 10000\n";
advoutput3 = `Diving - foreign adults  - LKR 10000 <br>`
advCost += 10000;
}else{
adventure3 = "";
advType3 = "";
advCost -= 10000;
}
}else if(this.value == "foreignkids"){
if(this.checked){
advType4 = " Diving - foreign kids - LKR 5000";
advoutput4 = `Diving - foreign kids - LKR 5000 <br>`
advCost += 5000;
}else{
adventure4 = "";
advType4 = "";
advCost -= 5000;
}
}
totalAdv = advCost + guideCost;
adventureOutput = ` ${advoutput1} ${advoutput2} ${advoutput3} ${advoutput4}`;
currentCostOutput5.innerText = ` ${advType1} ${advType2} ${advType3} ${advType4}`;
currentCostOutput7.innerText = `Total - LKR ${totalAdv}`
}
function guideCalFunction(){
if(this.value == "adultsguide"){
if(this.checked){
guide1 = `Adults Guide Cost - LKR 1000\n`;
guideCost += 1000;
}else{
guide1 = "";
guideCost -= 1000;
}
}else if(this.value == "kidsguide"){
if(this.checked){
guide2 = ` Kids Guide Cost - LKR 500\n`;
guideCost += 500;
}else{
guide2 = "";
guideCost -= 500;
}
}
guide = `${guide1} ${guide2} Total Guide Cost - ${guideCost}`;
currentCostOutput6.innerText = `${guide}`;
totalAdv = advCost + guideCost;
currentCostOutput7.innerText = `Total - LKR ${totalAdv}`
}
function advBookFunction(){
personalinfoFunction2();
popUpoutput.classList.toggle('active');
popusdetailsOutput.innerHTML =
`
<h3>${gender} ${Name}</h3>
<p>
${adventureOutput} <br>
Guidance Selection, <br>
${guide1} <br> \n ${guide2} <br>
Total - ${totalAdv} <br>

</p>
`
}
function advcheckfavFuntion(){
popUpoutput.classList.toggle('active');

let setGender = localStorage.getItem("gender");
let setName = localStorage.getItem("name");
let setadventures = localStorage.getItem("adventures");
let setguideforAdults = localStorage.getItem("guideforAdults");
let setguideforKids = localStorage.getItem("guideforKids");
let setguideCost = localStorage.getItem("guideCost");
let setfinalPayable = localStorage.getItem("advfinalPayable");
let setadventureCost = localStorage.getItem("adventureCost");

popusdetailsOutput.innerHTML =
`

<h3> ${setGender} ${setName}</h3>
<p>
Selected Adventures are, <br>
${setadventures} <br>
Guidance Selection, <br>
${setguideforAdults} <br> \n ${setguideforKids} <br>
Total Payable - ${setfinalPayable} <br>

</p>
`
}
function advformresetFunction(){
currentCostOutput1.innerText = "";
currentCostOutput2.innerText = "";
currentCostOutput3.innerText = "";
currentCostOutput4.innerText = "";
currentCostOutput5.innerText = "";
currentCostOutput6.innerText = "";
currentCostOutput7.innerText = "";
initialize();
// values -adventure - default
localadultsInput.checked = false;
localkidsInput.checked = false;
foreignadultsInput.checked = false;
foreignkidsInput.checked = false;
adultsguideInput.checked = false;
kidsguideInput.checked = false;
Name2Input.value = "";

gender2Input.value = "male";
}

initialize()


