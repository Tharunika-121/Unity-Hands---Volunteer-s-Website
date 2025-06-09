function navigateToApp() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('appPage').style.display = 'block';
}

function navigateToHome() {
    document.getElementById('appPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}

// District Problems Functionality
const problems = {
   Ariyalur: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Chengalpattue: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Chennai: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Coimbatore: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Cuddalore: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Dharmapuri: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Dindigul: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Erode: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Kallakurichi: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Kancheepuram: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Kanyakumari: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Karur: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering' ] ,
  Krishnagiri: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Madurai: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Mayiladuthurai: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Namakkal: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Nilgirisai: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Perambalure: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
     Pudukkottai: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Ramanathapuram: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Ranipet: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Salem: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Sivaganga: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Tenkasiai: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Thanjavur: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Theni: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Thoothukudi: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Tiruchirappalliy: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Tirunelveli: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Tirupathur: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Tiruppurre: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Tiruvalluri: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Tiruvannamalai: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Tiruvarur: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Vellore: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Viluppuram: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering'],
  Virudhunagar: ['Blood Donation', 'Waste Management', 'Education', 'Disaster Relief', 'water pollution from industrial activities', 'Tutoring students', 'Spoken English practice', 'Tree planting with local community support', 'Cleaning drives', 'Awareness campaigns', 'Assisting in old-age homes', 'Conducting art, craft, or dance classes', 'Reading sessions in villages', 'social media volnteering']
    
};

function loadDistrictProblems() {
    const district = document.getElementById('districtSelect').value;
    const problemsDiv = document.getElementById('districtProblems');
    
    problemsDiv.innerHTML = '';

    if (district && problems[district]) {
        let content = `<h2>Problem Statements in ${district}</h2>`;
        
        problems[district].forEach(problem => {
            content += `
                <div class="problem">
                    <h3>${problem}</h3>
                    <button onclick="becomeLeader('${problem}')">Become Leader</button>
                </div>
            `;
        });

        content += `<button onclick="suggestProblem()">Suggest Problem Statement</button>`;
        problemsDiv.innerHTML = content;
    }
}

function becomeLeader(problem) {
    const googleFormLink = `https://docs.google.com/forms/d/e/1FAIpQLSePVGci5IPcR938QKR5emYJVp4Bg8wACwk8tB0pEpTwWDW5aQ/viewform?usp=header`; 
    alert(`You are now applying to become a leader for "${problem}".\nPlease submit your proof via this link: ${googleFormLink}`);
    window.open(googleFormLink, '_blank');
}

function suggestProblem() {
    const googleFormLink = `https://docs.google.com/forms/d/e/1FAIpQLSce6I_9LmUEw6OZyCteJeFcBH6aSTAf2V2l_Iwgggc0ecK1tA/viewform?usp=header`; 
    alert(`Please suggest a new problem statement via this link: ${googleFormLink}`);
    window.open(googleFormLink, '_blank');
}
